import { useRef, useEffect, useCallback } from 'react';

interface Ripple {
  x: number;
  y: number;
  age: number;
  active: boolean;
}

const POOL_SIZE = 80;
const MIN_DISTANCE = 25;

export default function MoltenTrail() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ripplesRef = useRef<Ripple[]>(
    Array.from({ length: POOL_SIZE }, () => ({ x: 0, y: 0, age: 0, active: false }))
  );
  const domsRef = useRef<HTMLDivElement[]>([]);
  const lastPosRef = useRef({ x: 0, y: 0 });
  const poolIndexRef = useRef(0);
  const rafRef = useRef<number>(0);

  const spawnRipple = useCallback((x: number, y: number) => {
    const idx = poolIndexRef.current % POOL_SIZE;
    ripplesRef.current[idx] = { x, y, age: 0, active: true };
    poolIndexRef.current++;
  }, []);

  const animate = useCallback(() => {
    const ripples = ripplesRef.current;
    const doms = domsRef.current;

    for (let i = 0; i < POOL_SIZE; i++) {
      const r = ripples[i];
      if (!r.active) continue;

      r.age += 0.012;
      const size = 20 + r.age * (300 - 20);
      const opacity = 1 - Math.pow(r.age, 1.2);

      if (r.age >= 1) {
        r.active = false;
        if (doms[i]) doms[i].style.opacity = '0';
        continue;
      }

      const el = doms[i];
      if (el) {
        el.style.transform = `translate(${r.x - size / 2}px, ${r.y - size / 2}px)`;
        el.style.width = `${size}px`;
        el.style.height = `${size}px`;
        el.style.opacity = `${Math.max(0, opacity)}`;
      }
    }

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - lastPosRef.current.x;
      const dy = e.clientY - lastPosRef.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > MIN_DISTANCE) {
        spawnRipple(e.clientX, e.clientY);
        lastPosRef.current = { x: e.clientX, y: e.clientY };
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [spawnRipple, animate]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 30,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {/* SVG Filter */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="molten-trail">
            <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves={2} result="noise" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={30}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* Ripple Pool */}
      {Array.from({ length: POOL_SIZE }, (_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) domsRef.current[i] = el;
          }}
          style={{
            position: 'absolute',
            borderRadius: '50%',
            opacity: 0,
            backdropFilter: 'url(#molten-trail) blur(1px)',
            WebkitBackdropFilter: 'url(#molten-trail) blur(1px)',
            boxShadow:
              'inset 0 0 30px rgba(255,255,255,0.1), 0 0 15px rgba(125,211,252,0.15)',
            willChange: 'transform, width, height, opacity',
          }}
        />
      ))}
    </div>
  );
}
