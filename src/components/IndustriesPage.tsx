import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

interface IndustriesPageProps {
  isOpen: boolean;
  onClose: () => void;
}

const industries = [
  {
    sector: 'CHEMICALS',
    title: 'SOLVENTS & ACIDS',
    subtitle: 'Corrosion-resistant tight-head drums with vapour-tight bungs',
    volume: '220L',
    unRating: '1H1/Y',
    description:
      'corrosion-resistant tight-head drums with vapour-tight bungs for safe storage and transport of aggressive solvents, acids, and chemical intermediates.',
  },
  {
    sector: 'AGROCHEMICALS',
    title: 'PESTICIDES & FERTILISER',
    subtitle: 'UV-stabilised drums for outdoor field storage',
    volume: '200L',
    unRating: '1H1/X',
    description:
      'UV-stabilised drums engineered for prolonged outdoor field storage, with enhanced resistance to photodegradation and chemical attack from concentrated formulations.',
  },
  {
    sector: 'LUBRICANTS',
    title: 'OILS & GREASES',
    subtitle: 'Wide-mouth open-top drums for high-viscosity decanting',
    volume: '200L',
    unRating: '1H2/Y',
    description:
      'wide-mouth open-top drums designed for high-viscosity decanting, with lever-lock ring closures that provide reliable resealing across multiple fill cycles.',
  },
  {
    sector: 'FOOD & BEVERAGE',
    title: 'CONCENTRATES & OILS',
    subtitle: 'FDA-grade natural resin, no pigment migration',
    volume: '200L',
    unRating: '1H2/Y',
    description:
      'FDA-grade natural resin drums with zero pigment migration, manufactured under food-safe protocols for edible oils, concentrates, and flavouring compounds.',
  },
  {
    sector: 'PHARMACEUTICALS',
    title: 'API & INTERMEDIATES',
    subtitle: 'Cleanroom-packed drums with tamper-evident seals',
    volume: '50L',
    unRating: '1H1/Y',
    description:
      'cleanroom-packed drums with tamper-evident seals for active pharmaceutical ingredients and intermediates, meeting the strictest contamination control standards.',
  },
  {
    sector: 'PAINTS & COATINGS',
    title: 'RESINS & PIGMENTS',
    subtitle: 'Solvent-resistant with anti-static option',
    volume: '20L',
    unRating: '3H1/Y',
    description:
      'solvent-resistant containers with optional anti-static treatment for safe handling of flammable resins, pigment dispersions, and coating base materials.',
  },
];

