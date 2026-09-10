import { useRef, useEffect, useCallback } from 'react';
import gsap from 'gsap';

interface StaggeredMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  onRangeOpen: () => void;
}

const navItems = [
  { label: 'HOME', index: '01' },
  { label: 'OUR PRODUCTS', index: '02' },
  { label: 'CAPABILITIES', index: '03' },
  { label: 'INDUSTRIES SERVED', index: '04' },
  { label: 'QUALITY & COMPLIANCE', index: '05' },
  { label: 'CONTACT', index: '06' },
];

export default function StaggeredMenu({ isOpen, onToggle, onRangeOpen }: StaggeredMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const prelayer1Ref = useRef<HTMLDivElement>(null);
  const prelayer2Ref = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const socialsRef = useRef<HTMLDivElement>(null);
  const menuLabelRef = useRef<HTMLSpanElement>(null);
  const closeLabelRef = useRef<HTMLSpanElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const openMenu = useCallback(() => {
    if (timelineRef.current) timelineRef.current.kill();

    const tl = gsap.timeline();
    timelineRef.current = tl;

    // Cycle label
    tl.to(menuLabelRef.current, { y: '-100%', duration: 0.4, ease: 'power3.inOut' }, 0);
    tl.to(closeLabelRef.current, { y: '-100%', duration: 0.4, ease: 'power3.inOut' }, 0);

    // Prelayers slide in
    tl.to(prelayer1Ref.current, { x: 0, duration: 0.6, ease: 'power4.out' }, 0);
    tl.to(prelayer2Ref.current, { x: 0, duration: 0.6, ease: 'power4.out' }, 0.08);

    // Panel slides in
    tl.to(panelRef.current, { x: 0, duration: 0.8, ease: 'power4.out' }, 0.15);

    // Prelayers slide left
    tl.to(prelayer1Ref.current, { x: '-100%', duration: 0.5, ease: 'power3.in' }, 0.5);
    tl.to(prelayer2Ref.current, { x: '-100%', duration: 0.5, ease: 'power3.in' }, 0.5);

    // Nav items stagger
    const items = navItemsRef.current.filter(Boolean);
    tl.fromTo(
      items.map((li) => li?.querySelector('a')),
      { x: 40, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, ease: 'power3.out', stagger: 0.06 },
      0.6
    );

    // Socials
    tl.fromTo(
      socialsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' },
      0.8
    );
  }, []);

  const closeMenu = useCallback(() => {
    if (timelineRef.current) timelineRef.current.kill();

    const tl = gsap.timeline();
    timelineRef.current = tl;

    // Nav items fade out
    const items = navItemsRef.current.filter(Boolean);
    tl.to(
      items.map((li) => li?.querySelector('a')),
      { x: 40, opacity: 0, duration: 0.3, ease: 'power3.in', stagger: 0.04 },
      0
    );

    // Socials fade
    tl.to(socialsRef.current, { opacity: 0, y: 10, duration: 0.2 }, 0);

    // Panel slides out
    tl.to(panelRef.current, { x: '100%', duration: 0.6, ease: 'power4.in' }, 0.2);

    // Cycle label back
    tl.to(menuLabelRef.current, { y: '0%', duration: 0.4, ease: 'power3.inOut' }, 0.3);
    tl.to(closeLabelRef.current, { y: '0%', duration: 0.4, ease: 'power3.inOut' }, 0.3);

    // Reset prelayers
    tl.set(prelayer1Ref.current, { x: '100%' }, 0.6);
    tl.set(prelayer2Ref.current, { x: '100%' }, 0.6);
  }, []);

  useEffect(() => {
    if (isOpen) {
      openMenu();
    } else {
      closeMenu();
    }
  }, [isOpen, openMenu, closeMenu]);

  const handleNavClick = (index: number) => {
    if (index === 1) {
      // OUR PRODUCTS
      onRangeOpen();
      onToggle();
    } else {
      onToggle();
    }
  };

  return (
    <div className="staggered-menu">
      {/* Toggle Button */}
      <button
        className={`menu-toggle ${isOpen ? 'is-open' : ''}`}
        onClick={onToggle}
      >
        <div className="menu-toggle-label">
          <span ref={menuLabelRef} style={{ top: 0 }}>MENU</span>
          <span ref={closeLabelRef} style={{ top: '100%' }}>CLOSE</span>
        </div>
        <span className="menu-toggle-icon">+</span>
      </button>

      {/* Prelayers */}
      <div ref={prelayer1Ref} className="menu-prelayer menu-prelayer-1" />
      <div ref={prelayer2Ref} className="menu-prelayer menu-prelayer-2" />

      {/* Menu Panel */}
      <div ref={panelRef} className="menu-panel">
        <nav>
          <ul className="menu-nav">
            {navItems.map((item, i) => (
              <li
                key={item.label}
                ref={(el) => { navItemsRef.current[i] = el; }}
              >
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(i);
                  }}
                >
                  <span
                    style={{
                      fontSize: '12px',
                      letterSpacing: '0.2em',
                      opacity: 0.3,
                      fontFamily: 'var(--font-tech)',
                    }}
                  >
                    {item.index}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div ref={socialsRef} className="menu-socials">
          <span className="menu-socials-title">CONNECT</span>
          <div className="menu-socials-links">
            <a href="#">LINKEDIN</a>
            <a href="#">INDIAMART</a>
            <a href="#">EMAIL</a>
          </div>
        </div>
      </div>
    </div>
  );
}
