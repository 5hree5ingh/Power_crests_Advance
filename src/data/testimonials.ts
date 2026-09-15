export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  tag: string;
  logo: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'ASHISH SINGH',
    role: 'FOUNDER & DIRECTOR',
    quote: 'POWERCRESTS CONTAINERS HAVE BECOME THE BACKBONE OF OUR PHYTO PRODUCT LINE. ZERO LEAKAGE, ZERO COMPROMISE — EXACTLY WHAT PLANT-BASED FORMULATIONS DEMAND.',
    tag: 'PHYTO',
    logo: '/img/Phyto_Logo.png',
    company: 'Phyto Ingredients Biopharma Pvt. Ltd.',
  },
  {
    name: 'AKSHIT JAIN',
    role: 'CO-FOUNDER',
    quote: 'FOR AURVAAY\'S WELLNESS RANGE, PACKAGING INTEGRITY IS NON-NEGOTIABLE. POWERCRESTS DELIVERS CONSISTENT QUALITY BATCH AFTER BATCH WITH FULL UN CERTIFICATION.',
    tag: 'AURVAAY',
    logo: '/img/AurvaayLogo.png',
    company: 'Aurvaay Wellness Pvt. Ltd.',
  },
  {
    name: 'VIPUL UPADHYAY',
    role: 'FOUNDER & CEO',
    quote: 'PLANTTECH OPERATES AT SCALE AND WE NEEDED A DRUM PARTNER WHO COULD MATCH OUR THROUGHPUT. POWERCRESTS HAVE NOT MISSED A SINGLE DELIVERY WINDOW IN TWO YEARS.',
    tag: 'PLANTTECH',
    logo: '/img/Planttech.png',
    company: 'Planttech Engineering Pvt. Ltd.',
  },
];

