import { motion } from 'motion/react';

const capabilities = [
  {
    category: 'BLOW MOULDING',
    title: '5L TO 250L',
    description:
      'Six extrusion blow moulding lines running continuously, producing seamless single-wall drums from 5 to 250 litres with wall thickness held to ±0.2mm.',
  },
  {
    category: 'CUSTOM TOOLING',
    title: 'IN-HOUSE MOULD SHOP',
    description:
      'Bespoke moulds designed, cut and validated on site — from neck finish to embossed branding — with first-article samples in fourteen days.',
  },
  {
    category: 'PRINTING & FINISHING',
    title: 'OFFSET · SCREEN · IML',
    description:
      'In-mould labelling, UV-stable pigments, and full hazard-compliant marking applied before the drum leaves the line.',
  },
];

export default function Capabilities() {
  return (
    <section style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Image Background — NO overlay */}
      <img
        src="/img/capabilities-bg.jpg"
        alt=""
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      {/* Content Grid */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: '100vh',
          padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)',
          gap: '80px',
          alignContent: 'center',
        }}
      >
        {/* Left Column */}
        <div>
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
              WHAT WE DO
            </span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px,4.5vw,72px)',
              lineHeight: 0.95,
              letterSpacing: '-0.035em',
              color: 'white',
              margin: 0,
            }}
            dangerouslySetInnerHTML={{ __html: 'PRECISION<br/>AT VOLUME' }}
          />
        </div>

        {/* Right Column — Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.category}
              className="glass-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.12,
              }}
              style={{ padding: '24px 28px' }}
            >
              <div
                style={{
                  fontSize: '8px',
                  letterSpacing: '0.3em',
                  color: 'rgba(125,211,252,0.7)',
                  marginBottom: '8px',
                  fontFamily: 'var(--font-tech)',
                }}
              >
                {cap.category}
              </div>
              <div
                style={{
                  fontSize: '18px',
                  fontFamily: 'var(--font-display)',
                  color: 'white',
                  letterSpacing: '-0.01em',
                  marginBottom: '12px',
                }}
              >
                {cap.title}
              </div>
              <div
                style={{
                  fontSize: '10px',
                  lineHeight: 1.8,
                  letterSpacing: '0.15em',
                  color: 'rgba(255,255,255,0.55)',
                  fontFamily: 'var(--font-tech)',
                }}
              >
                {cap.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
