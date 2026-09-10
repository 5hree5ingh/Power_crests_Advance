import { AnimatePresence, motion } from 'motion/react';

interface InsightsProps {
  isOpen: boolean;
  onClose: () => void;
}

const articles = [
  {
    title: 'WHY REGRIND COSTS MORE THAN IT SAVES',
    date: 'JANUARY 2026',
    category: 'MATERIAL SCIENCE',
    number: '01',
    excerpt:
      'The hidden costs of regrind — from reduced drop-test performance to inconsistent wall thickness — far outweigh the apparent savings on resin procurement.',
    gradient: 'linear-gradient(135deg, #0d3a63, #1a6ba8)',
  },
  {
    title: 'READING A UN PACKAGING CODE, DIGIT BY DIGIT',
    date: 'DECEMBER 2025',
    category: 'COMPLIANCE',
    number: '02',
    excerpt:
      'A complete guide to decoding the markings on your drum — from performance group to the test laboratory that certified it.',
    gradient: 'linear-gradient(135deg, #1a4a6e, #2d7db5)',
  },
  {
    title: 'WALL THICKNESS: THE SPEC EVERYONE UNDER-SPECIFIES',
    date: 'NOVEMBER 2025',
    category: 'ENGINEERING',
    number: '03',
    excerpt:
      'Why ±0.2mm tolerance matters, and how inconsistent wall thickness creates failure points that only show under transit stress.',
    gradient: 'linear-gradient(135deg, #0f4c81, #1872b0)',
  },
  {
    title: 'DESIGNING A DRUM FOR CONTAINER LOAD DENSITY',
    date: 'OCTOBER 2025',
    category: 'LOGISTICS',
    number: '04',
    excerpt:
      'How drum geometry, stacking strength, and footprint optimisation can increase your container utilisation by up to twelve percent.',
    gradient: 'linear-gradient(135deg, #143d5e, #1f6ea0)',
  },
];

export default function Insights({ isOpen, onClose }: InsightsProps) {
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
              <span style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(10,13,16,0.5)', fontFamily: 'var(--font-tech)' }}>INSIGHTS</span>
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

          {/* Featured Article */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              minHeight: '480px',
            }}
          >
            <div
              style={{
                background: 'linear-gradient(135deg, #0d3a63, #1a6ba8)',
                padding: 'clamp(48px,6vw,80px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  fontSize: '8px',
                  letterSpacing: '0.35em',
                  color: 'rgba(125,211,252,0.85)',
                  marginBottom: '12px',
                  fontFamily: 'var(--font-tech)',
                }}
              >
                FEATURED
              </div>
              <div
                style={{
                  fontSize: '9px',
                  letterSpacing: '0.25em',
                  color: 'rgba(255,255,255,0.5)',
                  marginBottom: '16px',
                  fontFamily: 'var(--font-tech)',
                }}
              >
                FEBRUARY 2026
              </div>
              <div
                style={{
                  width: '24px',
                  height: '1px',
                  background: 'rgba(125,211,252,0.4)',
                  marginBottom: '24px',
                }}
              />
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(28px,3.5vw,48px)',
                  lineHeight: 0.95,
                  letterSpacing: '-0.035em',
                  color: 'white',
                  margin: '0 0 20px 0',
                }}
              >
                THE TRUE COST OF A FIELD FAILURE
              </h2>
              <p
                style={{
                  fontSize: '10px',
                  lineHeight: 1.9,
                  letterSpacing: '0.14em',
                  color: 'rgba(255,255,255,0.6)',
                  fontFamily: 'var(--font-tech)',
                  margin: 0,
                  maxWidth: '400px',
                }}
              >
                ONE LEAKED DRUM COSTS MORE THAN TEN THOUSAND THAT HOLD. WE BREAK DOWN THE REAL NUMBERS BEHIND CONTAMINATION, CLEAN-UP, AND LOST CONTRACTS.
              </p>
            </div>
            <div
              style={{
                background: 'white',
                padding: 'clamp(48px,6vw,80px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: 1.8,
                  color: 'rgba(10,13,16,0.6)',
                  fontFamily: 'var(--font-tech)',
                  fontStyle: 'italic',
                  margin: '0 0 32px 0',
                  letterSpacing: '0.06em',
                }}
              >
                "THE COST OF A SINGLE FIELD FAILURE — IN CLEAN-UP, LITIGATION, AND LOST REPEAT BUSINESS — TYPICALLY EXCEEDS THE ENTIRE ANNUAL COST DIFFERENCE BETWEEN PREMIUM AND ECONOMY PACKAGING."
              </p>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  color: 'var(--accent)',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-tech)',
                }}
              >
                CONTINUE READING →
              </a>
            </div>
          </div>

          {/* Article Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
              padding: 'clamp(40px,5vw,64px)',
            }}
          >
            {articles.map((article, i) => (
              <motion.div
                key={article.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                style={{
                  overflow: 'hidden',
                  borderRadius: '2px',
                  border: '1px solid rgba(10,13,16,0.06)',
                }}
              >
                <div
                  style={{
                    height: '180px',
                    background: article.gradient,
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <span
                    style={{
                      fontSize: '8px',
                      letterSpacing: '0.35em',
                      color: 'rgba(125,211,252,0.85)',
                      fontFamily: 'var(--font-tech)',
                    }}
                  >
                    {article.category}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '48px',
                      color: 'rgba(255,255,255,0.1)',
                      lineHeight: 1,
                    }}
                  >
                    {article.number}
                  </span>
                </div>
                <div style={{ background: 'white', padding: '24px' }}>
                  <div
                    style={{
                      fontSize: '8px',
                      letterSpacing: '0.25em',
                      color: 'rgba(10,13,16,0.4)',
                      marginBottom: '8px',
                      fontFamily: 'var(--font-tech)',
                    }}
                  >
                    {article.date}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '16px',
                      color: '#0a0d10',
                      margin: '0 0 12px 0',
                      lineHeight: 1.2,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {article.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '9px',
                      lineHeight: 1.8,
                      color: 'rgba(10,13,16,0.55)',
                      fontFamily: 'var(--font-tech)',
                      margin: '0 0 16px 0',
                      letterSpacing: '0.1em',
                      textTransform: 'none',
                    }}
                  >
                    {article.excerpt}
                  </p>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    style={{
                      fontSize: '9px',
                      letterSpacing: '0.2em',
                      color: 'var(--accent)',
                      textDecoration: 'none',
                      fontFamily: 'var(--font-tech)',
                    }}
                  >
                    READ MORE →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
