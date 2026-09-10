import { motion } from 'motion/react';

export default function QuoteForm() {
  const labelStyle: React.CSSProperties = {
    fontSize: '8px',
    letterSpacing: '0.3em',
    color: 'rgba(10,13,16,0.5)',
    marginBottom: '6px',
    display: 'block',
    fontFamily: 'var(--font-tech)',
  };

  const inputStyle: React.CSSProperties = {
    background: 'rgba(10,13,16,0.04)',
    border: '1px solid rgba(10,13,16,0.1)',
    color: '#0a0d10',
    fontSize: '11px',
    letterSpacing: '0.12em',
    padding: '14px 16px',
    borderRadius: '2px',
    width: '100%',
    boxSizing: 'border-box',
    fontFamily: 'var(--font-tech)',
    textTransform: 'uppercase',
    outline: 'none',
  };

  return (
    <section
      className="blueprint-grid"
      style={{
        padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)',
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '56px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '24px',
          }}
        >
          <div style={{ width: '24px', height: '1px', background: 'var(--accent)' }} />
          <span
            style={{
              fontSize: '10px',
              letterSpacing: '0.3em',
              color: 'var(--accent)',
              fontFamily: 'var(--font-tech)',
            }}
          >
            REQUEST A QUOTATION
          </span>
          <div style={{ width: '24px', height: '1px', background: 'var(--accent)' }} />
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
          dangerouslySetInnerHTML={{ __html: "SPEC IT.<br/>WE'LL MOULD IT." }}
        />
      </div>

      {/* Form Card */}
      <div
        style={{
          maxWidth: '720px',
          margin: '0 auto',
          background: 'white',
          border: '1px solid rgba(10,13,16,0.06)',
          boxShadow: '0 4px 40px rgba(0,0,0,0.06)',
          borderRadius: '3px',
          padding: 'clamp(32px,5vw,56px)',
        }}
      >
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Row 1 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div>
              <label style={labelStyle}>FULL NAME</label>
              <input type="text" style={inputStyle} placeholder="YOUR FULL NAME" />
            </div>
            <div>
              <label style={labelStyle}>WORK EMAIL</label>
              <input type="email" style={inputStyle} placeholder="EMAIL@COMPANY.COM" />
            </div>
          </div>

          {/* Row 2 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div>
              <label style={labelStyle}>COMPANY NAME</label>
              <input type="text" style={inputStyle} placeholder="COMPANY NAME" />
            </div>
            <div>
              <label style={labelStyle}>PHONE NUMBER</label>
              <input type="tel" style={inputStyle} placeholder="+91 XXXX XXX XXX" />
            </div>
          </div>

          {/* Row 3 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div>
              <label style={labelStyle}>PRODUCT TYPE</label>
              <select style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}>
                <option>OPEN TOP DRUM</option>
                <option>TIGHT HEAD DRUM</option>
                <option>JERRY CAN</option>
                <option>CUSTOM MOULD</option>
              </select>
            </div>
            <div>
              <label style={labelStyle}>CAPACITY REQUIRED</label>
              <select style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}>
                <option>5L</option>
                <option>20L</option>
                <option>50L</option>
                <option>200L</option>
                <option>220L</option>
                <option>OTHER</option>
              </select>
            </div>
          </div>

          {/* Row 4 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div>
              <label style={labelStyle}>ANNUAL VOLUME</label>
              <input type="text" style={inputStyle} placeholder="APPROX. UNITS PER YEAR" />
            </div>
            <div>
              <label style={labelStyle}>CONTENTS TO BE STORED</label>
              <input type="text" style={inputStyle} placeholder="E.G. AGROCHEMICAL, LUBRICANT, FOOD GRADE" />
            </div>
          </div>

          {/* Certification */}
          <div style={{ marginBottom: '16px' }}>
            <label style={labelStyle}>CERTIFICATION REQUIRED</label>
            <input
              type="text"
              style={inputStyle}
              placeholder="UN RATING, FDA, REACH — OR NOTE IF UNSURE"
            />
          </div>

          {/* Additional */}
          <div style={{ marginBottom: '16px' }}>
            <label style={labelStyle}>ADDITIONAL REQUIREMENTS</label>
            <textarea
              rows={4}
              style={{
                ...inputStyle,
                resize: 'vertical',
              }}
              placeholder="COLOUR, PRINTING, CLOSURE TYPE, DELIVERY LOCATION..."
            />
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            type="submit"
            style={{
              width: '100%',
              background: 'var(--accent)',
              color: 'white',
              padding: '16px',
              fontSize: '10px',
              letterSpacing: '0.25em',
              borderRadius: '2px',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--font-tech)',
              textTransform: 'uppercase',
              marginTop: '8px',
            }}
          >
            REQUEST QUOTATION
          </motion.button>

          <p
            style={{
              fontSize: '8px',
              letterSpacing: '0.2em',
              color: 'rgba(10,13,16,0.35)',
              textAlign: 'center',
              marginTop: '16px',
              fontFamily: 'var(--font-tech)',
            }}
          >
            TECHNICAL QUOTATIONS ARE RETURNED WITHIN ONE WORKING DAY.
          </p>
        </form>
      </div>
    </section>
  );
}
