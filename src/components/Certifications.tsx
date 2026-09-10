import { motion } from 'motion/react';

const programmes = [
  {
    tier: 'TIER 01',
    level: 'STOCK RANGE',
    volume: '500 UNITS',
    period: 'MIN. ORDER / MONTH',
    features: [
      'STOCK COLOURS & SIZES',
      '14-DAY DISPATCH',
      'STANDARD UN CERTIFICATION',
      'BATCH TEST REPORT',
    ],
    accent: false,
    badge: null,
  },
  {
    tier: 'TIER 02',
    level: 'CONTRACT',
    volume: '10,000 UNITS',
    period: 'MIN. ORDER / MONTH',
    features: [
      'DEDICATED PRODUCTION SLOT',
      'CUSTOM COLOUR MATCHING',
      'PRINTED BRANDING INCLUDED',
      'PRIORITY 7-DAY DISPATCH',
    ],
    accent: true,
    badge: 'MOST SPECIFIED',
  },
  {
    tier: 'TIER 03',
    level: 'OEM',
    volume: 'BY SPECIFICATION',
    period: '',
    features: [
      'BESPOKE MOULD DEVELOPMENT',
      'EXCLUSIVE TOOLING OWNERSHIP',
      'ON-SITE QUALITY LIAISON',
      'VENDOR-MANAGED INVENTORY',
    ],
    accent: false,
    badge: null,
  },
];

export default function Certifications() {
  return (
    <section
      style={{
        backgroundColor: 'var(--bg-base)',
        padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '56px' }}>
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
            SUPPLY PROGRAMMES
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
          SELECT YOUR TIER.
        </h2>
      </div>

      {/* 2-Column Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'start',
        }}
      >
        {/* Left — Programme Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {programmes.map((prog, i) => (
            <motion.div
              key={prog.tier}
              className={prog.accent ? 'card-accent' : 'card'}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.08,
              }}
              style={{ padding: '32px' }}
            >
              {prog.badge && (
                <div
                  style={{
                    background: 'var(--accent)',
                    color: 'white',
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
                  color: 'rgba(10,13,16,0.4)',
                  fontFamily: 'var(--font-tech)',
                }}
              >
                {prog.tier}
              </div>
              <div
                style={{
                  fontSize: '9px',
                  letterSpacing: '0.25em',
                  color: 'var(--accent)',
                  marginBottom: '12px',
                  fontFamily: 'var(--font-tech)',
                }}
              >
                {prog.level}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '40px',
                  color: prog.accent ? 'var(--accent)' : '#0a0d10',
                  lineHeight: 1,
                  marginBottom: '4px',
                }}
              >
                {prog.volume}
              </div>
              {prog.period && (
                <div
                  style={{
                    fontSize: '9px',
                    color: 'rgba(10,13,16,0.4)',
                    marginBottom: '24px',
                    fontFamily: 'var(--font-tech)',
                    letterSpacing: '0.2em',
                  }}
                >
                  {prog.period}
                </div>
              )}
              {!prog.period && <div style={{ marginBottom: '24px' }} />}
              <ul
                style={{
                  listStyle: 'none',
                  margin: 0,
                  padding: 0,
                  marginBottom: '24px',
                }}
              >
                {prog.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      fontSize: '9px',
                      letterSpacing: '0.15em',
                      color: 'rgba(10,13,16,0.6)',
                      padding: '6px 0',
                      borderBottom: '1px solid rgba(10,13,16,0.05)',
                      fontFamily: 'var(--font-tech)',
                    }}
                  >
                    {f}
                  </li>
                ))}
              </ul>
              <button
                style={{
                  background: 'var(--accent)',
                  color: 'white',
                  width: '100%',
                  padding: '12px',
                  fontSize: '9px',
                  letterSpacing: '0.2em',
                  border: 'none',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-tech)',
                  textTransform: 'uppercase',
                }}
              >
                REQUEST PRICING
              </button>
            </motion.div>
          ))}
        </div>

        {/* Right — Sticky Image Panel */}
        <div style={{ position: 'sticky', top: '120px' }}>
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <img
              src="/img/factory-tour.jpg"
              alt=""
              style={{
                width: '100%',
                height: '560px',
                objectFit: 'cover',
                display: 'block',
              }}
            />
            {/* Gradient Overlay */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '100%',
                background:
                  'linear-gradient(to top, rgba(6,10,16,0.92) 0%, rgba(6,10,16,0.6) 40%, transparent 80%)',
                pointerEvents: 'none',
              }}
            />
            {/* Floating Text */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '32px' }}>
              <div
                style={{
                  fontSize: '8px',
                  letterSpacing: '0.3em',
                  color: 'rgba(125,211,252,0.85)',
                  marginBottom: '12px',
                  fontFamily: 'var(--font-tech)',
                }}
              >
                LINE 04 — 200L BLOW MOULDING CELL
              </div>
              <div
                style={{
                  fontSize: '11px',
                  lineHeight: 1.8,
                  color: 'rgba(255,255,255,0.7)',
                  maxWidth: '280px',
                  fontFamily: 'var(--font-tech)',
                  letterSpacing: '0.1em',
                }}
              >
                SIX LINES. 42,000 SQ FT. 1.2 MILLION UNITS A YEAR.
              </div>
              <button
                className="glass-mid"
                style={{
                  marginTop: '20px',
                  padding: '12px 28px',
                  color: 'white',
                  fontSize: '9px',
                  letterSpacing: '0.2em',
                  cursor: 'pointer',
                  borderRadius: '2px',
                  fontFamily: 'var(--font-tech)',
                  textTransform: 'uppercase',
                }}
              >
                BOOK A PLANT VISIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
