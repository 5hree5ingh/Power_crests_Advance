import { motion, AnimatePresence } from 'motion/react';

interface CapabilitiesPageProps {
  isOpen: boolean;
  onClose: () => void;
}

const programmes = [
  {
    tier: 'TIER 01',
    level: 'STANDARD',
    volume: '500 UNITS / MONTH',
    features: ['STOCK COLOURS & SIZES', '14-DAY DISPATCH', 'STANDARD UN CERTIFICATION', 'BATCH TEST REPORT'],
    accent: false,
    badge: null,
    btnLabel: 'REQUEST PRICING',
  },
  {
    tier: 'TIER 02',
    level: 'CONTRACT',
    volume: '10,000 UNITS / MONTH',
    features: ['DEDICATED PRODUCTION SLOT', 'CUSTOM COLOUR MATCHING', 'PRINTED BRANDING INCLUDED', 'PRIORITY 7-DAY DISPATCH'],
    accent: true,
    badge: 'MOST SPECIFIED',
    btnLabel: 'REQUEST PRICING',
  },
  {
    tier: 'TIER 03',
    level: 'OEM',
    volume: 'BY SPECIFICATION',
    features: ['BESPOKE MOULD DEVELOPMENT', 'EXCLUSIVE TOOLING OWNERSHIP', 'ON-SITE QUALITY LIAISON', 'VENDOR-MANAGED INVENTORY'],
    accent: false,
    badge: null,
    btnLabel: 'ENQUIRE',
  },
];

const processSteps = [
  { step: '01', title: 'RESIN INTAKE', desc: 'Virgin HDPE pellets verified for density, MFI, and moisture before entering the silo.' },
  { step: '02', title: 'EXTRUSION & MOULD', desc: 'Continuous parison extruded and blow-moulded in a single pass with real-time wall monitoring.' },
  { step: '03', title: 'TRIM & LEAK TEST', desc: 'Flash trimmed, weighed, and 100% leak-tested before any drum leaves the production cell.' },
  { step: '04', title: 'PRINT & DISPATCH', desc: 'Up to six-colour print applied, palletised to spec, and dispatched with full batch traceability.' },
];

export default function CapabilitiesPage({ isOpen, onClose }: CapabilitiesPageProps) {
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
              <span style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(10,13,16,0.5)', fontFamily: 'var(--font-tech)' }}>CAPABILITIES</span>
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
              paddingBottom: 'clamp(32px,4vw,48px)',
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(40px,6vw,80px)',
                lineHeight: 0.95,
                letterSpacing: '-0.035em',
                color: '#0a0d10',
                margin: '0 0 24px 0',
              }}
            >
              SIX LINES. ONE TOLERANCE.
            </h2>
            <p
              style={{
                fontSize: '11px',
                lineHeight: 1.9,
                letterSpacing: '0.14em',
                color: 'rgba(10,13,16,0.6)',
                fontFamily: 'var(--font-tech)',
                margin: '0 0 32px 0',
                maxWidth: '600px',
              }}
            >
              FROM RESIN INTAKE TO DISPATCH, EVERY STEP IS MONITORED, MEASURED, AND TRACEABLE. OUR SIX EXTRUSION BLOW MOULDING LINES PRODUCE OVER 1.2 MILLION UNITS A YEAR WITH A WALL THICKNESS TOLERANCE OF ±0.2MM.
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
              }}
            >
              REQUEST A QUOTE
            </button>
          </div>

          {/* Programme Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '24px',
              padding: '0 clamp(32px,4vw,48px) clamp(32px,4vw,48px)',
            }}
          >
            {programmes.map((prog, i) => (
              <motion.div
                key={prog.tier}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className={prog.accent ? undefined : 'card'}
                style={{
                  padding: '40px',
                  borderRadius: '2px',
                  ...(prog.accent
                    ? {
                        background: '#0f4c81',
                        color: 'white',
                        boxShadow: '0 8px 48px rgba(15,76,129,0.3)',
                      }
                    : {}),
                }}
              >
                {prog.badge && (
                  <div
                    style={{
                      background: 'rgba(125,211,252,0.2)',
                      color: 'rgba(125,211,252,0.9)',
                      fontSize: '8px',
                      letterSpacing: '0.3em',
                      padding: '4px 12px',
                      borderRadius: '2px',
                      marginBottom: '16px',
                      display: 'inline-block',
                      fontFamily: 'var(--font-tech)',
                    }}
                  >
                    {prog.badge}
                  </div>
                )}
                <div
                  style={{
                    fontSize: '8px',
                    letterSpacing: '0.3em',
                    color: prog.accent ? 'rgba(255,255,255,0.5)' : 'rgba(10,13,16,0.4)',
                    marginBottom: '4px',
                    fontFamily: 'var(--font-tech)',
                  }}
                >
                  {prog.tier}
                </div>
                <div
                  style={{
                    fontSize: '9px',
                    letterSpacing: '0.25em',
                    color: prog.accent ? 'rgba(125,211,252,0.85)' : 'var(--accent)',
                    marginBottom: '16px',
                    fontFamily: 'var(--font-tech)',
                  }}
                >
                  {prog.level}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '32px',
                    color: prog.accent ? 'white' : '#0a0d10',
                    lineHeight: 1,
                    marginBottom: '24px',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {prog.volume}
                </div>
                <ul style={{ listStyle: 'none', margin: '0 0 24px 0', padding: 0 }}>
                  {prog.features.map((f) => (
                    <li
                      key={f}
                      style={{
                        fontSize: '9px',
                        letterSpacing: '0.15em',
                        color: prog.accent ? 'rgba(255,255,255,0.6)' : 'rgba(10,13,16,0.6)',
                        padding: '6px 0',
                        borderBottom: `1px solid ${prog.accent ? 'rgba(255,255,255,0.1)' : 'rgba(10,13,16,0.05)'}`,
                        fontFamily: 'var(--font-tech)',
                      }}
                    >
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  style={{
                    width: '100%',
                    padding: '12px',
                    fontSize: '9px',
                    letterSpacing: '0.2em',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-tech)',
                    textTransform: 'uppercase',
                    ...(prog.accent
                      ? {
                          background: 'transparent',
                          border: '1px solid rgba(255,255,255,0.3)',
                          color: 'white',
                        }
                      : {
                          background: 'var(--accent)',
                          border: 'none',
                          color: 'white',
                        }),
                  }}
                >
                  {prog.btnLabel}
                </button>
              </motion.div>
            ))}
          </div>

          {/* Process Strip */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '32px',
              padding: 'clamp(32px,4vw,48px)',
              borderTop: '1px solid rgba(10,13,16,0.07)',
              marginTop: 'clamp(32px,4vw,48px)',
            }}
          >
            {processSteps.map((step) => (
              <div key={step.step}>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '40px',
                    color: 'rgba(15,76,129,0.15)',
                    lineHeight: 1,
                    marginBottom: '12px',
                  }}
                >
                  {step.step}
                </div>
                <div
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.15em',
                    color: '#0a0d10',
                    marginBottom: '8px',
                    fontFamily: 'var(--font-tech)',
                  }}
                >
                  {step.title}
                </div>
                <p
                  style={{
                    fontSize: '10px',
                    lineHeight: 1.8,
                    color: 'rgba(10,13,16,0.55)',
                    fontFamily: 'var(--font-tech)',
                    margin: 0,
                    letterSpacing: '0.08em',
                    textTransform: 'none',
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
