import React from 'react';
import { Logo } from './Logo';
import { GYM_DETAILS } from '../data/gymData';
import { Phone, MapPin, Clock, Star } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#07080B] border-t border-[#1E2430] py-16 text-slate-400 text-xs" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1E2430]">
          {/* Brand & Social Proof */}
          <div className="lg:col-span-5 space-y-4">
            <Logo size="md" />
            <p className="text-slate-300 text-sm font-semibold max-w-sm mt-3">
              Bengaluru's Premier 3-Floor Strength & Conditioning Hub
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Spacious three-floor layout preventing overcrowding and eliminating wait times for machines. Certified motivating trainers, top-of-the-line equipment, and hospital-grade cleanliness.
            </p>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#12161F] border border-[#1E2430] text-xs font-bold text-amber-500">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>4.9 / 5 Rating</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-300">946 Google Reviews</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-black text-white uppercase tracking-wider text-xs">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-amber-400 transition-colors">Home & Overview</a>
              </li>
              <li>
                <a href="#vibe" className="hover:text-amber-400 transition-colors">The Vibe & Cleanliness</a>
              </li>
              <li>
                <a href="#features" className="hover:text-amber-400 transition-colors">Features & Amenities</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-amber-400 transition-colors">Member Testimonials</a>
              </li>
              <li>
                <a href="#location" className="hover:text-amber-400 transition-colors">Location & Hours</a>
              </li>
              <li>
                <a href="#enquiry" className="hover:text-amber-400 transition-colors">Claim Free Trial</a>
              </li>
            </ul>
          </div>

          {/* Direct Location & Hours Info */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-black text-white uppercase tracking-wider text-xs">Location & Contact</h4>
            <div className="space-y-3 text-xs">
              <p className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>32/33, BRINDAVAN, 8th Cross Rd, next to ANDHRA BANK, Kondappa Layout, Kaggadasapura, Bengaluru 560093</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <a href={`tel:${GYM_DETAILS.phoneClean}`} className="text-amber-500 hover:underline font-bold font-mono">
                  {GYM_DETAILS.phone}
                </a>
              </p>
              <p className="flex items-start gap-2 text-slate-400">
                <Clock className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>Mon – Sat: 5:40 AM – 10:00 PM<br />Sun: 7:00 – 11:00 AM & 5:00 – 8:30 PM</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[11px] text-slate-400">
          <p>© 2026 FIT CITY GYM. All rights reserved.</p>
          <p>Kaggadasapura, C.V. Raman Nagar, Bengaluru, Karnataka</p>
        </div>
      </div>
    </footer>
  );
};
