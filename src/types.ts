export interface GymFeature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  author: string;
  duration: string;
  rating: number;
  text: string;
  initials: string;
}

export interface EnquirySubmission {
  id: string;
  name: string;
  phone: string;
  email: string;
  fitnessGoal: string;
  preferredSlot: string;
  submittedAt: string;
}
