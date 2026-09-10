
import { motion } from 'motion/react';

const tests = [
  {
    number: '01',
    title: 'DROP TEST',
    description: '1.8m free fall at -18°C onto the weakest point of the chime.',
    pct: 100,
    result: '100% PASS RATE',
  },
  {
    number: '02',
    title: 'STACK LOAD',
    description: '1,800kg sustained for 28 days at 40°C without deformation.',
    pct: 100,
    result: '100% PASS RATE',
  },
  {
    number: '03',
    title: 'HYDRAULIC PRESSURE',
    description: '250kPa held for five minutes on every tight-head batch.',
    pct: 99.8,
    result: '99.8% PASS RATE',
  },
  {
    number: '04',
    title: 'LEAKPROOFNESS',
    description: '30kPa air-under-water on 100% of sealed units.',
    pct: 100,
    result: '100% PASS RATE',
  },
  {
    number: '05',
    title: 'WALL THICKNESS',
    description: 'Ultrasonic scan at nine points, tolerance ±0.2mm.',
    pct: 99.6,
    result: '99.6% PASS RATE',
  },
  {
    number: '06',
    title: 'MELT FLOW INDEX',
    description: 'Incoming resin verified at 0.35 g/10min before extrusion.',
    pct: 100,
    result: '100% PASS RATE',
  },
];

export default function QualityLab() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      {/* Image Background — NO overlay */}
      <img
        src="/img/quality-lab.jpg"
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
          padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)',
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: '60px' }}>
          <div
            style={{
              fontSize: '10px',
              letterSpacing: '0.3em',
              color: 'rgba(125,211,252,0.85)',
              marginBottom: '16px',
              fontFamily: 'var(--font-tech)',
            }}
          >
            THE QUALITY LAB
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(40px,6vw,80px)',
              lineHeight: 0.9,
              letterSpacing: '-0.035em',
              color: 'white',
              maxWidth: '600px',
              margin: 0,
            }}
          >
            EVERY BATCH
            <br />
            IS TESTED.
            <br />
            <span style={{ opacity: 0.6 }}>
              NOT
              <br />
              SAMPLED.
            </span>
          </h2>
        </div>

        {/* Test Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
            marginTop: '48px',
          }}
        >
          {tests.map((test, i) => (
            <motion.div
              key={test.number}
              className="glass-mid"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.08,
              }}
              style={{
                padding: '28px 28px 24px',
                borderRadius: '3px',
              }}
            >
              {/* Large Number */}
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '64px',
                  color: 'rgba(255,255,255,0.08)',
                  lineHeight: 1,
                  marginBottom: '-8px',
                }}
              >
                {test.number}
              </div>
              <div
                style={{
                  fontSize: '8px',
                  letterSpacing: '0.35em',
                  color: 'rgba(125,211,252,0.6)',
                  marginBottom: '10px',
                  fontFamily: 'var(--font-tech)',
                }}
              >
                TEST
              </div>
              <div
                style={{
                  fontSize: '13px',
                  letterSpacing: '0.12em',
                  color: 'white',
                  marginBottom: '8px',
                  fontFamily: 'var(--font-tech)',
                }}
              >
                {test.title}
              </div>
              <div
                style={{
                  fontSize: '9px',
                  lineHeight: 1.8,
                  color: 'rgba(255,255,255,0.5)',
                  fontFamily: 'var(--font-tech)',
                  letterSpacing: '0.1em',
                }}
              >
                {test.description}
              </div>
              {/* Result Bar */}
              <div style={{ marginTop: '16px' }}>
                <div
                  style={{
                    height: '2px',
                    background: 'rgba(255,255,255,0.08)',
                    borderRadius: '1px',
                    overflow: 'hidden',
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${test.pct}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.2,
                      ease: [0.22, 1, 0.36, 1],
                      delay: i * 0.1,
                    }}
                    style={{
                      height: '100%',
                      background: 'var(--accent-on-dark)',
                      borderRadius: '1px',
                    }}
                  />
                </div>
                <div
                  style={{
                    fontSize: '8px',
                    letterSpacing: '0.2em',
                    color: 'rgba(255,255,255,0.4)',
                    marginTop: '6px',
                    fontFamily: 'var(--font-tech)',
                  }}
                >
                  {test.result}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
