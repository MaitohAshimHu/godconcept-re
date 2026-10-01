export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="relative px-6 lg:px-12 py-16 border-t"
      style={{ background: '#080808', borderColor: 'rgba(255,255,255,0.04)' }}
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-3xl font-light text-white tracking-wide mb-3">
              God Concept
            </h3>
            <p className="text-[9px] tracking-[0.4em] uppercase font-sans mb-6" style={{ color: 'var(--gold)' }}>
              Luxury Fragrance House
            </p>
            <p className="text-white/30 text-sm leading-relaxed max-w-xs font-sans">
              World-class fragrances inspired by iconic luxury houses —
              crafted with premium ingredients, priced for everyone.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[9px] tracking-[0.4em] uppercase font-sans mb-6" style={{ color: 'rgba(255,255,255,0.2)' }}>
              Navigate
            </p>
            <ul className="space-y-4">
              {['Collection', 'About', 'Contact'].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-sm font-sans text-white/30 hover:text-white transition-colors duration-300"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-[9px] tracking-[0.4em] uppercase font-sans mb-6" style={{ color: 'rgba(255,255,255,0.2)' }}>
              Connect
            </p>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-sans text-white/30 hover:text-white transition-colors duration-300 flex items-center gap-2"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/godconcept.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-sans text-white/30 hover:text-white transition-colors duration-300"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: 'rgba(255,255,255,0.04)' }}
        >
          <p className="text-[10px] tracking-widest font-sans" style={{ color: 'rgba(255,255,255,0.15)' }}>
            © {year} God Concept. All rights reserved.
          </p>
          <p className="text-[10px] font-sans text-center" style={{ color: 'rgba(255,255,255,0.12)' }}>
            Fragrances inspired by luxury houses. Not affiliated with or endorsed by any brand.
          </p>
        </div>
      </div>
    </footer>
  );
}
