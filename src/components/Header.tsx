import { useRef, useEffect, useState } from 'react';

interface HeaderProps {
  onQuoteOpen?: () => void;
}

export default function Header({ onQuoteOpen }: HeaderProps) {
  const pillRef = useRef<HTMLDivElement>(null);
  const [quoteBg, setQuoteBg] = useState('#0f4c81');

  useEffect(() => {
    const handleScroll = () => {
      if (pillRef.current) {
        if (window.scrollY > 50) {
          pillRef.current.classList.add('scrolled');
        } else {
          pillRef.current.classList.remove('scrolled');
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navLinks = [
    { label: 'ABOUT US',      id: 'about' },
    { label: 'CAPABILITIES',  id: 'capabilities' },
    { label: 'PRODUCTS',      id: 'products' },
    { label: 'QUALITY LAB',   id: 'quality' },
    { label: 'FAQ',           id: 'insights' },
  ];

  return (
    <div ref={pillRef} className="navbar-pill">
      {/* Logo Section */}
      <div
        style={{
          borderRight: '1px solid rgba(10,13,16,0.08)',
          padding: '0 20px 0 14px',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          cursor: 'pointer',
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
          <ellipse cx="10" cy="5" rx="6" ry="2.2" stroke="#0f4c81" strokeWidth="1.4" fill="none" />
          <path d="M4 5 V15 A6 2.2 0 0 0 16 15 V5" stroke="#0f4c81" strokeWidth="1.4" fill="none" />
          <path d="M4 9 A6 2.2 0 0 0 16 9" stroke="#0f4c81" strokeWidth="1" fill="none" opacity="0.5" />
          <path d="M4 12.5 A6 2.2 0 0 0 16 12.5" stroke="#0f4c81" strokeWidth="1" fill="none" opacity="0.5" />
        </svg>
        <span
          style={{
            fontSize: '15px',
            letterSpacing: '0.26em',
            color: '#0a0d10',
            fontFamily: 'var(--font-display)',
          }}
        >
          POWERCRESTS
        </span>
      </div>

      {/* Nav Links */}
      {navLinks.map((link) => (
        <a
          key={link.label}
          href={`#${link.id}`}
          onClick={(e) => {
            e.preventDefault();
            scrollTo(link.id);
          }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#0a0d10')}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(10,13,16,0.55)')}
          style={{
            padding: '0 16px',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            fontSize: '10px',
            letterSpacing: '0.18em',
            color: 'rgba(10,13,16,0.55)',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
            fontFamily: 'var(--font-tech)',
          }}
        >
          {link.label}
        </a>
      ))}

      {/* Request A Quote Button */}
      <div style={{ padding: '0 6px', flexShrink: 0 }}>
        <button
          onClick={() => onQuoteOpen ? onQuoteOpen() : scrollTo('quote')}
          onMouseEnter={() => setQuoteBg('#155f9e')}
          onMouseLeave={() => setQuoteBg('#0f4c81')}
          style={{
            background: quoteBg,
            borderRadius: '100px',
            padding: '9px 22px',
            fontSize: '10px',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            letterSpacing: '0.18em',
            fontFamily: 'var(--font-tech)',
            textTransform: 'uppercase',
            transition: 'background 0.3s ease',
          }}
        >
          REQUEST A QUOTE
        </button>
      </div>
    </div>
  );
}
