'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Collection', href: '#collections' },
    { label: 'Story', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-700 ${
          scrolled
            ? 'bg-[#080808]/90 backdrop-blur-2xl border-b border-white/[0.04]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2.5 sm:gap-3 group">
              <div className="relative w-7 h-7 sm:w-9 sm:h-9 opacity-90 group-hover:opacity-100 transition-opacity flex-shrink-0">
                <Image
                  src="https://godconcept.in/cdn/shop/files/GC_Logo.png?v=1713524548&width=300"
                  alt="God Concept"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <div>
                <span className="font-display text-base sm:text-xl text-white tracking-[0.2em] sm:tracking-[0.25em] uppercase block leading-none">
                  God Concept
                </span>
                <span className="hidden sm:block text-[9px] tracking-[0.4em] uppercase mt-0.5 font-sans" style={{ color: 'var(--gold)' }}>
                  Luxury Fragrances
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="relative text-[11px] tracking-[0.25em] uppercase text-white/40 hover:text-white transition-colors duration-300 group"
                >
                  {label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
                    style={{ background: 'var(--gold)' }} />
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <a
                id="header-inquire"
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-medium border px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105"
                style={{ borderColor: 'rgba(201,169,110,0.4)', color: 'var(--gold)' }}
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Inquire Now
              </a>

              {/* Mobile menu */}
              <button
                id="mobile-menu-btn"
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
              >
                <span className={`block w-6 h-px bg-white/70 transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
                <span className={`block h-px bg-white/70 transition-all duration-300 ${menuOpen ? 'w-0 opacity-0' : 'w-4'}`} />
                <span className={`block w-6 h-px bg-white/70 transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 pt-24 bg-[#080808] flex flex-col items-center justify-center gap-10"
          >
            {navLinks.map(({ label, href }, i) => (
              <motion.a
                key={label}
                href={href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07 }}
                onClick={() => setMenuOpen(false)}
                className="font-display text-5xl italic text-white/80 hover:text-white transition-colors"
              >
                {label}
              </motion.a>
            ))}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-sm tracking-widest uppercase px-8 py-4 rounded-full border"
              style={{ borderColor: 'var(--gold)', color: 'var(--gold)' }}
            >
              Inquire Now
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
