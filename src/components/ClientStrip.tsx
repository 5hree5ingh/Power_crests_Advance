export default function ClientStrip() {
  const standards = [
    'ISO 9001:2015',
    'UN PACKAGING CERTIFIED',
    'FDA 21 CFR FOOD GRADE',
    'REACH COMPLIANT',
    'ISO 14001',
  ];

  return (
    <section
      style={{
        borderTop: '1px solid rgba(10,13,16,0.07)',
        borderBottom: '1px solid rgba(10,13,16,0.07)',
        padding: 'clamp(28px,4vw,40px) clamp(24px,6vw,96px)',
      }}
    >
      <div
        style={{
          fontSize: '8px',
          letterSpacing: '0.35em',
          color: 'rgba(10,13,16,0.3)',
          marginBottom: '20px',
          textAlign: 'center',
          fontFamily: 'var(--font-tech)',
        }}
      >
        CERTIFIED & COMPLIANT
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '16px 32px',
        }}
      >
        {standards.map((s, i) => (
          <span key={s}>
            <span
              style={{
                fontSize: '9px',
                letterSpacing: '0.28em',
                color: 'rgba(10,13,16,0.32)',
                fontFamily: 'var(--font-tech)',
              }}
            >
              {s}
            </span>
            {i < standards.length - 1 && (
              <span
                style={{
                  color: 'rgba(10,13,16,0.2)',
                  margin: '0 16px',
                  fontFamily: 'var(--font-tech)',
                }}
              >
                ·
              </span>
            )}
          </span>
        ))}
      </div>
    </section>
  );
}
