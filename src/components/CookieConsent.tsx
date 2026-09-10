import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.4 }}
          className="glass-mid"
          style={{
            position: 'fixed',
            bottom: '24px',
            left: '24px',
            zIndex: 999,
            borderRadius: '3px',
            padding: '20px 24px',
            maxWidth: '320px',
          }}
        >
          <p
            style={{
              fontSize: '9px',
              letterSpacing: '0.2em',
              color: 'rgba(255,255,255,0.7)',
              margin: '0 0 16px 0',
              lineHeight: 1.8,
              fontFamily: 'var(--font-tech)',
            }}
          >
            THIS SITE USES COOKIES TO IMPROVE YOUR EXPERIENCE.
          </p>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={() => setVisible(false)}
              style={{
                background: 'var(--accent)',
                color: 'white',
                fontSize: '8px',
                padding: '8px 16px',
                borderRadius: '2px',
                border: 'none',
                cursor: 'pointer',
                letterSpacing: '0.2em',
                fontFamily: 'var(--font-tech)',
                textTransform: 'uppercase',
              }}
            >
              ACCEPT
            </button>
            <button
              onClick={() => setVisible(false)}
              style={{
                background: 'transparent',
                color: 'rgba(255,255,255,0.7)',
                fontSize: '8px',
                padding: '8px 16px',
                borderRadius: '2px',
                border: '1px solid rgba(255,255,255,0.2)',
                cursor: 'pointer',
                letterSpacing: '0.2em',
                fontFamily: 'var(--font-tech)',
                textTransform: 'uppercase',
              }}
            >
              DECLINE
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
