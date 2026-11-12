import React, { useState } from 'react';
import { Menu, X, Phone, Star } from 'lucide-react';
import { Logo } from './Logo';
import { GYM_DETAILS } from '../data/gymData';

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'The Vibe', href: '#vibe' },
    { label: 'Features & Amenities', href: '#features' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Location & Hours', href: '#location' },
    { label: 'Enquiry', href: '#enquiry' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0A0C10]/95 backdrop-blur-md border-b border-[#1E2430]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center focus:outline-none" aria-label="FIT CITY GYM Homepage">
          <Logo size="md" />
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-7 text-xs font-bold tracking-wider uppercase text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-amber-400 transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Group */}
        <div className="flex items-center gap-3">
          {/* Rating Badge */}
          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#12161F] border border-[#1E2430] text-xs font-bold text-slate-300">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="text-white font-extrabold">{GYM_DETAILS.rating}</span>
            <span className="text-slate-500">·</span>
            <span className="text-slate-400 font-normal">946 Reviews</span>
          </div>

          {/* Direct Phone */}
          <a
            href={`tel:${GYM_DETAILS.phoneClean}`}
            className="hidden md:inline-flex items-center gap-2 text-xs font-bold text-slate-200 bg-[#12161F] hover:bg-[#1A202C] border border-[#1E2430] px-3.5 py-2 rounded-lg transition-colors font-mono"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>{GYM_DETAILS.phone}</span>
          </a>

          {/* Primary CTA */}
          <a
            href="#enquiry"
            className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-sm"
          >
            Claim Free Trial
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg bg-[#12161F] border border-[#1E2430] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5 text-amber-500" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0F1218] border-b border-[#1E2430] px-4 pt-3 pb-6 space-y-3">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-200 hover:bg-[#161C26] hover:text-amber-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#1E2430] space-y-2">
            <a
              href={`tel:${GYM_DETAILS.phoneClean}`}
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#12161F] border border-[#1E2430] rounded-lg text-center font-bold text-xs uppercase tracking-wider text-white"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              Call {GYM_DETAILS.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
