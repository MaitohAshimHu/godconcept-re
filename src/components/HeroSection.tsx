'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const MARQUEE_ITEMS = [
  'Saffron & Tonka', '·', 'Pearl & Oud', '·', 'Sauvage Dior', '·',
  'Bleu de Chanel', '·', 'Passionfruit & Oud', '·', 'Hawas Pour Homme', '·',
  'Cinnamon & Praline', '·', 'Lime & Coconut', '·',
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative h-[100svh] min-h-[600px] overflow-hidden bg-[#080808]">

      {/* Background image — portrait crop on mobile, landscape on desktop */}
      <motion.div style={{ scale: imgScale }} className="absolute inset-0">
        {/* Mobile image — portrait product shot */}
        <Image
          src="/products/product_10.png"
          alt="Saffron & Tonka fragrance"
          fill
          priority
          quality={90}
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover object-top lg:hidden"
        />
        {/* Desktop image */}
        <Image
          src="/products/product_46.png"
          alt="Sauvage Dior inspired fragrance"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center hidden lg:block"
        />

        {/* Mobile overlay — strong bottom gradient so text is readable */}
        <div className="absolute inset-0 lg:hidden"
          style={{ background: 'linear-gradient(to bottom, rgba(8,8,8,0.2) 0%, rgba(8,8,8,0.4) 40%, rgba(8,8,8,0.92) 70%, #080808 100%)' }} />
        {/* Desktop overlays */}
        <div className="absolute inset-0 hidden lg:block"
          style={{ background: 'linear-gradient(to right, #080808 0%, rgba(8,8,8,0.7) 50%, transparent 100%)' }} />
        <div className="absolute inset-0 hidden lg:block"
          style={{ background: 'linear-gradient(to top, #080808 0%, transparent 40%)' }} />
      </motion.div>

      {/* Ambient orb — desktop only */}
      <div className="hidden lg:block absolute top-1/3 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,169,110,0.07) 0%, transparent 70%)' }} />

      {/* ── Content ── */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col justify-end lg:justify-center px-5 sm:px-8 lg:px-16 pb-24 lg:pb-0 max-w-screen-xl lg:mx-auto"
      >
        {/* Eyebrow — hidden on very small mobile to save space */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="hidden sm:flex items-center gap-3 mb-6 lg:mb-8"
        >
          <div className="w-8 h-px" style={{ background: 'var(--gold)' }} />
          <span className="text-[9px] sm:text-[10px] tracking-[0.4em] uppercase font-sans font-medium"
            style={{ color: 'var(--gold)' }}>
            Luxury Fragrance House · Est. India
          </span>
        </motion.div>

        {/* Headline */}
        <div className="overflow-hidden mb-1 sm:mb-2">
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-light tracking-[-0.02em] text-white leading-[0.88]"
            style={{ fontSize: 'clamp(3.2rem, 13vw, 7.5rem)' }}
          >
            The God
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-5 sm:mb-6 lg:mb-8">
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-light tracking-[-0.02em] italic leading-[0.88]"
            style={{ fontSize: 'clamp(3.2rem, 13vw, 7.5rem)', color: 'var(--gold)' }}
          >
            Concept
          </motion.h1>
        </div>

        {/* Subtext — condensed on mobile */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/50 font-sans leading-relaxed mb-8 sm:mb-10"
          style={{ fontSize: 'clamp(0.8rem, 3.5vw, 1rem)', maxWidth: '36ch' }}
        >
          World-class fragrances inspired by iconic luxury houses —
          crafted without compromise, priced for everyone.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col xs:flex-row items-start xs:items-center gap-3 xs:gap-5"
        >
          <a
            id="hero-explore-btn"
            href="#collections"
            className="relative overflow-hidden text-[10px] sm:text-[11px] tracking-[0.28em] uppercase font-sans font-semibold px-7 py-3.5 sm:px-8 sm:py-4 rounded-full text-black transition-all duration-300 active:scale-95 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #C9A96E 0%, #E8D5B0 50%, #C9A96E 100%)',
              boxShadow: '0 4px 30px rgba(201,169,110,0.3)',
            }}
          >
            <div className="absolute inset-0 shimmer rounded-full" />
            <span className="relative z-10">Explore Collection</span>
          </a>
          <a
            id="hero-whatsapp-btn"
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] sm:text-[11px] tracking-[0.28em] uppercase font-sans font-medium flex items-center gap-2 transition-colors py-1"
            style={{ color: 'rgba(255,255,255,0.45)' }}
          >
            Inquire Now
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

        {/* Scroll indicator — desktop only */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="hidden lg:flex items-center gap-3 mt-14"
        >
          <div className="w-px h-12 relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
            <motion.div
              className="absolute top-0 left-0 w-full h-[40%]"
              style={{ background: 'var(--gold)' }}
              animate={{ y: ['0%', '250%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            />
          </div>
          <span className="text-[9px] tracking-[0.4em] uppercase font-sans" style={{ color: 'rgba(255,255,255,0.2)' }}>Scroll</span>
        </motion.div>
      </motion.div>

      {/* Marquee strip — at very bottom */}
      <div className="absolute bottom-0 inset-x-0 z-20 overflow-hidden py-2.5 border-t"
        style={{ borderColor: 'rgba(201,169,110,0.1)', background: 'rgba(8,8,8,0.7)', backdropFilter: 'blur(10px)' }}>
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className={`text-[9px] tracking-[0.35em] uppercase mx-5 font-sans font-medium ${item === '·' ? 'opacity-20' : 'opacity-25'}`}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
