import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const faqs = [
  {
    question: 'WHAT IS YOUR MINIMUM ORDER QUANTITY?',
    answer:
      '500 UNITS ON OUR STOCK RANGE. FOR TRIAL ORDERS OR NEW PRODUCT EVALUATIONS, WE CAN ACCOMMODATE SMALLER QUANTITIES ON A CASE-BY-CASE BASIS. CONTACT OUR SALES TEAM FOR DETAILS.',
  },
  {
    question: 'ARE YOUR DRUMS UN CERTIFIED?',
    answer:
      'YES. WE HOLD FULL 1H1, 1H2, AND 3H1 CERTIFICATION FOR TIGHT-HEAD DRUMS, OPEN-TOP DRUMS, AND JERRY CANS RESPECTIVELY. EVERY BATCH IS SHIPPED WITH ITS OWN TEST CERTIFICATE.',
  },
  {
    question: 'CAN YOU MATCH A CUSTOM COLOUR?',
    answer:
      'ABSOLUTELY. OUR MASTERBATCH IS MATCHED TO YOUR PANTONE REFERENCE. WE PROVIDE AN APPROVAL SAMPLE WITHIN FIVE WORKING DAYS BEFORE PRODUCTION BEGINS.',
  },
  {
    question: 'DO YOU MAKE BESPOKE MOULDS?',
    answer:
      'YES. OUR IN-HOUSE TOOL ROOM DESIGNS, CUTS, AND VALIDATES BESPOKE MOULDS ON SITE. FIRST-ARTICLE SAMPLES ARE AVAILABLE IN FOURTEEN DAYS, WITH FULL TOOLING OWNERSHIP OPTIONS.',
  },
  {
    question: 'WHAT IS YOUR LEAD TIME?',
    answer:
      '14 DAYS ON OUR STANDARD STOCK RANGE. CONTRACT PROGRAMME CUSTOMERS BENEFIT FROM A PRIORITY 7-DAY DISPATCH WINDOW WITH DEDICATED PRODUCTION SLOTS.',
  },
  {
    question: 'DO YOU EXPORT?',
    answer:
      'YES. WE SUPPLY EIGHTEEN COUNTRIES. ALL EXPORT ORDERS ARE CONTAINER-OPTIMISED FOR STACKING DENSITY, EXPORT-PACKED, AND SHIPPED WITH FULL DOCUMENTATION HANDLED IN-HOUSE.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '48px' }}>
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
            FAQ
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
        >
          WHAT YOU NEED TO KNOW.
        </h2>
      </div>

      {/* FAQ Items */}
      <div>
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i}>
              <div
                onClick={() => setOpenIndex(isOpen ? null : i)}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  padding: '24px 0',
                  borderBottom: '1px solid rgba(10,13,16,0.08)',
                }}
              >
                <span
                  style={{
                    fontSize: '12px',
                    letterSpacing: '0.12em',
                    color: isOpen ? '#0a0d10' : 'rgba(10,13,16,0.6)',
                    fontFamily: 'var(--font-tech)',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    fontSize: '14px',
                    color: 'rgba(10,13,16,0.4)',
                    flexShrink: 0,
                    marginLeft: '16px',
                  }}
                >
                  ↓
                </motion.span>
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p
                      style={{
                        fontSize: '10px',
                        lineHeight: 1.9,
                        letterSpacing: '0.15em',
                        color: 'rgba(10,13,16,0.52)',
                        padding: '0 0 24px',
                        margin: 0,
                        fontFamily: 'var(--font-tech)',
                      }}
                    >
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
