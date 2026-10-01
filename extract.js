const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

async function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      } else {
        reject(new Error(`Failed to download image, status code: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
}

(async () => {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 1024 });

  console.log('Navigating to https://godconcept.in...');
  await page.goto('https://godconcept.in', { waitUntil: 'networkidle2', timeout: 60000 });

  console.log('Taking full page screenshot...');
  await page.screenshot({ path: 'old-site.png', fullPage: true });

  console.log('Extracting brand config...');
  const brandConfig = await page.evaluate(() => {
    const getComputedColor = (selector, prop) => {
      const el = document.querySelector(selector);
      return el ? window.getComputedStyle(el)[prop] : null;
    };

    let logoUrl = null;
    const logoImg = document.querySelector('header img, a.logo img, img[alt*="logo" i]');
    if (logoImg) logoUrl = logoImg.src;

    const computedBody = window.getComputedStyle(document.body);
    const typography = computedBody.fontFamily;

    // A simple heuristic for colors: 
    // Button background for primary color, body background for secondary/background.
    const primaryColor = getComputedColor('button, .btn, .button, input[type="submit"]', 'backgroundColor') || computedBody.color;
    const secondaryColor = getComputedColor('body', 'backgroundColor');

    return {
      logo: logoUrl,
      primaryColor,
      secondaryColor,
      typography
    };
  });

  fs.writeFileSync('brand-config.json', JSON.stringify(brandConfig, null, 2));

  console.log('Extracting products...');
  const products = await page.evaluate(() => {
    const items = [];
    // Trying common selectors for products in e-commerce sites (Shopify, WooCommerce, custom)
    const productElements = document.querySelectorAll('.product, .product-item, .grid__item, .card, li.product, [data-product-id]');
    
    productElements.forEach(el => {
      const titleEl = el.querySelector('h2, h3, .product-title, .card__heading, .title');
      const priceEl = el.querySelector('.price, .amount, .money, .price__regular');
      const imgEl = el.querySelector('img');
      const descEl = el.querySelector('.description, .product-description'); // Usually not on list page but just in case
      
      if (titleEl && imgEl) {
        let imgSrc = imgEl.src;
        // Convert to high-res if it's a shopify image
        if (imgSrc.includes('?v=')) {
          imgSrc = imgSrc.replace(/_(\d+x\d+)\./, '.'); // Attempt to remove size constraints
        }
        
        items.push({
          title: titleEl.innerText.trim(),
          price: priceEl ? priceEl.innerText.trim() : '',
          description: descEl ? descEl.innerText.trim() : 'No description available',
          imageUrl: imgSrc
        });
      }
    });

    // If no products found via specific classes, just grab all images and assume some might be products
    if (items.length === 0) {
      const allImages = document.querySelectorAll('img');
      allImages.forEach(img => {
        if (img.width > 200 && img.height > 200) { // arbitrary size filter for products
          items.push({
            title: img.alt || 'Unknown Product',
            price: '',
            description: '',
            imageUrl: img.src
          });
        }
      });
    }

    return items;
  });

  console.log(`Found ${products.length} products.`);

  const productsDir = path.join(__dirname, 'public', 'products');
  if (!fs.existsSync(productsDir)) {
    fs.mkdirSync(productsDir, { recursive: true });
  }

  const finalProducts = [];
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    if (!product.imageUrl) continue;
    
    const ext = path.extname(new URL(product.imageUrl).pathname) || '.jpg';
    const filename = `product_${i + 1}${ext}`;
    const dest = path.join(productsDir, filename);
    
    try {
      console.log(`Downloading ${product.imageUrl} to ${filename}...`);
      await downloadImage(product.imageUrl, dest);
      product.localImage = `/products/${filename}`;
      finalProducts.push(product);
    } catch (e) {
      console.error(`Failed to download ${product.imageUrl}`, e);
    }
  }

  fs.writeFileSync('products.json', JSON.stringify(finalProducts, null, 2));

  console.log('Closing browser...');
  await browser.close();
  console.log('Extraction complete.');
})();
