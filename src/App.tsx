import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutTheVibe } from './components/AboutTheVibe';
import { FeaturesAmenities } from './components/FeaturesAmenities';
import { SocialProof } from './components/SocialProof';
import { LocationHours } from './components/LocationHours';
import { EnquiryForm } from './components/EnquiryForm';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0C10] text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-black">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Showcase & Enquiry Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About / The Vibe */}
        <AboutTheVibe />

        {/* 3. Features & Amenities */}
        <FeaturesAmenities />

        {/* 4. Social Proof / Testimonials */}
        <SocialProof />

        {/* 5. Location & Hours Section */}
        <LocationHours />

        {/* 6. Enquiry Lead Form */}
        <EnquiryForm />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
