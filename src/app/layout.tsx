import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "God Concept — Luxury Inspired Fragrances",
  description:
    "Premium fragrance dupes inspired by the world's most iconic luxury perfume houses. Discover your signature scent without the luxury price tag.",
  keywords:
    "luxury fragrance dupes, perfume inspired, Dior Sauvage inspired, Bleu de Chanel inspired, affordable luxury perfume India",
  openGraph: {
    title: "God Concept — Luxury Inspired Fragrances",
    description:
      "Premium fragrance dupes inspired by the world's most iconic luxury perfume houses.",
    url: "https://godconcept.in",
    siteName: "God Concept",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="antialiased bg-[#080808] text-white font-sans">
        {children}
      </body>
    </html>
  );
}
