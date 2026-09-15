import { motion, AnimatePresence } from 'motion/react';

interface AboutPageProps {
  isOpen: boolean;
  onClose: () => void;
}

const stats = [
  { value: '10+', label: 'YEARS OF EXPERIENCE' },
  { value: '5–65 L', label: 'HDPE CONTAINER RANGE' },
  { value: 'ISO', label: '9001:2015 & 22000:2018' },
  { value: '∞', label: 'CUSTOMERS ACROSS INDUSTRIES' },
];

const values = [
  {
    title: 'QUALITY FOCUSSED',
    description: 'EVERY PRODUCT IS MANUFACTURED USING PREMIUM RAW MATERIALS AND STRICT QUALITY CONTROL.',
  },
  {
    title: 'ADVANCED MANUFACTURING',
    description: 'STATE-OF-THE-ART INFRASTRUCTURE AND MODERN TECHNOLOGY ENSURE PRECISION AND CONSISTENCY.',
  },
  {
    title: 'WIDE RANGE',
    description: 'HDPE JARS, DRUMS, AND CONTAINERS FROM 5 LTR TO 65 LTR FOR DIVERSE INDUSTRIAL APPLICATIONS.',
  },
  {
    title: 'CUSTOMER COMMITMENT',
    description: 'WE BUILD LONG-TERM RELATIONSHIPS BY DELIVERING RELIABLE PRODUCTS AND EXCEPTIONAL SERVICE.',
  },
];

const timeline = [
  { year: 'WHO WE ARE', event: 'Powercrests Global Solutions Pvt. Ltd. is a quality centric organization committed to delivering high-performance HDPE industrial containers that meet global standards.' },
  { year: 'OUR VISION', event: 'Led by vision. Driven by experience. Mr. Akshit Jain, Founder & Business Head, leads with 15+ years of expertise in industrial packaging solutions.' },
  { year: 'OUR PROMISE', event: 'Engineered for Strength. Built for Reliability. Every container passes ASTM & UN standard tests — Drop, Handle, Leakage, Stack Load, and Cap & Clamp Fitment.' },
  { year: 'CERTIFICATIONS', event: 'ISO 9001:2015 Certified (Quality Management System) and ISO 22000:2018 Certified (Food Safety Management System). Premium Quality — Trusted, Tested, Delivered.' },
  { year: 'OUR RANGE', event: 'Full Open Top drums (25–50 KG), Narrow Mouth Rocket Containers (50 KG), and Narrow Mouth Mouser Containers (25–35 KG) — 5 Ltr to 65 Ltr for all industrial needs.' },
];

export default function AboutPage({ isOpen, onClose }: AboutPageProps) {
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
              <span style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(10,13,16,0.5)', fontFamily: 'var(--font-tech)' }}>ABOUT</span>
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

          {/* Section 1 — Intro */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '0.6fr 1fr',
              gap: '80px',
              padding: 'clamp(48px,6vw,80px)',
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(36px,5vw,72px)',
                  lineHeight: 0.95,
                  letterSpacing: '-0.035em',
                  color: '#0a0d10',
                  margin: '0 0 24px 0',
                }}
              >
                ENGINEERED FOR STRENGTH.
                <br />DRIVEN BY TRUST.
              </h2>
            </div>
            <div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '32px',
                }}
              >
                {stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(40px,5vw,64px)',
                        color: 'var(--accent)',
                        lineHeight: 1,
                        marginBottom: '8px',
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      style={{
                        fontSize: '9px',
                        letterSpacing: '0.25em',
                        color: 'rgba(10,13,16,0.5)',
                        fontFamily: 'var(--font-tech)',
                      }}
                    >
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 2 — Values */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '32px',
              padding: 'clamp(32px,4vw,48px) clamp(48px,6vw,80px)',
              borderTop: '1px solid rgba(10,13,16,0.07)',
            }}
          >
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
              >
                <div
                  style={{
                    borderTop: '2px solid var(--accent)',
                    paddingTop: '20px',
                  }}
                >
                  <div
                    style={{
                      fontSize: '12px',
                      letterSpacing: '0.12em',
                      color: '#0a0d10',
                      marginBottom: '12px',
                      fontFamily: 'var(--font-tech)',
                    }}
                  >
                    {val.title}
                  </div>
                  <p
                    style={{
                      fontSize: '10px',
                      lineHeight: 1.8,
                      color: 'rgba(10,13,16,0.6)',
                      fontFamily: 'var(--font-tech)',
                      margin: 0,
                      letterSpacing: '0.08em',
                    }}
                  >
                    {val.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Section 3 — Timeline */}
          <div
            style={{
              maxWidth: '720px',
              padding: 'clamp(32px,4vw,48px) clamp(48px,6vw,80px)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '32px',
              }}
            >
              <div style={{ width: '40px', height: '1px', background: 'var(--accent)' }} />
              <span
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.3em',
                  color: 'var(--accent)',
                  fontFamily: 'var(--font-tech)',
                }}
              >
                OUR HISTORY
              </span>
            </div>

            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '100px 1fr',
                  gap: '24px',
                  borderBottom: '1px solid rgba(10,13,16,0.06)',
                  padding: '20px 0',
                }}
              >
                <div
                  style={{
                    fontSize: '13px',
                    letterSpacing: '0.1em',
                    color: 'var(--accent)',
                    fontFamily: 'var(--font-tech)',
                    fontWeight: 500,
                  }}
                >
                  {item.year}
                </div>
                <div
                  style={{
                    fontSize: '11px',
                    lineHeight: 1.8,
                    color: 'rgba(10,13,16,0.7)',
                    fontFamily: 'var(--font-tech)',
                    letterSpacing: '0.06em',
                    textTransform: 'none',
                  }}
                >
                  {item.event}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom spacer */}
          <div style={{ height: '80px' }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
