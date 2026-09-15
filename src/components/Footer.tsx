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
                POWERCRESTS
              </span>
            </div>
            <div
              style={{
                fontSize: '9px',
                letterSpacing: '0.18em',
                color: 'rgba(255,255,255,0.4)',
                marginTop: '4px',
                fontFamily: 'var(--font-tech)',
              }}
            >
              GLOBAL SOLUTIONS PVT. LTD.
            </div>
            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {/* Phone */}
              <a href="tel:+919045101186" style={{ fontSize: '9px', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontFamily: 'var(--font-tech)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(125,211,252,0.7)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.07 6.07l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                +91 90451 01186
              </a>
              {/* Email */}
              <a href="mailto:sales@powercrests.com" style={{ fontSize: '9px', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontFamily: 'var(--font-tech)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(125,211,252,0.7)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                sales@powercrests.com
              </a>
              {/* Website */}
              <a href="https://www.powercrestsglobal.com" target="_blank" rel="noreferrer" style={{ fontSize: '9px', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontFamily: 'var(--font-tech)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(125,211,252,0.7)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                www.powercrestsglobal.com
              </a>
            </div>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <div style={{ fontSize: '8px', letterSpacing: '0.35em', color: 'rgba(125,211,252,0.7)', marginBottom: '20px', fontFamily: 'var(--font-tech)' }}>
              NAVIGATION
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'About Us',      id: 'about' },
                { label: 'Capabilities',  id: 'capabilities' },
                { label: 'Products',      id: 'products' },
                { label: 'Quality Lab',   id: 'quality' },
                { label: 'FAQ',           id: 'insights' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={`#${link.id}`}
                  onClick={(e) => { e.preventDefault(); document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' }); }}
                  style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontFamily: 'var(--font-tech)', textTransform: 'uppercase', transition: 'color 0.3s ease' }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.85)')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.4)')}
                >
                  {link.label}
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
            © 2026 POWERCRESTS GLOBAL SOLUTIONS PVT. LTD. ALL RIGHTS RESERVED.
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
