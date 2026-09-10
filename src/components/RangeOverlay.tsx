import { AnimatePresence, motion } from 'motion/react';
import RangeVideo from './RangeVideo';

interface RangeOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const rangeItems = [
  {
    name: 'OPEN TOP DRUM',
    imgSrc: '/img/product-open-top.jpg',
    delay: 0,
    specs: [
      { label: 'CAPACITY', value: '200L' },
      { label: 'WALL', value: '2.4MM' },
      { label: 'UN RATING', value: '1H2/Y' },
      { label: 'CLOSURE', value: 'LEVER LOCK RING' },
    ],
  },
  {
    name: 'TIGHT HEAD DRUM',
    imgSrc: '/img/product-tight-head.jpg',
    delay: 0.12,
    specs: [
      { label: 'CAPACITY', value: '220L' },
      { label: 'WALL', value: '2.6MM' },
      { label: 'UN RATING', value: '1H1/Y' },
      { label: 'BUNGS', value: '2" + 3/4" NPT' },
    ],
  },
  {
    name: 'JERRY CAN',
    imgSrc: '/img/product-jerry-can.jpg',
    delay: 0.24,
    specs: [
      { label: 'CAPACITY', value: '20L' },
      { label: 'WALL', value: '1.6MM' },
      { label: 'UN RATING', value: '3H1/Y' },
      { label: 'CAP', value: '51MM SCREW' },
    ],
  },
];

export default function RangeOverlay({ isOpen, onClose }: RangeOverlayProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.3 } }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 110,
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          {rangeItems.map((item) => (
            <RangeVideo
              key={item.name}
              imgSrc={item.imgSrc}
              name={item.name}
              specs={item.specs}
              delay={item.delay}
              isOpen={isOpen}
            />
          ))}

          {/* Close button */}
          <motion.button
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              top: '32px',
              right: '32px',
              zIndex: 120,
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '100px',
              padding: '12px 28px',
              color: 'white',
              background: 'transparent',
              fontSize: '10px',
              letterSpacing: '0.22em',
              cursor: 'pointer',
              fontFamily: 'var(--font-tech)',
              textTransform: 'uppercase',
            }}
          >
            × CLOSE
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
