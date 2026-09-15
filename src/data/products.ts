export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductCategory {
  category: string;
  specs: ProductSpec[];
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  quickSpecs: ProductSpec[];
  fullSpecs: ProductCategory[];
  video: string;
}

export const products: Product[] = [
  {
    id: '50kg-full-open-top',
    name: '50 KG FULL OPEN TOP',
    tagline: 'HEAVY-DUTY CONTAINMENT FOR HIGH-VOLUME APPLICATIONS',
    quickSpecs: [
      { label: 'SIZE', value: '50 KG' },
      { label: 'CAPACITY', value: '52 L (±1%)' },
      { label: 'WEIGHT', value: '2.3 KG (±3%)' },
      { label: 'HEIGHT', value: '597 MM' },
      { label: 'DIAMETER', value: '317.50 MM' },
      { label: 'CAP DIA', value: '355 MM' },
    ],
    fullSpecs: [
      {
        category: 'PRODUCT DESCRIPTION',
        specs: [
          { label: 'Weight', value: '2.3 Kg (± 3%)' },
          { label: 'Size', value: '50 kg' },
          { label: 'Brimful Capacity', value: '52 L (± 1%)' },
          { label: 'Dimensions', value: 'H: 597 mm | Dia: 317.50 mm | Cap Dia: 355 mm' },
          { label: 'Material', value: 'HDPE' },
          { label: 'Clamp', value: 'M.S Ring (G I)' },
          { label: 'Rubber Gasket', value: 'Available on request' },
        ],
      },
      {
        category: 'PERFORMANCE TESTS (ASTM & UN Standards)',
        specs: [
          { label: 'Drop Test', value: 'OK' },
          { label: 'Handle Test', value: 'OK' },
          { label: 'Stack Load Test', value: 'OK' },
          { label: 'Cap & Clamp Fitment Test', value: 'OK' },
        ],
      },
    ],
    video: 'product-open-top.mp4',
  },
  {
    id: '35kg-full-open-top',
    name: '35 KG FULL OPEN TOP',
    tagline: 'WIDE-MOUTH ACCESS FOR SOLID & SEMI-LIQUID CONTENTS',
    quickSpecs: [
      { label: 'SIZE', value: '35 KG' },
      { label: 'CAPACITY', value: '35 L (±1%)' },
      { label: 'WEIGHT', value: '1.6 KG (±3%)' },
      { label: 'HEIGHT', value: '552.50 MM' },
      { label: 'DIAMETER', value: '254 MM' },
      { label: 'CAP DIA', value: '305 MM' },
    ],
    fullSpecs: [
      {
        category: 'PRODUCT DESCRIPTION',
        specs: [
          { label: 'Weight', value: '1.6 Kg (± 3%)' },
          { label: 'Size', value: '35 kg' },
          { label: 'Brimful Capacity', value: '35 L (± 1%)' },
          { label: 'Dimensions', value: 'H: 552.50 mm | Dia: 254 mm | Cap Dia: 305 mm' },
          { label: 'Material', value: 'HDPE' },
          { label: 'Clamp', value: 'M.S Ring (G I)' },
          { label: 'Rubber Gasket', value: 'Available on request' },
        ],
      },
      {
        category: 'PERFORMANCE TESTS (ASTM & UN Standards)',
        specs: [
          { label: 'Drop Test', value: 'OK' },
          { label: 'Handle Test', value: 'OK' },
          { label: 'Stack Load Test', value: 'OK' },
          { label: 'Cap & Clamp Fitment Test', value: 'OK' },
        ],
      },
    ],
    video: 'product-open-top.mp4',
  },
  {
    id: '25kg-full-open-top',
    name: '25 KG FULL OPEN TOP',
    tagline: 'COMPACT OPEN-TOP DRUM FOR MEDIUM-LOAD INDUSTRIAL USE',
    quickSpecs: [
      { label: 'SIZE', value: '25 KG' },
      { label: 'CAPACITY', value: '26.5 L (±1%)' },
      { label: 'WEIGHT', value: '1.3 KG (±3%)' },
      { label: 'HEIGHT', value: '436 MM' },
      { label: 'DIAMETER', value: '257.25 MM' },
      { label: 'CAP DIA', value: '305 MM' },
    ],
    fullSpecs: [
      {
        category: 'PRODUCT DESCRIPTION',
        specs: [
          { label: 'Weight', value: '1.3 Kg (± 3%)' },
          { label: 'Size', value: '25 kg' },
          { label: 'Brimful Capacity', value: '26.5 L (± 1%)' },
          { label: 'Dimensions', value: 'H: 436 mm | Dia: 257.25 mm | Cap Dia: 305 mm' },
          { label: 'Material', value: 'HDPE' },
          { label: 'Clamp', value: 'M.S Ring (G I)' },
          { label: 'Rubber Gasket', value: 'Available on request' },
        ],
      },
      {
        category: 'PERFORMANCE TESTS (ASTM & UN Standards)',
        specs: [
          { label: 'Drop Test', value: 'OK' },
          { label: 'Handle Test', value: 'OK' },
          { label: 'Stack Load Test', value: 'OK' },
          { label: 'Cap & Clamp Fitment Test', value: 'OK' },
        ],
      },
    ],
    video: 'product-open-top.mp4',
  },
  {
    id: '50kg-narrow-mouth-rocket',
    name: '50 KG NARROW MOUTH ROCKET CONTAINERS',
    tagline: 'SEALED NARROW-MOUTH CONTAINER FOR LIQUID TRANSPORT',
    quickSpecs: [
      { label: 'SIZE', value: '50 KG' },
      { label: 'CAPACITY', value: '55 L (±1%)' },
      { label: 'WEIGHT', value: '2.3 KG (±3%)' },
      { label: 'HEIGHT', value: '544 MM' },
      { label: 'WIDTH', value: '343 MM' },
      { label: 'DEPTH', value: '317.50 MM' },
    ],
    fullSpecs: [
      {
        category: 'PRODUCT DESCRIPTION',
        specs: [
          { label: 'Weight', value: '2.3 Kg (± 3%)' },
          { label: 'Size', value: '50 kg' },
          { label: 'Brimful Capacity', value: '55 L (± 1%)' },
          { label: 'Dimensions', value: 'H: 544 mm | W: 343 mm | D: 317.50 mm' },
          { label: 'Neck Details', value: 'Thread OD 68 MM' },
          { label: 'Material', value: 'HDPE' },
          { label: 'Closures', value: '68 MM Tamper Evident Cap / Vented' },
        ],
      },
      {
        category: 'PERFORMANCE TESTS (ASTM & UN Standards)',
        specs: [
          { label: 'Drop Test', value: 'OK' },
          { label: 'Leakage Test', value: 'OK' },
          { label: 'Stack Load Test', value: 'OK' },
          { label: 'Cap & Clamp Fitment Test', value: 'OK' },
        ],
      },
    ],
    video: 'product-tight-head.mp4',
  },
  {
    id: '35kg-narrow-mouth-mouser',
    name: '35 KG NARROW MOUTH MOUSER CONTAINERS',
    tagline: 'STACKABLE MOUSER-STYLE CONTAINER FOR PRECISION DISPENSING',
    quickSpecs: [
      { label: 'SIZE', value: '35 KG' },
      { label: 'CAPACITY', value: '36.5 L (±1%)' },
      { label: 'WEIGHT', value: '1.7 KG (±3%)' },
      { label: 'HEIGHT', value: '482 MM' },
      { label: 'WIDTH', value: '305 MM' },
      { label: 'DEPTH', value: '279.40 MM' },
    ],
    fullSpecs: [
      {
        category: 'PRODUCT DESCRIPTION',
        specs: [
          { label: 'Weight', value: '1.7 Kg (± 3%)' },
          { label: 'Size', value: '35 kg' },
          { label: 'Brimful Capacity', value: '36.5 L (± 1%)' },
          { label: 'Dimensions', value: 'H: 482 mm | W: 305 mm | B: 279.40 mm' },
          { label: 'Neck Details', value: 'Thread OD 65 MM' },
          { label: 'Material', value: 'HDPE' },
          { label: 'Closures', value: '65 MM Tamper Evident Cap / Vented' },
        ],
      },
      {
        category: 'PERFORMANCE TESTS (ASTM & UN Standards)',
        specs: [
          { label: 'Drop Test', value: 'OK' },
          { label: 'Handle Test', value: 'OK' },
          { label: 'Leakage Test', value: 'OK' },
          { label: 'Stack Load Test', value: 'OK' },
          { label: 'Cap & Clamp Fitment Test', value: 'OK' },
        ],
      },
    ],
    video: 'product-jerry-can.mp4',
  },
  {
    id: '25kg-narrow-mouth-mouser',
    name: '25 KG NARROW MOUTH MOUSER CONTAINERS',
    tagline: 'COMPACT MOUSER CONTAINER FOR DIVERSE INDUSTRIAL APPLICATIONS',
    quickSpecs: [
      { label: 'SIZE', value: '25 KG' },
      { label: 'CAPACITY', value: '28 L (±1%)' },
      { label: 'WEIGHT', value: '1.3 KG (±3%)' },
      { label: 'HEIGHT', value: '394 MM' },
      { label: 'WIDTH', value: '292 MM' },
      { label: 'DEPTH', value: '266.70 MM' },
    ],
    fullSpecs: [
      {
        category: 'PRODUCT DESCRIPTION',
        specs: [
          { label: 'Weight', value: '1.3 Kg (± 3%)' },
          { label: 'Size', value: '25 kg' },
          { label: 'Brimful Capacity', value: '28 L (± 1%)' },
          { label: 'Dimensions', value: 'H: 394 mm | W: 292 mm | B: 266.70 mm' },
          { label: 'Neck Details', value: 'Thread OD 65 MM' },
          { label: 'Material', value: 'HDPE' },
          { label: 'Closures', value: '65 MM Tamper Evident Cap / Vented' },
        ],
      },
      {
        category: 'PERFORMANCE TESTS (ASTM & UN Standards)',
        specs: [
          { label: 'Drop Test', value: 'OK' },
          { label: 'Handle Test', value: 'OK' },
          { label: 'Leakage Test', value: 'OK' },
          { label: 'Stack Load Test', value: 'OK' },
          { label: 'Cap & Clamp Fitment Test', value: 'OK' },
        ],
      },
    ],
    video: 'product-jerry-can.mp4',
  },
  {
    id: '20kg-narrow-mouth-mouser',
    name: '20 KG NARROW MOUTH MOUSER CONTAINERS',
    tagline: 'LIGHTWEIGHT MOUSER CONTAINER FOR PRECISE LIQUID HANDLING',
    quickSpecs: [
      { label: 'SIZE', value: '20 KG' },
      { label: 'CAPACITY', value: '22 L (±1%)' },
      { label: 'WEIGHT', value: '1.1 KG (±3%)' },
      { label: 'HEIGHT', value: '406.40 MM' },
      { label: 'WIDTH', value: '266.70 MM' },
      { label: 'DEPTH', value: '241.30 MM' },
    ],
    fullSpecs: [
      {
        category: 'PRODUCT DESCRIPTION',
        specs: [
          { label: 'Weight', value: '1.1 Kg (± 3%)' },
          { label: 'Size', value: '20 kg' },
          { label: 'Brimful Capacity', value: '22 L (± 1%)' },
          { label: 'Dimensions', value: 'H: 406.40 mm | W: 266.70 mm | B: 241.30 mm' },
          { label: 'Neck Details', value: 'Thread OD 65 MM' },
          { label: 'Material', value: 'HDPE' },
          { label: 'Closures', value: '65 MM Tamper Evident Cap / Vented' },
        ],
      },
      {
        category: 'PERFORMANCE TESTS (ASTM & UN Standards)',
        specs: [
          { label: 'Drop Test', value: 'OK' },
          { label: 'Handle Test', value: 'OK' },
          { label: 'Leakage Test', value: 'OK' },
          { label: 'Stack Load Test', value: 'OK' },
          { label: 'Cap & Clamp Fitment Test', value: 'OK' },
        ],
      },
    ],
    video: 'product-jerry-can.mp4',
  },
  {
    id: '35kg-jerry-can',
    name: '35 KG JERRY CAN',
    tagline: 'HIGH-CAPACITY JERRY CAN FOR BULK INDUSTRIAL LIQUID STORAGE',
    quickSpecs: [
      { label: 'SIZE', value: '35 KG' },
      { label: 'CAPACITY', value: '39 L (±1%)' },
      { label: 'WEIGHT', value: '1.8 KG (±3%)' },
      { label: 'HEIGHT', value: '482.60 MM' },
      { label: 'WIDTH', value: '343 MM' },
      { label: 'DEPTH', value: '228.60 MM' },
    ],
    fullSpecs: [
      {
        category: 'PRODUCT DESCRIPTION',
        specs: [
          { label: 'Weight', value: '1.8 Kg (± 3%)' },
          { label: 'Size', value: '35 kg' },
          { label: 'Brimful Capacity', value: '39 L (± 1%)' },
          { label: 'Dimensions', value: 'H: 482.60 mm | W: 343 mm | B: 228.60 mm' },
          { label: 'Neck Details', value: 'Thread OD 68 MM' },
          { label: 'Material', value: 'HDPE' },
          { label: 'Closures', value: '68 MM Tamper Evident Cap / Vented' },
        ],
      },
      {
        category: 'PERFORMANCE TESTS (ASTM & UN Standards)',
        specs: [
          { label: 'Drop Test', value: 'OK' },
          { label: 'Handle Test', value: 'OK' },
          { label: 'Leakage Test', value: 'OK' },
          { label: 'Stack Load Test', value: 'OK' },
          { label: 'Cap & Clamp Fitment Test', value: 'OK' },
        ],
      },
    ],
    video: 'product-jerry-can.mp4',
  },
];
