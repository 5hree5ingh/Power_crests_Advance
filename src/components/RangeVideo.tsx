import { motion } from 'motion/react';

interface RangeVideoProps {
  imgSrc: string;
  name: string;
  specs: { label: string; value: string }[];
  delay: number;
  isOpen: boolean;
}

export default function RangeVideo({ imgSrc, name, specs, delay }: RangeVideoProps) {
  return (
    <div
      style={{
        width: '33.333%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        flexShrink: 0,
      }}
    >
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9 + delay, ease: [0.19, 1, 0.22, 1] }}
        style={{ width: '100%', height: '100%' }}
      >
        <img
          src={imgSrc}
          alt={name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </motion.div>

      {/* Dark gradient bottom */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 55%)',
          pointerEvents: 'none',
        }}
      />

      {/* Info block */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '40px',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px,2.5vw,44px)',
            color: 'white',
            letterSpacing: '-0.03em',
            marginBottom: '20px',
          }}
        >
          {name}
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '12px 24px',
          }}
        >
          {specs.map((spec) => (
            <div key={spec.label}>
              <div
                style={{
                  fontSize: '8px',
                  color: 'rgba(255,255,255,0.4)',
                  letterSpacing: '0.3em',
                  marginBottom: '4px',
                  fontFamily: 'var(--font-tech)',
                }}
              >
                {spec.label}
              </div>
              <div
                style={{
                  fontSize: '13px',
                  color: 'white',
                  letterSpacing: '0.06em',
                  fontFamily: 'var(--font-tech)',
                }}
              >
                {spec.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
