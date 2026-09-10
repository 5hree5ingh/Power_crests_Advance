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
    id: 'open-top',
    name: 'OPEN TOP DRUM',
    tagline: 'FULL ACCESS FOR VISCOUS AND SOLID CONTENTS',
    quickSpecs: [
      { label: 'CAPACITY', value: '200L' },
      { label: 'WEIGHT', value: '9.8KG' },
      { label: 'HEIGHT', value: '935MM' },
      { label: 'DIAMETER', value: '585MM' },
      { label: 'CLOSURE', value: 'LEVER LOCK RING' },
      { label: 'UN RATING', value: '1H2/Y' },
    ],
    fullSpecs: [
      {
        category: 'DIMENSIONS',
        specs: [
          { label: 'Capacity', value: '200L' },
          { label: 'Height', value: '935mm' },
          { label: 'Outer diameter', value: '585mm' },
          { label: 'Opening diameter', value: '545mm' },
        ],
      },
      {
        category: 'MATERIAL',
        specs: [
          { label: 'Resin', value: 'HDPE virgin' },
          { label: 'Density', value: '0.952 g/cm³' },
          { label: 'MFI', value: '0.35 g/10min' },
          { label: 'Regrind content', value: '0%' },
        ],
      },
      {
        category: 'PERFORMANCE',
        specs: [
          { label: 'Drop test', value: '1.8m at -18°C' },
          { label: 'Stack load', value: '1,800kg' },
          { label: 'Hydraulic', value: '100kPa' },
          { label: 'Leakproof', value: '30kPa' },
        ],
      },
      {
        category: 'CLOSURE',
        specs: [
          { label: 'Type', value: 'Removable lid' },
          { label: 'Ring', value: 'Galvanised steel lever' },
          { label: 'Gasket', value: 'EPDM' },
          { label: 'Torque', value: '60Nm' },
        ],
      },
      {
        category: 'COMPLIANCE',
        specs: [
          { label: 'UN', value: '1H2/Y' },
          { label: 'ISO', value: '9001:2015' },
          { label: 'Food grade', value: 'FDA 21 CFR' },
          { label: 'REACH', value: 'Compliant' },
        ],
      },
    ],
    video: 'product-open-top.mp4',
  },
  {
    id: 'tight-head',
    name: 'TIGHT HEAD DRUM',
    tagline: 'SEALED CONTAINMENT FOR HAZARDOUS LIQUIDS',
    quickSpecs: [
      { label: 'CAPACITY', value: '220L' },
      { label: 'WEIGHT', value: '10.4KG' },
      { label: 'HEIGHT', value: '960MM' },
      { label: 'DIAMETER', value: '580MM' },
      { label: 'CLOSURE', value: '2× BUNG' },
      { label: 'UN RATING', value: '1H1/Y' },
    ],
    fullSpecs: [
      {
        category: 'DIMENSIONS',
        specs: [
          { label: 'Capacity', value: '220L' },
          { label: 'Height', value: '960mm' },
          { label: 'Outer diameter', value: '580mm' },
          { label: 'Opening diameter', value: 'N/A (sealed)' },
        ],
      },
      {
        category: 'MATERIAL',
        specs: [
          { label: 'Resin', value: 'HDPE virgin' },
          { label: 'Density', value: '0.952 g/cm³' },
          { label: 'MFI', value: '0.35 g/10min' },
          { label: 'Regrind content', value: '0%' },
        ],
      },
      {
        category: 'PERFORMANCE',
        specs: [
          { label: 'Drop test', value: '1.8m at -18°C' },
          { label: 'Stack load', value: '1,800kg' },
          { label: 'Hydraulic', value: '250kPa' },
          { label: 'Leakproof', value: '30kPa' },
        ],
      },
      {
        category: 'CLOSURE',
        specs: [
          { label: 'Type', value: 'Sealed head' },
          { label: 'Bungs', value: '2" + 3/4" NPT' },
          { label: 'Gasket', value: 'EPDM' },
          { label: 'Torque', value: '50Nm' },
        ],
      },
      {
        category: 'COMPLIANCE',
        specs: [
          { label: 'UN', value: '1H1/Y' },
          { label: 'ISO', value: '9001:2015' },
          { label: 'Food grade', value: 'FDA 21 CFR' },
          { label: 'REACH', value: 'Compliant' },
        ],
      },
    ],
    video: 'product-tight-head.mp4',
  },
  {
    id: 'jerry-can',
    name: 'JERRY CAN',
    tagline: 'COMPACT, STACKABLE, HANDLE-MOULDED',
    quickSpecs: [
      { label: 'CAPACITY', value: '20L' },
      { label: 'WEIGHT', value: '0.95KG' },
      { label: 'HEIGHT', value: '395MM' },
      { label: 'FOOTPRINT', value: '290×195MM' },
      { label: 'CLOSURE', value: '51MM SCREW CAP' },
      { label: 'UN RATING', value: '3H1/Y' },
    ],
    fullSpecs: [
      {
        category: 'DIMENSIONS',
        specs: [
          { label: 'Capacity', value: '20L' },
          { label: 'Height', value: '395mm' },
          { label: 'Footprint', value: '290 × 195mm' },
          { label: 'Wall thickness', value: '1.6mm nominal' },
        ],
      },
      {
        category: 'MATERIAL',
        specs: [
          { label: 'Resin', value: 'HDPE virgin' },
          { label: 'Density', value: '0.952 g/cm³' },
          { label: 'MFI', value: '0.35 g/10min' },
          { label: 'Regrind content', value: '0%' },
        ],
      },
      {
        category: 'PERFORMANCE',
        specs: [
          { label: 'Drop test', value: '1.8m at -18°C' },
          { label: 'Stack load', value: '450kg' },
          { label: 'Hydraulic', value: '100kPa' },
          { label: 'Leakproof', value: '20kPa' },
        ],
      },
      {
        category: 'CLOSURE',
        specs: [
          { label: 'Type', value: '51mm screw cap' },
          { label: 'Thread', value: 'Buttress' },
          { label: 'Gasket', value: 'PE foam liner' },
          { label: 'Torque', value: '15Nm' },
        ],
      },
      {
        category: 'COMPLIANCE',
        specs: [
          { label: 'UN', value: '3H1/Y' },
          { label: 'ISO', value: '9001:2015' },
          { label: 'Food grade', value: 'FDA 21 CFR' },
          { label: 'REACH', value: 'Compliant' },
        ],
      },
    ],
    video: 'product-jerry-can.mp4',
  },
];
