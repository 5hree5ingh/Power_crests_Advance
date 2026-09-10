export default function Footer() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', minHeight: '480px' }}>
      {/* Image Background */}
      <img
        src="/img/footer-bg.jpg"
        alt=""
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, rgba(6,10,16,0.78) 0%, rgba(6,10,16,0.85) 100%)',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          padding: 'clamp(64px,8vw,100px) clamp(24px,6vw,96px)',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr 1fr',
            gap: '80px',
          }}
        >
          {/* Col 1 — Logo */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <ellipse cx="10" cy="5" rx="6" ry="2.2" stroke="white" strokeWidth="1.4" fill="none" />
                <path d="M4 5 V15 A6 2.2 0 0 0 16 15 V5" stroke="white" strokeWidth="1.4" fill="none" />
                <path d="M4 9 A6 2.2 0 0 0 16 9" stroke="white" strokeWidth="1" fill="none" opacity="0.5" />
                <path d="M4 12.5 A6 2.2 0 0 0 16 12.5" stroke="white" strokeWidth="1" fill="none" opacity="0.5" />
              </svg>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '20px',
                  color: 'white',
                  letterSpacing: '0.26em',
                }}
              >
                POWERCREST
              </span>
            </div>
            <div
              style={{
                fontSize: '9px',
                letterSpacing: '0.28em',
                color: 'rgba(255,255,255,0.4)',
                marginTop: '16px',
                fontFamily: 'var(--font-tech)',
              }}
            >
              SINCE 1996. SEALED, CERTIFIED, DELIVERED.
            </div>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <div
              style={{
                fontSize: '8px',
                letterSpacing: '0.35em',
                color: 'rgba(125,211,252,0.7)',
                marginBottom: '20px',
                fontFamily: 'var(--font-tech)',
              }}
            >
              NAVIGATION
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Products', 'Capabilities', 'Industries', 'Quality', 'Insights'].map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    fontSize: '9px',
                    letterSpacing: '0.2em',
                    color: 'rgba(255,255,255,0.4)',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-tech)',
                    textTransform: 'uppercase',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.85)')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.4)')}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3 — Services */}
          <div>
            <div
              style={{
                fontSize: '8px',
                letterSpacing: '0.35em',
                color: 'rgba(125,211,252,0.7)',
                marginBottom: '20px',
                fontFamily: 'var(--font-tech)',
              }}
            >
              SERVICES
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                'Custom Moulding',
                'Contract Manufacturing',
                'Printing & Branding',
                'Export Packaging',
                'Technical Support',
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    fontSize: '9px',
                    letterSpacing: '0.2em',
                    color: 'rgba(255,255,255,0.4)',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-tech)',
                    textTransform: 'uppercase',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.85)')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.4)')}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div
          style={{
            marginTop: '64px',
            paddingTop: '24px',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontSize: '8px',
              color: 'rgba(255,255,255,0.25)',
              letterSpacing: '0.2em',
              fontFamily: 'var(--font-tech)',
            }}
          >
            © 2026 POWERCREST INDUSTRIES. ALL RIGHTS RESERVED.
          </span>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacy Policy', 'Terms of Supply'].map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  fontSize: '8px',
                  color: 'rgba(255,255,255,0.25)',
                  letterSpacing: '0.2em',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-tech)',
                  textTransform: 'uppercase',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.5)')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.25)')}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
