import { GymFeature, Testimonial } from '../types';

export const GYM_DETAILS = {
  name: 'FIT CITY GYM',
  tagline: 'Massive 3-Floor Fitness Hub · Zero Wait for Machines',
  subTag: 'UNISEX ATHLETIC FACILITY',
  phone: '095350 56130',
  phoneClean: '+919535056130',
  address: '32/33, BRINDAVAN, 8th Cross Rd, next to ANDHRA BANK, Kondappa Layout, C.V. Raman Nagar, Kaggadasapura, Bengaluru, Karnataka 560093',
  landmark: 'Next to ANDHRA BANK, Kondappa Layout, Brindavan Building',
  mapsUrl: 'https://maps.google.com/?q=FIT+CITY+GYM+Kaggadasapura+Bengaluru',
  rating: 4.9,
  reviewsCount: '946',
  reviewsLabel: '946 Google Reviews',
  hours: {
    weekdays: {
      days: 'Monday – Saturday',
      time: '5:40 AM – 10:00 PM',
      fullText: '05:40 AM – 10:00 PM (Continuous)',
    },
    sunday: {
      days: 'Sunday (Split Hours)',
      time: '7:00 AM – 11:00 AM & 5:00 PM – 8:30 PM',
      morning: '7:00 AM – 11:00 AM',
      evening: '5:00 PM – 8:30 PM',
    },
  },
  highlights: [
    'Massive 3-Floor Space',
    'Top-of-the-Line Equipment',
    'Expert & Motivating Trainers',
    '4.9/5 Rating (946 Reviews)',
  ],
};

export const FEATURES_DATA: GymFeature[] = [
  {
    id: 'feat-1',
    title: '3 Floors of Dedicated Space',
    subtitle: 'Zero Machine Queues',
    description:
      'A massive three-floor layout thoughtfully separated into heavy strength, cardio machines, and functional turf. Eliminates overcrowding and prevents bottlenecks so your workout stays efficient.',
    icon: 'Layers',
  },
  {
    id: 'feat-2',
    title: 'Top-of-the-Line Equipment',
    subtitle: 'Commercial Precision Gear',
    description:
      'Equipped with heavy Olympic racks, multiple flat/incline benches, dumbbell racks scaling to competitive weights, biomechanical isolation machines, and sled turf tracks.',
    icon: 'Dumbbell',
  },
  {
    id: 'feat-3',
    title: 'Expert, Motivating Trainers',
    subtitle: 'Approachable & Knowledgeable',
    description:
      'Reviewers consistently praise our certified instructors for hands-on posture guidance, friendly demeanor, and motivating encouragement for beginners and seasoned lifters alike.',
    icon: 'Users',
  },
  {
    id: 'feat-4',
    title: 'Diverse On-Site Classes',
    subtitle: 'High-Energy Group Sessions',
    description:
      'Engaging, well-organized on-site classes including strength conditioning, HIIT circuits, core blasts, and agility drills designed to challenge you in a supportive community setting.',
    icon: 'Flame',
  },
  {
    id: 'feat-5',
    title: 'Incredibly Clean & Hygienic',
    subtitle: 'Spotless Environment',
    description:
      'Continuous sanitization routines, well-ventilated training floors, high-capacity commercial air-conditioning, and hygienic restrooms ensuring a fresh workout space.',
    icon: 'ShieldCheck',
  },
  {
    id: 'feat-6',
    title: 'Flexible Modern Payments',
    subtitle: 'NFC & Cards Accepted',
    description:
      'Fast, hassle-free payment processing at reception. We accept credit cards, debit cards, UPI, Google Pay, and NFC contactless mobile payments.',
    icon: 'CreditCard',
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Rohit K.',
    duration: 'Member · 14 Months',
    rating: 5,
    text: 'The best gym in Kaggadasapura by far! Having 3 full floors means you never have to stand around waiting for equipment even during peak evening hours. The coaches are super polite and always correct your posture.',
    initials: 'RK',
  },
  {
    id: 'test-2',
    author: 'Shreya Menon',
    duration: 'Member · 8 Months',
    rating: 5,
    text: 'Extremely hygienic and well-maintained. The functional turf on the third floor is fantastic for HIIT and agility. The trainers are highly knowledgeable, approachable, and always keep you motivated without feeling intimidated.',
    initials: 'SM',
  },
  {
    id: 'test-3',
    author: 'Arun Nambiar',
    duration: 'Member · 2 Years',
    rating: 5,
    text: 'Great working hours starting early at 5:40 AM which fits right before my tech office hours. Top-notch plate-loaded gear, multiple squat racks, and heavy dumbbells. Easily a 5-star gym for serious training.',
    initials: 'AN',
  },
  {
    id: 'test-4',
    author: 'Kavitha Ramachandran',
    duration: 'Member · 6 Months',
    rating: 5,
    text: 'As a woman beginner, I was initially nervous about joining a strength gym, but FIT CITY is truly welcoming. The coaches make sure you feel supported, respected, and comfortable across all 3 floors.',
    initials: 'KR',
  },
];
