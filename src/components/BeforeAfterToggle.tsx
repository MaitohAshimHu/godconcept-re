'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function BeforeAfterToggle() {
  const [showOld, setShowOld] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showOld ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [showOld]);

  return (
    <>
      {/* Floating pill */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50"
      >
        <button
          id="before-after-toggle"
          onClick={() => setShowOld(true)}
          className="flex items-center gap-2.5 text-[10px] tracking-[0.25em] uppercase font-sans font-medium px-5 py-3 rounded-full backdrop-blur-xl transition-all duration-300 hover:scale-105"
          style={{
            background: 'rgba(15,15,15,0.9)',
            border: '1px solid rgba(201,169,110,0.3)',
            color: 'var(--gold)',
            boxShadow: '0 4px 30px rgba(0,0,0,0.5)',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--gold)' }} />
          View Old Site
        </button>
      </motion.div>

      {/* Old site overlay */}
      <AnimatePresence>
        {showOld && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[999] flex flex-col"
            style={{ background: '#050505' }}
          >
            {/* Top bar */}
            <div
              className="flex items-center justify-between px-6 py-4 flex-shrink-0"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(8,8,8,0.95)', backdropFilter: 'blur(20px)' }}
            >
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full" style={{ background: '#EF4444' }} />
                <span className="text-[10px] tracking-[0.3em] uppercase font-sans text-white/30">
                  Before · <span className="text-white/60">godconcept.in (old)</span>
                </span>
              </div>
              <button
                id="close-old-site"
                onClick={() => setShowOld(false)}
                className="flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase font-sans font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #C9A96E, #E8D5B0)',
                  color: '#000',
                }}
              >
                ✦ View New Design
              </button>
            </div>

            {/* Screenshot */}
            <div className="flex-1 overflow-y-auto overflow-x-auto">
              <div className="min-w-[1024px]">
                <Image
                  src="/old-site.png"
                  alt="Old godconcept.in website"
                  width={1280}
                  height={5000}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
