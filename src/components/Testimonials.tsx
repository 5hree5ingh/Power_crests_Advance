import { motion } from 'motion/react';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  return (
    <section style={{ backgroundColor: 'var(--bg-base)', padding: 'clamp(80px,10vw,140px) 0' }}>
      {/* Header */}
      <div style={{ paddingLeft: 'clamp(24px,6vw,96px)', marginBottom: '48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <div style={{ width: '40px', height: '1px', background: 'var(--accent)' }} />
          <span
            style={{
              fontSize: '10px',
              letterSpacing: '0.3em',
              color: 'var(--accent)',
              fontFamily: 'var(--font-tech)',
            }}
          >
            CLIENT VOICES
          </span>
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(40px,6vw,80px)',
            letterSpacing: '-0.035em',
            color: '#0a0d10',
            margin: 0,
            lineHeight: 0.95,
          }}
        >
          THOSE WHO SPECIFY US.
        </h2>
      </div>

      {/* Horizontal Scroll Rail */}
      <div
        className="testimonial-rail scrollbar-hide"
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          gap: '20px',
          paddingLeft: 'clamp(24px,6vw,96px)',
          paddingRight: 'clamp(24px,6vw,96px)',
        }}
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="card"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: i * 0.07,
            }}
            style={{
              flexShrink: 0,
              width: 'clamp(280px,30vw,380px)',
              padding: '36px',
            }}
          >
            <p
              style={{
                fontSize: '12px',
                lineHeight: 1.9,
                letterSpacing: '0.06em',
                color: 'rgba(10,13,16,0.7)',
                marginBottom: '28px',
                fontFamily: 'var(--font-tech)',
                margin: '0 0 28px 0',
              }}
            >
              "{t.quote}"
            </p>
            <div
              style={{
                width: '24px',
                height: '1px',
                background: 'var(--accent)',
                marginBottom: '20px',
              }}
            />
            <div
              style={{
                fontSize: '11px',
                letterSpacing: '0.2em',
                color: '#0a0d10',
                marginBottom: '4px',
                fontFamily: 'var(--font-tech)',
              }}
            >
              {t.name}
            </div>
            <div
              style={{
                fontSize: '9px',
                letterSpacing: '0.2em',
                color: 'rgba(10,13,16,0.4)',
                fontFamily: 'var(--font-tech)',
              }}
            >
              {t.role} · {t.tag}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
