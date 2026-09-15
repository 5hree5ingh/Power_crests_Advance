import { useState } from 'react';
import { motion } from 'motion/react';
import { products } from '../data/products';
import SpecDrawer from './SpecDrawer';

export default function ProductGrid() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  return (
    <section
      className="blueprint-grid"
      style={{
        backgroundColor: 'var(--bg-base)',
        padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '56px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <div style={{ width: '40px', height: '1px', background: 'var(--accent)' }} />
          <span
            style={{
              fontSize: '10px',
              letterSpacing: '0.3em',
              color: 'var(--accent)',
              fontFamily: 'var(--font-tech)',
            }}
          >
            THE RANGE
          </span>
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(40px,6vw,80px)',
            letterSpacing: '-0.035em',
            color: '#0a0d10',
            margin: 0,
            lineHeight: 0.95,
          }}
          dangerouslySetInnerHTML={{ __html: 'EIGHT SIZES.<br/>ONE STANDARD.' }}
        />
      </div>

      {/* 3-Column Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
        {products.map((product, i) => (
          <motion.div
            key={product.id}
            className="product-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
              delay: i * 0.12,
            }}
            style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '2px',
              border: '1px solid rgba(10,13,16,0.06)',
              background: 'white',
              cursor: 'pointer',
              transition: 'transform 0.5s var(--ease-precision), box-shadow 0.5s var(--ease-precision)',
            }}
            whileHover={{ y: -4, boxShadow: '0 12px 48px rgba(0,0,0,0.12)' }}
          >
            {/* Image Portion */}
            <div style={{ aspectRatio: '9/16', overflow: 'hidden', position: 'relative' }}>
              <img
                className="product-card-video"
                src={`/img/product-${product.id}.jpg`}
                alt={product.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.8s var(--ease-precision)',
                }}
              />
              {/* Bottom gradient */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(to top, rgba(8,12,18,0.88) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)',
                  pointerEvents: 'none',
                }}
              />
              {/* SIZE Badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(0,0,0,0.2)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: '100px',
                  padding: '6px 14px',
                  fontSize: '8px',
                  letterSpacing: '0.3em',
                  color: 'white',
                  border: '1px solid rgba(255,255,255,0.15)',
                  fontFamily: 'var(--font-tech)',
                }}
              >
                {product.quickSpecs.find((s) => s.label === 'SIZE')?.value}
              </div>
              {/* Product Info */}
              <div style={{ position: 'absolute', bottom: '20px', left: '20px' }}>
                <div
                  style={{
                    fontSize: '8px',
                    letterSpacing: '0.25em',
                    color: 'rgba(255,255,255,0.5)',
                    marginBottom: '4px',
                    fontFamily: 'var(--font-tech)',
                  }}
                >
                  {product.tagline}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '17px',
                    letterSpacing: '0.02em',
                    color: 'white',
                  }}
                >
                  {product.name}
                </div>
              </div>
            </div>

            {/* Info Panel */}
            <div style={{ padding: '24px 24px 28px', background: 'white' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '8px 4px',
                  marginBottom: '20px',
                }}
              >
                {['SIZE', 'CAPACITY', 'WEIGHT', 'HEIGHT'].map((key) => {
                  const spec = product.quickSpecs.find((s) => s.label === key);
                  return (
                    <div key={key}>
                      <div
                        style={{
                          fontSize: '8px',
                          letterSpacing: '0.25em',
                          color: 'rgba(10,13,16,0.38)',
                          marginBottom: '2px',
                          fontFamily: 'var(--font-tech)',
                        }}
                      >
                        {key}
                      </div>
                      <div
                        style={{
                          fontSize: '12px',
                          letterSpacing: '0.06em',
                          color: 'var(--accent)',
                          fontWeight: 500,
                          fontFamily: 'var(--font-tech)',
                        }}
                      >
                        {spec?.value}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={() => setSelectedProduct(product.id)}
                  style={{
                    background: 'var(--accent)',
                    color: 'white',
                    padding: '10px 0',
                    flex: 1,
                    fontSize: '9px',
                    letterSpacing: '0.2em',
                    borderRadius: '2px',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-tech)',
                    textTransform: 'uppercase',
                  }}
                >
                  QUICK SPECS
                </button>
                <button
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(10,13,16,0.5)',
                    color: 'rgba(10,13,16,0.5)',
                    padding: '10px 0',
                    flex: 1,
                    fontSize: '9px',
                    letterSpacing: '0.2em',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-tech)',
                    textTransform: 'uppercase',
                  }}
                >
                  DATA SHEET
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Compare Button */}
      <div style={{ textAlign: 'center', marginTop: '48px' }}>
        <button
          style={{
            background: 'var(--accent)',
            color: 'white',
            padding: '14px 40px',
            fontSize: '10px',
            letterSpacing: '0.22em',
            borderRadius: '2px',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'var(--font-tech)',
            textTransform: 'uppercase',
          }}
        >
          COMPARE ALL SIZES
        </button>
      </div>

      <SpecDrawer productId={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </section>
  );
}