export default function IndustriesPage({ isOpen, onClose }: IndustriesPageProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            backgroundColor: 'var(--bg-base)',
            overflowY: 'auto',
          }}
        >
          {/* Sticky Header */}
          <div
            style={{
              position: 'sticky',
              top: 0,
              zIndex: 10,
              height: '72px',
              backgroundColor: 'rgba(244,244,241,0.92)',
              backdropFilter: 'blur(24px) saturate(180%)',
              borderBottom: '1px solid rgba(10,13,16,0.07)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 clamp(24px,6vw,80px)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                <ellipse cx="10" cy="5" rx="6" ry="2.2" stroke="#0f4c81" strokeWidth="1.4" fill="none" />
                <path d="M4 5 V15 A6 2.2 0 0 0 16 15 V5" stroke="#0f4c81" strokeWidth="1.4" fill="none" />
                <path d="M4 9 A6 2.2 0 0 0 16 9" stroke="#0f4c81" strokeWidth="1" fill="none" opacity="0.5" />
                <path d="M4 12.5 A6 2.2 0 0 0 16 12.5" stroke="#0f4c81" strokeWidth="1" fill="none" opacity="0.5" />
              </svg>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(14px,1.5vw,16px)', letterSpacing: '0.26em', color: '#0a0d10' }}>POWERCREST</span>
              <span style={{ color: 'rgba(10,13,16,0.3)', fontSize: '12px' }}>/</span>
              <span style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(10,13,16,0.5)', fontFamily: 'var(--font-tech)' }}>INDUSTRIES</span>
            </div>
            <button
              onClick={onClose}
              style={{
                padding: '9px 22px',
                fontSize: '10px',
                letterSpacing: '0.2em',
                color: 'rgba(10,13,16,0.6)',
                background: 'transparent',
                border: '1px solid rgba(10,13,16,0.1)',
                borderRadius: '100px',
                cursor: 'pointer',
                fontFamily: 'var(--font-tech)',
                textTransform: 'uppercase',
                transition: 'all 0.3s ease',
              }}
            >
              × CLOSE
            </button>
          </div>

          {/* Intro */}
          <div
            style={{
              padding: 'clamp(48px,6vw,80px)',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '80px',
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(36px,5vw,72px)',
                lineHeight: 0.95,
                letterSpacing: '-0.035em',
                color: '#0a0d10',
                margin: 0,
              }}
              dangerouslySetInnerHTML={{ __html: 'IF IT MUST NOT LEAK,<br/>WE ALREADY MAKE IT.' }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <p
                style={{
                  fontSize: '11px',
                  lineHeight: 1.9,
                  letterSpacing: '0.14em',
                  color: 'rgba(10,13,16,0.6)',
                  fontFamily: 'var(--font-tech)',
                  margin: '0 0 32px 0',
                }}
              >
                FROM CONCENTRATED ACIDS TO FOOD-GRADE OILS, POWERCREST DRUMS ARE SPECIFIED ACROSS SIX MAJOR INDUSTRIAL SECTORS. EACH APPLICATION DEMANDS ITS OWN RESIN GRADE, CLOSURE TYPE, AND CERTIFICATION — AND WE DELIVER ALL OF THEM FROM A SINGLE FACILITY.
              </p>
              <button
                style={{
                  background: 'var(--accent)',
                  color: 'white',
                  padding: '14px 36px',
                  fontSize: '10px',
                  letterSpacing: '0.22em',
                  border: 'none',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-tech)',
                  textTransform: 'uppercase',
                  alignSelf: 'flex-start',
                }}
              >
                DISCUSS YOUR APPLICATION
              </button>
            </div>
          </div>

          {/* Industry Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
              gap: '2px',
              padding: '0 clamp(48px,6vw,80px) clamp(48px,6vw,80px)',
            }}
          >
            {industries.map((ind, i) => (
              <motion.div
                key={ind.sector}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.6 }}
                style={{ overflow: 'hidden' }}
              >
                {/* Top Panel */}
                <div
                  style={{
                    height: '200px',
                    background: 'linear-gradient(135deg, #0d3a63 0%, #1a6ba8 100%)',
                    position: 'relative',
                    padding: '24px 28px',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: '24px',
                      left: '28px',
                      fontSize: '8px',
                      letterSpacing: '0.35em',
                      color: 'rgba(125,211,252,0.85)',
                      fontFamily: 'var(--font-tech)',
                    }}
                  >
                    {ind.sector}
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '28px',
                      left: '28px',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(20px,3vw,32px)',
                        color: 'white',
                        letterSpacing: '-0.02em',
                        lineHeight: 1,
                        marginBottom: '8px',
                      }}
                    >
                      {ind.title}
                    </div>
                    <div
                      style={{
                        fontSize: '10px',
                        color: 'rgba(255,255,255,0.6)',
                        letterSpacing: '0.1em',
                        fontFamily: 'var(--font-tech)',
                      }}
                    >
                      {ind.subtitle}
                    </div>
                  </div>
                </div>

                {/* Bottom Panel */}
                <div style={{ padding: '28px 32px' }}>
                  <div style={{ display: 'flex', gap: '32px', marginBottom: '16px' }}>
                    <div>
                      <div style={{ fontSize: '8px', letterSpacing: '0.25em', color: 'rgba(10,13,16,0.4)', marginBottom: '4px', fontFamily: 'var(--font-tech)' }}>
                        TYPICAL SPEC
                      </div>
                      <div style={{ fontSize: '12px', letterSpacing: '0.08em', color: '#0a0d10', fontWeight: 500, fontFamily: 'var(--font-tech)' }}>
                        {ind.volume}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '8px', letterSpacing: '0.25em', color: 'rgba(10,13,16,0.4)', marginBottom: '4px', fontFamily: 'var(--font-tech)' }}>
                        UN RATING
                      </div>
                      <div style={{ fontSize: '12px', letterSpacing: '0.08em', color: '#0a0d10', fontWeight: 500, fontFamily: 'var(--font-tech)' }}>
                        {ind.unRating}
                      </div>
                    </div>
                  </div>
                  <p
                    style={{
                      fontSize: '11px',
                      lineHeight: 1.9,
                      color: 'rgba(10,13,16,0.7)',
                      fontFamily: 'var(--font-tech)',
                      margin: '0 0 24px 0',
                      letterSpacing: '0.06em',
                      textTransform: 'none',
                    }}
                  >
                    {ind.description}
                  </p>
                  <button
                    onMouseEnter={() => setHoveredIdx(i)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    style={{
                      fontSize: '9px',
                      letterSpacing: '0.2em',
                      color: 'var(--accent)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: 'var(--font-tech)',
                      textTransform: 'uppercase',
                      padding: 0,
                      position: 'relative',
                    }}
                  >
                    REQUEST SPEC SHEET
                    <motion.span
                      animate={{ width: hoveredIdx === i ? '100%' : '0%' }}
                      transition={{ duration: 0.3 }}
                      style={{
                        position: 'absolute',
                        bottom: '-2px',
                        left: 0,
                        height: '1px',
                        background: 'var(--accent)',
                      }}
                    />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
