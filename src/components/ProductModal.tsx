'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Product } from '@/data/products';

export default function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const [activeImg, setActiveImg] = useState(0);
  const images = [product.localImage, ...(product.altImages ?? [])].filter(Boolean);
  const msg = encodeURIComponent(
    `Hi! I'm interested in "${product.title}" — ${product.subtitle}. Can you share pricing?`
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(16px)' }}
    >
      {/* Bottom sheet on mobile, centred card on desktop */}
      <motion.div
        initial={{ y: '100%', opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: '100%', opacity: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full sm:max-w-4xl sm:rounded-3xl overflow-hidden flex flex-col"
        style={{
          background: '#0F0F0F',
          border: '1px solid rgba(255,255,255,0.06)',
          maxHeight: '95dvh',
          /* Full height on mobile */
          height: 'min(95dvh, 700px)',
        }}
      >
        {/* ── Mobile layout: stacked (image top, content bottom) ── */}
        <div className="flex flex-col sm:hidden h-full">
          {/* Image — 45% of modal height */}
          <div className="relative flex-shrink-0 overflow-hidden" style={{ height: '44%' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImg}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <Image
                  src={images[activeImg]}
                  alt={product.title}
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                  priority
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0F0F0F]/70" />

            {/* Close button */}
            <button id="modal-close-mobile" onClick={onClose}
              className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <svg className="w-3.5 h-3.5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Category + thumbnails */}
            <div className="absolute top-3 left-3">
              <span className="text-[8px] tracking-[0.3em] uppercase px-2 py-1 rounded-full font-sans"
                style={{ background: 'rgba(8,8,8,0.8)', color: 'var(--gold)', border: '1px solid rgba(201,169,110,0.25)' }}>
                {product.category}
              </span>
            </div>
            {images.length > 1 && (
              <div className="absolute bottom-3 left-3 flex gap-1.5">
                {images.map((img, i) => (
                  <button key={i} onClick={(e) => { e.stopPropagation(); setActiveImg(i); }}
                    className="relative w-9 h-9 rounded-lg overflow-hidden transition-all duration-300"
                    style={{ border: activeImg === i ? '1.5px solid var(--gold)' : '1px solid rgba(255,255,255,0.12)', opacity: activeImg === i ? 1 : 0.5 }}>
                    <Image src={img} alt="" fill className="object-cover" sizes="36px" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Content — 56% of modal, scrollable */}
          <div className="flex-1 overflow-y-auto px-5 pt-5 pb-5 flex flex-col gap-4" style={{ minHeight: 0 }}>
            <div>
              <p className="text-[9px] tracking-[0.35em] uppercase mb-1.5 font-sans" style={{ color: 'var(--gold)' }}>
                {product.subtitle}
              </p>
              <h2 className="font-display text-2xl font-light text-white leading-tight mb-3">
                {product.title}
              </h2>
              <p className="text-white/45 text-sm leading-relaxed font-sans mb-4">
                {product.description}
              </p>

              {/* Notes */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {product.notes.map((note) => (
                  <span key={note}
                    className="text-[9px] tracking-[0.2em] uppercase px-2.5 py-1.5 rounded-full font-sans"
                    style={{ background: 'rgba(201,169,110,0.07)', color: 'rgba(201,169,110,0.8)', border: '1px solid rgba(201,169,110,0.15)' }}>
                    {note}
                  </span>
                ))}
              </div>

              {/* Quick specs */}
              <div className="grid grid-cols-2 gap-3">
                {[['Sizes', '20ml · 60ml'], ['Type', 'Extrait de Parfum'], ['Longevity', '8–12 Hrs'], ['Origin', 'India']].map(([l, v]) => (
                  <div key={l}>
                    <p className="text-[8px] tracking-[0.25em] uppercase font-sans mb-0.5" style={{ color: 'rgba(255,255,255,0.22)' }}>{l}</p>
                    <p className="text-white text-xs font-sans font-medium">{v}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA — always visible, pinned at bottom */}
            <div className="mt-auto pt-2">
              <a
                id={`inquire-mobile-${product.id}`}
                href={`https://wa.me/919999999999?text=${msg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden flex items-center justify-center gap-2.5 w-full py-4 rounded-2xl font-sans text-[11px] tracking-[0.3em] uppercase font-semibold text-black transition-all duration-300 active:scale-[0.98]"
                style={{ background: 'linear-gradient(135deg, #C9A96E 0%, #E8D5B0 50%, #C9A96E 100%)', boxShadow: '0 6px 30px rgba(201,169,110,0.3)' }}
              >
                <div className="absolute inset-0 shimmer rounded-2xl" />
                <svg className="w-4 h-4 relative z-10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span className="relative z-10">Inquire to Buy</span>
              </a>
            </div>
          </div>
        </div>

        {/* ── Desktop layout: side by side ── */}
        <div className="hidden sm:flex h-full">
          {/* Left — image */}
          <div className="relative w-[43%] flex-shrink-0 overflow-hidden bg-[#0a0a0a]">
            <button id="modal-close-desktop" onClick={onClose}
              className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(255,255,255,0.06)' }}>
              <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <AnimatePresence mode="wait">
              <motion.div key={activeImg} initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="absolute inset-0">
                <Image src={images[activeImg]} alt={product.title} fill sizes="43vw" className="object-cover" />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/80 via-transparent to-transparent" />

            <div className="absolute top-5 left-5">
              <span className="text-[9px] tracking-[0.3em] uppercase px-3 py-1.5 rounded-full font-sans"
                style={{ background: 'rgba(8,8,8,0.8)', color: 'var(--gold)', border: '1px solid rgba(201,169,110,0.25)' }}>
                {product.category}
              </span>
            </div>

            {images.length > 1 && (
              <div className="absolute bottom-5 left-5 flex gap-2">
                {images.map((img, i) => (
                  <button key={i} onClick={(e) => { e.stopPropagation(); setActiveImg(i); }}
                    className="relative w-10 h-10 rounded-lg overflow-hidden transition-all duration-300"
                    style={{ border: activeImg === i ? '1.5px solid var(--gold)' : '1px solid rgba(255,255,255,0.1)', opacity: activeImg === i ? 1 : 0.5 }}>
                    <Image src={img} alt="" fill className="object-cover" sizes="40px" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right — content */}
          <div className="flex-1 overflow-y-auto p-8 lg:p-10 flex flex-col">
            <div className="flex-1">
              <p className="text-[10px] tracking-[0.35em] uppercase mb-3 font-sans" style={{ color: 'var(--gold)' }}>
                {product.subtitle}
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-light text-white leading-tight mb-5">
                {product.title}
              </h2>
              <div className="w-full h-px mb-5" style={{ background: 'rgba(255,255,255,0.05)' }} />
              <p className="text-white/45 text-sm leading-[1.9] mb-7 font-sans">{product.description}</p>

              <div className="mb-7">
                <p className="text-[9px] tracking-[0.4em] uppercase mb-3.5 font-sans" style={{ color: 'rgba(201,169,110,0.5)' }}>
                  Fragrance Notes
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.notes.map((note, i) => (
                    <motion.span key={note} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
                      className="text-[10px] tracking-[0.2em] uppercase px-3 py-2 rounded-full font-sans"
                      style={{ background: 'rgba(201,169,110,0.07)', color: 'rgba(201,169,110,0.8)', border: '1px solid rgba(201,169,110,0.15)' }}>
                      {note}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-7">
                {[['Sizes', '20ml · 60ml'], ['Type', 'Extrait de Parfum'], ['Longevity', '8–12 Hours'], ['Origin', 'India']].map(([l, v]) => (
                  <div key={l}>
                    <p className="text-[9px] tracking-[0.3em] uppercase mb-1 font-sans" style={{ color: 'rgba(255,255,255,0.2)' }}>{l}</p>
                    <p className="text-white text-sm font-sans font-medium">{v}</p>
                  </div>
                ))}
              </div>
            </div>

            <a
              id={`inquire-desktop-${product.id}`}
              href={`https://wa.me/919999999999?text=${msg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden flex items-center justify-center gap-2.5 py-4 rounded-2xl font-sans text-[11px] tracking-[0.3em] uppercase font-semibold text-black transition-all duration-300 hover:scale-[1.02]"
              style={{ background: 'linear-gradient(135deg, #C9A96E 0%, #E8D5B0 50%, #C9A96E 100%)', boxShadow: '0 8px 40px rgba(201,169,110,0.25)' }}
            >
              <div className="absolute inset-0 shimmer rounded-2xl" />
              <svg className="w-4 h-4 relative z-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span className="relative z-10">Inquire to Buy</span>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
