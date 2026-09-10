import { useState } from 'react';
import { motion } from 'motion/react';

export default function BrandManifesto() {
  const [btnBg, setBtnBg] = useState('rgba(255,255,255,0.08)');

  return (
    <section style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      {/* Image Background — NO overlay */}
      <img
        src="/img/manifesto-bg.jpg"
        alt=""
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          minHeight: '100vh',
          padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.96, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card"
          style={{
            maxWidth: '520px',
            padding: 'clamp(36px,4vw,56px)',
            borderRadius: '3px',
            textAlign: 'left',
          }}
        >
          {/* Eyebrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ width: '24px', height: '1px', background: 'rgba(125,211,252,0.6)' }} />
            <span
              style={{
                fontSize: '10px',
                letterSpacing: '0.3em',
                color: 'rgba(125,211,252,0.85)',
                fontFamily: 'var(--font-tech)',
              }}
            >
              THE POWERCREST STANDARD
            </span>
          </div>

          {/* Heading */}
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px,4vw,64px)',
              lineHeight: 0.95,
              letterSpacing: '-0.035em',
              color: 'white',
              margin: '0 0 32px 0',
            }}
            dangerouslySetInnerHTML={{ __html: 'ONE RESIN.<br/>ZERO COMPROMISE.' }}
          />

          {/* Paragraph */}
          <p
            style={{
              fontSize: '11px',
              lineHeight: 1.9,
              letterSpacing: '0.14em',
              color: 'rgba(255,255,255,0.6)',
              fontFamily: 'var(--font-tech)',
              margin: 0,
            }}
          >
            EVERY DRUM LEAVES OUR FLOOR AS A SINGLE CONTINUOUS WALL OF VIRGIN HIGH-DENSITY
            POLYETHYLENE — NO REGRIND, NO SEAMS, NO WEAK POINTS. SINCE 1996, THE INDUSTRIES THAT
            CANNOT AFFORD A LEAK HAVE SPECIFIED ONE NAME.
          </p>

          {/* Button */}
          <button
            onMouseEnter={() => setBtnBg('rgba(255,255,255,0.15)')}
            onMouseLeave={() => setBtnBg('rgba(255,255,255,0.08)')}
            style={{
              marginTop: '40px',
              padding: '14px 36px',
              background: btnBg,
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '2px',
              backdropFilter: 'blur(8px)',
              color: 'white',
              fontSize: '10px',
              letterSpacing: '0.25em',
              cursor: 'pointer',
              fontFamily: 'var(--font-tech)',
              textTransform: 'uppercase',
              transition: 'background 0.3s ease',
            }}
          >
            OUR PROCESS
          </button>
        </motion.div>
      </div>
    </section>
  );
}
