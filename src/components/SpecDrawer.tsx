import { AnimatePresence, motion } from 'motion/react';
import { products } from '../data/products';

interface SpecDrawerProps {
  productId: string | null;
  onClose: () => void;
}

export default function SpecDrawer({ productId, onClose }: SpecDrawerProps) {
  const product = products.find((p) => p.id === productId);

  return (
    <AnimatePresence>
      {productId && product && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 199,
              background: 'rgba(0,0,0,0.4)',
            }}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            exit={{ x: 400 }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="spec-drawer"
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '440px',
              height: '100vh',
              zIndex: 200,
              overflowY: 'auto',
            }}
          >
            <div style={{ padding: '40px' }}>
              {/* Close Button */}
              <button
                onClick={onClose}
                style={{
                  position: 'absolute',
                  top: '24px',
                  right: '24px',
                  background: 'none',
                  border: '1px solid rgba(10,13,16,0.15)',
                  borderRadius: '2px',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  fontSize: '16px',
                  color: 'var(--text-primary)',
                }}
              >
                ×
              </button>

              {/* Product Name */}
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '24px',
                  letterSpacing: '-0.02em',
                  color: 'var(--text-primary)',
                  marginBottom: '8px',
                }}
              >
                {product.name}
              </h3>
              <p
                style={{
                  fontSize: '9px',
                  letterSpacing: '0.2em',
                  color: 'var(--text-muted)',
                  marginBottom: '40px',
                  fontFamily: 'var(--font-tech)',
                }}
              >
                {product.tagline}
              </p>

              {/* Spec Categories */}
              {product.fullSpecs.map((cat) => (
                <div key={cat.category} style={{ marginBottom: '32px' }}>
                  <div
                    style={{
                      fontSize: '9px',
                      letterSpacing: '0.3em',
                      color: 'var(--accent)',
                      marginBottom: '12px',
                      paddingBottom: '8px',
                      borderBottom: '1px solid rgba(10,13,16,0.08)',
                      fontFamily: 'var(--font-tech)',
                    }}
                  >
                    {cat.category}
                  </div>
                  {cat.specs.map((spec) => (
                    <div
                      key={spec.label}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '10px 0',
                        fontSize: '10px',
                        fontFamily: 'var(--font-tech)',
                      }}
                    >
                      <span style={{ color: 'rgba(10,13,16,0.5)' }}>{spec.label}</span>
                      <span style={{ color: '#0a0d10', fontWeight: 500 }}>{spec.value}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
