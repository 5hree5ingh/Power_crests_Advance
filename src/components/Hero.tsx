import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface HeroProps {
  rangeOpen: boolean;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.96, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function Hero({ rangeOpen }: HeroProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Fixed Image Background */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          overflow: 'hidden',
          filter: rangeOpen ? 'blur(100px)' : 'blur(0px)',
          transition: rangeOpen
            ? 'filter 1.56s cubic-bezier(0.19,1,0.22,1)'
            : 'filter 1.3s cubic-bezier(0.19,1,0.22,1)',
        }}
      >
        <img
          src="/img/hero-bg.jpg"
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center center',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.06) 50%, rgba(0,0,0,0.48) 100%)',
          }}
        />
      </div>

      {/* Hero Text Block */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 20, pointerEvents: 'none' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={rangeOpen ? 'hidden' : 'visible'}
          style={{
            position: 'absolute',
            top: '50%',
            left: 'clamp(24px, 6vw, 96px)',
            transform: 'translateY(-52%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            textAlign: 'left',
            maxWidth: 'clamp(340px, 48vw, 640px)',
          }}
        >


          {/* Headline */}
          {[
            { text: 'BUILT TO', weight: 400, color: 'white' },
            { text: 'HOLD.', weight: 300, color: 'rgba(255,255,255,0.72)' },
            { text: 'ENGINEERED', weight: 400, color: 'white' },
            { text: 'TO LAST.', weight: 300, color: 'rgba(255,255,255,0.72)' },
          ].map((line, i) => (
            <div key={i} style={{ overflow: 'hidden' }}>
              <motion.div
                variants={textVariants}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(48px, 9.5vw, 130px)',
                  lineHeight: 0.91,
                  letterSpacing: '-0.035em',
                  textTransform: 'uppercase',
                  color: line.color,
                  fontWeight: line.weight,
                  textShadow: '0 4px 32px rgba(0,0,0,0.35)',
                }}
              >
                {line.text}
              </motion.div>
            </div>
          ))}

          {/* Subtext */}
          <motion.div
            variants={textVariants}
            style={{
              marginTop: '28px',
              fontSize: 'clamp(10px,1vw,11px)',
              letterSpacing: '0.2em',
              maxWidth: '360px',
              lineHeight: 1.9,
              color: 'rgba(255,255,255,0.6)',
              textShadow: '0 2px 8px rgba(0,0,0,0.3)',
              fontFamily: 'var(--font-tech)',
            }}
          >
            HDPE DRUMS, JERRY CANS AND INDUSTRIAL CONTAINERS MOULDED TO UN SPECIFICATION.
            VIRGIN RESIN, SINGLE-PASS EXTRUSION, AND A ZERO-DEFECT TOLERANCE THAT HAS
            SHIPPED OVER FOUR MILLION UNITS WITHOUT A FIELD FAILURE.
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div
        style={{
          position: 'fixed',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 20,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          opacity: scrolled ? 0 : 1,
          transition: 'opacity 0.5s ease',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            width: '1px',
            height: '48px',
            background: 'rgba(255,255,255,0.2)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            className="scroll-dot"
            style={{
              width: '3px',
              height: '3px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.6)',
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          />
        </div>
        <span
          style={{
            fontSize: '9px',
            letterSpacing: '0.3em',
            color: 'rgba(255,255,255,0.3)',
            fontFamily: 'var(--font-tech)',
          }}
        >
          SCROLL
        </span>
      </div>

      {/* Request A Quote Sticky Button */}
      <button
        style={{
          position: 'fixed',
          bottom: '32px',
          right: '32px',
          zIndex: 50,
          padding: 'clamp(12px,1.2vw,16px) clamp(24px,3vw,40px)',
          fontSize: 'clamp(11px,1vw,14px)',
          letterSpacing: '0.2em',
          color: 'white',
          cursor: 'pointer',
          borderRadius: '2px',
          fontFamily: 'var(--font-tech)',
          textTransform: 'uppercase',
          background: '#0f4c81',
          border: 'none',
          boxShadow: '0 4px 24px rgba(15,76,129,0.35)',
          transform: rangeOpen ? 'translateX(200px)' : 'none',
          opacity: rangeOpen ? 0 : 1,
          transition: 'transform 0.8s cubic-bezier(0.16,1,0.3,1), opacity 0.5s ease, background 0.3s ease',
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = '#155f9e')}
        onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = '#0f4c81')}
      >
        REQUEST A QUOTE
      </button>
    </>
  );
}
