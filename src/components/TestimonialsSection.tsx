'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

/* ── Featured Product Callout ── */
function FeaturedCallout() {
  return (
    <div className="relative overflow-hidden rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row gap-8 items-center"
      style={{ background: 'linear-gradient(135deg, #0F0F0F 0%, #141414 100%)', border: '1px solid rgba(201,169,110,0.12)' }}>

      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%)' }} />

      <div className="relative z-10 flex-1">
        <p className="text-[9px] tracking-[0.4em] uppercase font-sans mb-4" style={{ color: 'var(--gold)' }}>
          Most Popular
        </p>
        <h3 className="font-display text-4xl lg:text-5xl text-white font-light mb-4 leading-tight">
          Saffron &amp; Tonka<br />
          <em style={{ color: 'var(--gold)' }}>Signature Oil</em>
        </h3>
        <p className="text-white/40 text-sm leading-relaxed max-w-md font-sans mb-8">
          Our best-selling fragrance — a rich oriental masterpiece inspired by
          Teréq Intense Lattafa. Saffron opens with royal warmth while Tonka bean
          wraps you in creamy sweetness that lasts all day.
        </p>
        <a
          id="featured-inquire-btn"
          href="https://wa.me/919999999999?text=Hi!%20I'm%20interested%20in%20Saffron%20%26%20Tonka."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase font-sans font-medium px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, #C9A96E 0%, #E8D5B0 50%, #C9A96E 100%)',
            color: '#000',
          }}
        >
          Inquire Now
        </a>
      </div>

      <div className="relative w-48 h-60 lg:w-56 lg:h-72 rounded-2xl overflow-hidden flex-shrink-0">
        <Image src="/products/product_10.png" alt="Saffron & Tonka" fill className="object-cover" sizes="250px" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/40 via-transparent" />
      </div>
    </div>
  );
}

/* ── Testimonials ── */
const TESTIMONIALS = [
  { name: 'Arjun M.', loc: 'Mumbai', text: 'The Sauvage inspired scent is absolutely identical. Got so many compliments at the office. God Concept is the real deal.', rating: 5 },
  { name: 'Priya S.', loc: 'Bangalore', text: 'Ordered Pearl & Oud and Passionfruit & Oud. Both are stunning. Fast delivery, beautiful presentation. 10/10 will reorder.', rating: 5 },
  { name: 'Rohit K.', loc: 'Delhi', text: 'I was skeptical at first but the Saffron & Tonka is an absolute banger. Lasted all day! Saving thousands vs the original.', rating: 5 },
];

/* ── About Blurb ── */
function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 lg:px-12 border-t" style={{ background: '#080808', borderColor: 'rgba(255,255,255,0.04)' }}>
      <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[10px] tracking-[0.4em] uppercase mb-6 font-sans"
            style={{ color: 'var(--gold)' }}
          >
            — Our Philosophy
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-display text-5xl lg:text-6xl font-light text-white leading-[0.92] tracking-[-0.02em] mb-8"
          >
            Luxury is not<br />
            a price point.<br />
            <em style={{ color: 'var(--gold)' }}>It&apos;s a feeling.</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/40 text-sm leading-[1.9] max-w-md font-sans mb-8"
          >
            We believe everyone deserves to smell extraordinary. God Concept was born
            from a simple idea: replicate the olfactive genius of the world&apos;s greatest
            perfume houses, without the thousand-rupee markup. Premium ingredients,
            uncompromising quality, and a scent profile that commands the room.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex gap-8"
          >
            {[['500+', 'Customers'], ['14+', 'Fragrances'], ['4.9★', 'Rating']].map(([stat, label]) => (
              <div key={label}>
                <p className="font-display text-3xl font-light" style={{ color: 'var(--gold)' }}>{stat}</p>
                <p className="text-[10px] tracking-[0.25em] uppercase font-sans mt-1" style={{ color: 'rgba(255,255,255,0.3)' }}>
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Image collage */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[500px] lg:h-[600px]"
        >
          <div className="absolute top-0 left-0 w-[60%] h-[65%] rounded-2xl overflow-hidden"
            style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
            <Image src="/products/product_12.jpg" alt="Fragrance" fill className="object-cover" sizes="350px" />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#080808]/40" />
          </div>
          <div className="absolute bottom-0 right-0 w-[55%] h-[60%] rounded-2xl overflow-hidden"
            style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
            <Image src="/products/product_26.jpg" alt="Fragrance" fill className="object-cover" sizes="330px" />
            <div className="absolute inset-0 bg-gradient-to-tl from-transparent to-[#080808]/40" />
          </div>
          {/* Floating gold card */}
          <div className="absolute top-[35%] right-[30%] px-5 py-4 rounded-2xl backdrop-blur-xl z-10"
            style={{ background: 'rgba(201,169,110,0.08)', border: '1px solid rgba(201,169,110,0.2)' }}>
            <p className="font-display text-2xl font-light" style={{ color: 'var(--gold)' }}>Crafted</p>
            <p className="text-[9px] tracking-[0.3em] uppercase font-sans mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>
              with precision
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function TestimonialsSection() {
  return (
    <>
      {/* Featured callout */}
      <section className="py-16 px-6 lg:px-12" style={{ background: '#080808' }}>
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <FeaturedCallout />
          </motion.div>
        </div>
      </section>

      {/* About */}
      <AboutSection />

      {/* Testimonials */}
      <section className="py-24 px-6 lg:px-12 border-t" style={{ background: '#080808', borderColor: 'rgba(255,255,255,0.04)' }}>
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[10px] tracking-[0.4em] uppercase font-sans mb-3"
                style={{ color: 'var(--gold)' }}
              >
                — Real Reviews
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-display text-4xl lg:text-5xl font-light text-white"
              >
                Loved by thousands
              </motion.h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.12 }}
                className="relative p-7 rounded-2xl overflow-hidden"
                style={{ background: '#0F0F0F', border: '1px solid rgba(255,255,255,0.05)' }}
              >
                {/* Subtle glow */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none"
                  style={{ background: 'radial-gradient(circle, rgba(201,169,110,0.05) 0%, transparent 70%)' }} />

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j} className="text-sm" style={{ color: 'var(--gold)' }}>★</span>
                  ))}
                </div>

                <p className="text-white/50 text-sm leading-[1.8] mb-7 font-sans relative z-10">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-center gap-3 relative z-10">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-black text-sm font-bold font-sans"
                    style={{ background: 'linear-gradient(135deg, #C9A96E, #E8D5B0)' }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-white text-sm font-sans font-medium">{t.name}</p>
                    <p className="text-[10px] tracking-[0.2em] uppercase font-sans" style={{ color: 'rgba(255,255,255,0.25)' }}>
                      {t.loc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
