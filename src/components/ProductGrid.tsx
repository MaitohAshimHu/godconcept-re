'use client';

import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { products, categories, Product } from '@/data/products';
import ProductModal from './ProductModal';

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const filterRef = useRef<HTMLDivElement>(null);

  const filtered = activeCategory === 'All'
    ? products
    : products.filter((p) => p.category === activeCategory);

  const open = useCallback((p: Product) => setSelectedProduct(p), []);
  const close = useCallback(() => setSelectedProduct(null), []);

  return (
    <>
      <section id="collections" className="bg-[#080808] pt-20 pb-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-screen-xl mx-auto">

          {/* Section header */}
          <div className="mb-10 lg:mb-14">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-[9px] sm:text-[10px] tracking-[0.4em] uppercase font-sans mb-3 sm:mb-4"
              style={{ color: 'var(--gold)' }}
            >
              — The Collection
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.08 }}
              className="font-display font-light text-white leading-[0.92] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(2.4rem, 9vw, 5rem)' }}
            >
              Discover Your<br />
              <em style={{ color: 'var(--gold)' }}>Signature Scent</em>
            </motion.h2>
          </div>

          {/* Category filter — horizontally scrollable on mobile */}
          <div className="relative mb-8 sm:mb-10 -mx-4 sm:mx-0">
            <div
              ref={filterRef}
              className="flex gap-2 overflow-x-auto px-4 sm:px-0 sm:flex-wrap pb-1 scrollbar-none"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {categories.map((cat) => {
                const active = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    id={`filter-${cat.toLowerCase().replace(/\s/g, '-')}`}
                    onClick={() => setActiveCategory(cat)}
                    className="flex-shrink-0 px-4 py-2 rounded-full text-[9px] sm:text-[10px] tracking-[0.25em] uppercase font-sans font-medium transition-all duration-300 whitespace-nowrap"
                    style={
                      active
                        ? { background: 'var(--gold)', color: '#000' }
                        : { background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.08)' }
                    }
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
            {/* Fade edge on mobile to hint scroll */}
            <div className="sm:hidden absolute right-0 top-0 h-full w-8 pointer-events-none"
              style={{ background: 'linear-gradient(to right, transparent, #080808)' }} />
          </div>

          {/* Product grid — 2 cols on mobile, 3 on md, 4 on xl */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-5"
            >
              {filtered.map((product, idx) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={idx}
                  hovered={hoveredId === product.id}
                  anyHovered={hoveredId !== null}
                  onHover={() => setHoveredId(product.id)}
                  onLeave={() => setHoveredId(null)}
                  onOpen={() => open(product)}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Custom order CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mt-14 sm:mt-20"
          >
            <p className="text-white/25 text-xs sm:text-sm mb-4 sm:mb-5 font-sans">
              Don&apos;t see your favourite scent? We can source it.
            </p>
            <a
              id="custom-order-btn"
              href="https://wa.me/919999999999?text=Hi!%20I%20want%20a%20custom%20fragrance."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] tracking-[0.3em] uppercase font-sans border px-7 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
              style={{ borderColor: 'rgba(201,169,110,0.3)', color: 'var(--gold)' }}
            >
              Request Custom Order
            </a>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProduct && (
          <ProductModal product={selectedProduct} onClose={close} />
        )}
      </AnimatePresence>
    </>
  );
}

/* ── Product Card ── */
interface CardProps {
  product: Product;
  index: number;
  hovered: boolean;
  anyHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  onOpen: () => void;
}

function ProductCard({ product, index, hovered, anyHovered, onHover, onLeave, onOpen }: CardProps) {
  const [imgErr, setImgErr] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: (index % 2) * 0.06, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onOpen}
      className="group relative cursor-pointer select-none"
      style={{
        opacity: anyHovered && !hovered ? 0.5 : 1,
        transition: 'opacity 0.4s ease',
      }}
    >
      {/* Image — square on mobile, 3:4 portrait on sm+ */}
      <div
        className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl aspect-square sm:aspect-[3/4]"
        style={{ background: '#0F0F0F', border: '1px solid rgba(255,255,255,0.05)' }}
      >
        <Image
          src={imgErr ? '/products/product_10.png' : product.localImage}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
          onError={() => setImgErr(true)}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" />

        {/* Category tag */}
        <div className="absolute top-2.5 sm:top-3 right-2.5 sm:right-3">
          <span
            className="text-[8px] sm:text-[9px] tracking-[0.25em] uppercase font-sans px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-full backdrop-blur-md"
            style={{ background: 'rgba(8,8,8,0.75)', color: 'var(--gold)', border: '1px solid rgba(201,169,110,0.2)' }}
          >
            {product.category}
          </span>
        </div>

        {/* Desktop hover overlay */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          className="hidden sm:flex absolute inset-0 items-center justify-center"
          style={{ background: 'rgba(8,8,8,0.35)' }}
        >
          <div
            className="text-[9px] tracking-[0.3em] uppercase font-sans font-medium px-4 py-2.5 rounded-full border"
            style={{ borderColor: 'var(--gold)', color: 'var(--gold)', background: 'rgba(8,8,8,0.5)' }}
          >
            View Details
          </div>
        </motion.div>
      </div>

      {/* Text below card */}
      <div className="pt-3 sm:pt-4 pb-1 px-0.5">
        <p
          className="text-[8px] sm:text-[9px] tracking-[0.25em] uppercase font-sans mb-1 truncate leading-none"
          style={{ color: 'rgba(201,169,110,0.55)' }}
        >
          {product.subtitle}
        </p>
        <h3
          className="text-white font-display font-light leading-tight mb-2 sm:mb-3 line-clamp-1"
          style={{ fontSize: 'clamp(0.9rem, 4vw, 1.1rem)' }}
        >
          {product.title}
        </h3>

        {/* Notes + inquire row */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex gap-1 flex-wrap">
            {product.notes.slice(0, 2).map((n) => (
              <span
                key={n}
                className="text-[8px] sm:text-[9px] font-sans px-1.5 py-0.5 rounded-full truncate"
                style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.28)' }}
              >
                {n}
              </span>
            ))}
          </div>
          {/* Mobile tap hint */}
          <span
            className="sm:hidden text-[8px] tracking-widest uppercase font-sans flex-shrink-0"
            style={{ color: 'rgba(201,169,110,0.5)' }}
          >
            Tap →
          </span>
          <button
            id={`card-btn-${product.id}`}
            onClick={(e) => { e.stopPropagation(); onOpen(); }}
            className="hidden sm:block text-[9px] tracking-[0.25em] uppercase font-sans transition-colors duration-300 flex-shrink-0"
            style={{ color: 'rgba(201,169,110,0.55)' }}
          >
            Inquire →
          </button>
        </div>
      </div>
    </motion.div>
  );
}
