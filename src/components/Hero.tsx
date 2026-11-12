import React from 'react';
import { ArrowRight, Star, Dumbbell, ShieldCheck, Phone } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 bg-[#0A0C10] border-b border-[#1E2430]" id="hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Social Proof Header Pill */}
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-black text-amber-500 bg-[#12161F] border border-[#1E2430] px-3.5 py-1.5 rounded-md">
              <span className="flex text-amber-400">
                <Star className="w-3.5 h-3.5 fill-current" />
              </span>
              <span>4.9 / 5 Rating</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-300">946+ Google Reviews</span>
            </div>

            {/* Punchy Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-[1.05]">
              Transform Your Body <br />
              on <span className="text-amber-500">3 Massive Floors</span> <br />
              of Fitness
            </h1>

            {/* Subheadline with 4.9 Star and Key Selling Points */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              Bengaluru's top-rated fitness facility engineered for <strong className="text-white font-semibold">zero machine wait times</strong>. Experience top-of-the-line equipment, expert motivating trainers, and a clean, spacious athletic environment.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#enquiry"
                className="px-7 py-4 bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-sm uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Claim Your Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#enquiry"
                className="px-7 py-4 bg-[#12161F] hover:bg-[#1A202C] border border-[#1E2430] text-slate-200 font-bold text-sm uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <span>Inquire About Memberships</span>
              </a>

              <a
                href={`tel:${GYM_DETAILS.phoneClean}`}
                className="px-4 py-4 text-slate-300 hover:text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 font-mono"
              >
                <Phone className="w-4 h-4 text-amber-500" />
                <span>{GYM_DETAILS.phone}</span>
              </a>
            </div>

            {/* Key Micro-Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-[#1E2430]">
              <div>
                <span className="block text-2xl font-black text-white">3 FLOORS</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  Dedicated Zones
                </span>
              </div>
              <div>
                <span className="block text-2xl font-black text-amber-500">0 WAIT</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  For Machines
                </span>
              </div>
              <div>
                <span className="block text-2xl font-black text-white">4.9 ★</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  946 Reviews
                </span>
              </div>
              <div>
                <span className="block text-2xl font-black text-amber-500">5:40 AM</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  Early Opening
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase & Operating Summary */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#1E2430] bg-[#12161F] shadow-xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOM6Nvxs2KelvSbiNxcm7J-VCIV6xwkVW-LKBuQxFlhTtrpannw1aISVzpNecOQyaGNQjiLmsU6FGr6hhDLP_JXW2gTGdgwBmsPHSoCi9nv81ZLOwjoIywzH5hw0ZOhDhvENpIkk9V5IfqSL3lWJP-mRV4p7KrVQe8AnqHo2Egz7DbQGC-AnWP4zJViGkfpE-cDZc2fLPffXOMHsp2c5TFsj32S839MZZozEIO3MQ"
                alt="FIT CITY GYM 3-floor facility interior in Kaggadasapura"
                className="w-full h-[500px] object-cover object-center filter brightness-90 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10] via-transparent to-black/30" />

              {/* Certified Coach Badge */}
              <div className="absolute top-4 left-4 bg-[#0A0C10]/95 border border-[#1E2430] rounded-lg p-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded bg-amber-500/20 border border-amber-500/40 text-amber-500 flex items-center justify-center font-black">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Expert Coaching</p>
                  <p className="text-xs font-black text-white">Knowledgeable & Approachable</p>
                </div>
              </div>

              {/* Operating Hours Floating Card */}
              <div className="absolute bottom-5 left-5 right-5 bg-[#12161F]/95 border border-[#1E2430] rounded-xl p-4 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-[#1E2430] mb-2">
                  <span className="font-black uppercase tracking-wider text-amber-500">Hours of Operation</span>
                  <span className="text-[10px] text-slate-400 font-mono">Kaggadasapura, Bengaluru</span>
                </div>
                <div className="space-y-1 text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Monday – Saturday:</span>
                    <span className="font-mono text-white font-semibold">5:40 AM – 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Sunday (Split):</span>
                    <span className="font-mono text-white font-semibold">7:00–11:00 AM & 5:00–8:30 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
