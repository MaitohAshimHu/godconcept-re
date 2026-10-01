export interface Product {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  notes: string[];
  imageUrl: string;
  localImage: string;
  altImages?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    title: "GC Signature Combo",
    subtitle: "The Collector's Set",
    description:
      "Our curated duo — two iconic scents bottled together for the fragrance enthusiast who never settles for less.",
    category: "Combos",
    notes: ["Amber", "Musk", "Oud", "Sandalwood"],
    imageUrl:
      "https://godconcept.in/cdn/shop/files/GC_COMBO_799.png?v=1789540669&width=2000",
    localImage: "/products/product_3.png",
  },
  {
    id: 2,
    title: "Saffron & Tonka",
    subtitle: "Inspired by Teréq Intense Lattafa",
    description:
      "A rich oriental masterpiece. Saffron opens with royal warmth, while Tonka bean wraps you in a creamy, almost edible sweetness that lingers for hours.",
    category: "Oriental",
    notes: ["Saffron", "Tonka Bean", "Rose", "Amber"],
    imageUrl:
      "https://godconcept.in/cdn/shop/files/Artboard3.png?v=1787999556&width=2000",
    localImage: "/products/product_10.png",
    altImages: ["/products/product_11.png"],
  },
  {
    id: 3,
    title: "Pearl & Oud",
    subtitle: "Inspired by Jannat E Zuhour",
    description:
      "Where Arabia meets elegance. Deep oud smoke intertwined with the soft luminescence of white musks and delicate floral accords.",
    category: "Oud",
    notes: ["Oud", "White Musk", "Jasmine", "Sandalwood"],
    imageUrl:
      "https://godconcept.in/cdn/shop/files/DSC09881_27520ecd-39a5-4e20-9092-53d211d24280.jpg?v=1784356809&width=2000",
    localImage: "/products/product_12.jpg",
    altImages: ["/products/product_13.jpg"],
  },
  {
    id: 4,
    title: "Plum & Ice",
    subtitle: "Inspired by Rasasi Hawas Ice",
    description:
      "A fresh aquatic explosion with a daring plum heart. Cool, masculine, and effortlessly captivating — perfect for the modern man.",
    category: "Fresh",
    notes: ["Plum", "Aquatic", "Cedar", "Ice"],
    imageUrl:
      "https://godconcept.in/cdn/shop/files/DSC03264.jpg?v=1783600448&width=2000",
    localImage: "/products/product_14.jpg",
    altImages: ["/products/product_15.jpg"],
  },
  {
    id: 5,
    title: "Lime & Coconut",
    subtitle: "Inspired by Creed Virgin Island Water",
    description:
      "A sun-drenched escape in a bottle. Sparkling lime zest meets tropical coconut for a scent that feels like summer forever.",
    category: "Fresh",
    notes: ["Lime", "Coconut", "Ginger", "Cedar"],
    imageUrl:
      "https://godconcept.in/cdn/shop/files/DSC03286.jpg?v=1783600746&width=2000",
    localImage: "/products/product_16.jpg",
    altImages: ["/products/product_17.jpg"],
  },
  {
    id: 6,
    title: "Passionfruit & Oud",
    subtitle: "Inspired by Oud Maracujá by Maison Crivelli",
    description:
      "An unexpected love story between exotic passionfruit and smouldering oud. Bold, artistic, and unforgettable.",
    category: "Oud",
    notes: ["Passionfruit", "Oud", "Patchouli", "Vanilla"],
    imageUrl:
      "https://godconcept.in/cdn/shop/files/GC_Website_Images_2_-13.jpg?v=1771302134&width=2000",
    localImage: "/products/product_26.jpg",
    altImages: ["/products/product_27.jpg"],
  },
  {
    id: 7,
    title: "Ginger & Green Tea",
    subtitle: "Inspired by Imagination by Louis Vuitton",
    description:
      "A zen-like freshness. Warm ginger spice and cool green tea create a beautifully balanced scent for the mindful modern soul.",
    category: "Fresh",
    notes: ["Ginger", "Green Tea", "Bergamot", "Vetiver"],
    imageUrl:
      "https://godconcept.in/cdn/shop/files/GC_Website_Images_2_-28.jpg?v=1771995789&width=2000",
    localImage: "/products/product_28.jpg",
    altImages: ["/products/product_29.jpg"],
  },
  {
    id: 8,
    title: "Cinnamon & Praline",
    subtitle: "Inspired by Althair Parfums de Marly",
    description:
      "An indulgent gourmand dream. Toasted praline and warm cinnamon create a dessert-like depth with serious sophistication.",
    category: "Gourmand",
    notes: ["Cinnamon", "Praline", "Amber", "Musk"],
    imageUrl:
      "https://godconcept.in/cdn/shop/files/GC_Website_Images_2_-05.jpg?v=1771302929&width=2000",
    localImage: "/products/product_30.jpg",
    altImages: ["/products/product_31.jpg"],
  },
  {
    id: 9,
    title: "Grapefruit & Patchouli",
    subtitle: "Inspired by Bleu de Chanel",
    description:
      "The iconic masculine signature, decoded. Zesty grapefruit meets earthy patchouli for a clean, powerful statement.",
    category: "Oriental",
    notes: ["Grapefruit", "Patchouli", "Cedar", "Vetiver"],
    imageUrl:
      "https://godconcept.in/cdn/shop/files/GC_Website_Images_2_-19.jpg?v=1771302197&width=2000",
    localImage: "/products/product_32.jpg",
    altImages: ["/products/product_33.jpg"],
  },
  {
    id: 10,
    title: "Diptyque Tam Dao SRK",
    subtitle: "The Celebrity Edition",
    description:
      "Sandalwood at its most luxurious — the Tam Dao interpretation paired with the iconic Dunhill Icon aura. Star quality in every spray.",
    category: "Woody",
    notes: ["Sandalwood", "Rosewood", "Cypress", "White Musk"],
    imageUrl:
      "https://godconcept.in/cdn/shop/files/SRK_d4a70d41-6d56-4067-9e2a-1441cb8438ff.jpg?v=1716980330&width=2000",
    localImage: "/products/product_34.jpg",
    altImages: ["/products/product_35.jpg", "/products/product_36.jpg"],
  },
  {
    id: 11,
    title: "The Most Wanted",
    subtitle: "Inspired by Azzaro The Most Wanted Intense",
    description:
      "Magnetic. Addictive. Irresistible. A powerhouse of sweet fougère and aromatic richness that commands every room you walk into.",
    category: "Oriental",
    notes: ["Lavender", "Cardamom", "Amber Wood", "Vanilla"],
    imageUrl:
      "https://godconcept.in/cdn/shop/files/Most_Wanted_67692a53-b1e0-480b-a6bb-77cc477f56b2.jpg?v=1718603138&width=2000",
    localImage: "/products/product_37.jpg",
    altImages: ["/products/product_38.jpg", "/products/product_39.jpg"],
  },
  {
    id: 12,
    title: "Hawas Pour Homme",
    subtitle: "Inspired by Rasasi Hawas",
    description:
      "A deep dive into aquatic masculinity. Powerful ocean notes mixed with spicy heart and warm base — the full package.",
    category: "Aquatic",
    notes: ["Aquatic", "Spearmint", "Violet", "Cedarwood"],
    imageUrl:
      "https://godconcept.in/cdn/shop/files/Hawas_36d59553-ad0b-4abe-8965-e6eeb920097d.jpg?v=1716980029&width=2000",
    localImage: "/products/product_40.jpg",
    altImages: ["/products/product_41.jpg", "/products/product_42.jpg"],
  },
  {
    id: 13,
    title: "Bleu de Chanel",
    subtitle: "The Iconic Fresh-Woody Accord",
    description:
      "A timeless icon revisited. Crisp citrus opens into aromatic herbs and cedar — the modern gentleman's signature scent.",
    category: "Woody",
    notes: ["Citrus", "Labdanum", "Cedar", "Incense"],
    imageUrl:
      "https://godconcept.in/cdn/shop/files/BluedeChanel.png?v=1716979020&width=2000",
    localImage: "/products/product_43.png",
    altImages: ["/products/product_44.jpg", "/products/product_45.jpg"],
  },
  {
    id: 14,
    title: "Sauvage Dior",
    subtitle: "The Wild Desert Spirit",
    description:
      "Raw and noble — the vastness of the wild desert wind captured in a bottle. Bergamot and pepper open to a bold amber-woody heart.",
    category: "Aromatic",
    notes: ["Bergamot", "Pepper", "Lavender", "Ambroxan"],
    imageUrl:
      "https://godconcept.in/cdn/shop/files/SauvageDior.png?v=1716979080&width=2000",
    localImage: "/products/product_46.png",
    altImages: ["/products/product_47.jpg", "/products/product_48.jpg"],
  },
];

export const categories = [
  "All",
  "Oriental",
  "Fresh",
  "Oud",
  "Woody",
  "Gourmand",
  "Aquatic",
  "Aromatic",
  "Combos",
];
