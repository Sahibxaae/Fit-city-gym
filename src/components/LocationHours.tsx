import React from 'react';
import { GYM_DETAILS } from '../data/gymData';
import { MapPin, Phone, Clock, Navigation, CheckCircle } from 'lucide-react';

export const LocationHours: React.FC = () => {
  return (
    <section className="py-20 bg-[#0A0C10] border-b border-[#1E2430]" id="location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-xs uppercase tracking-widest text-amber-500 font-extrabold block mb-2">
            Location & Hours
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Find Us in Kaggadasapura
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Conveniently situated in Kondappa Layout near C.V. Raman Nagar with easy access and ample training space.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Address and Details */}
          <div className="lg:col-span-7 p-8 rounded-2xl bg-[#12161F] border border-[#1E2430] flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              {/* Gym Address */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-[#0A0C10] border border-[#1E2430] flex items-center justify-center text-amber-500 flex-shrink-0 mt-0.5">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Facility Address
                  </h4>
                  <p className="text-base sm:text-lg font-bold text-white leading-relaxed">
                    {GYM_DETAILS.address}
                  </p>
                  <p className="text-xs text-amber-400 font-semibold mt-1">
                    ★ Landmark: {GYM_DETAILS.landmark}
                  </p>
                </div>
              </div>

              {/* Direct Phone */}
              <div className="flex items-start gap-4 pt-6 border-t border-[#1E2430]">
                <div className="w-11 h-11 rounded-lg bg-[#0A0C10] border border-[#1E2430] flex items-center justify-center text-amber-500 flex-shrink-0 mt-0.5">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Phone / Reception Desk
                  </h4>
                  <a
                    href={`tel:${GYM_DETAILS.phoneClean}`}
                    className="text-2xl font-black text-white hover:text-amber-400 font-mono transition-colors"
                  >
                    {GYM_DETAILS.phone}
                  </a>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Call directly for membership inquiries, tour scheduling & trial access.
                  </p>
                </div>
              </div>

              {/* Payments & Accessibility info from scrape */}
              <div className="p-4 rounded-xl bg-[#0A0C10] border border-[#1E2430] space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2 font-bold text-white uppercase text-[11px] tracking-wider text-amber-400">
                  <CheckCircle className="w-4 h-4" />
                  <span>Facility Access Notes:</span>
                </div>
                <p>• Clean restrooms & high-velocity air ventilation on all 3 floors.</p>
                <p>• Accepts credit cards, debit cards, UPI, Google Pay & contactless NFC mobile payments.</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a
                href={GYM_DETAILS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-5 bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions (Google Maps)</span>
              </a>

              <a
                href={`tel:${GYM_DETAILS.phoneClean}`}
                className="flex-1 py-3.5 px-5 bg-[#0A0C10] hover:bg-[#161C26] border border-[#1E2430] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 font-mono"
              >
                <Phone className="w-4 h-4 text-amber-500" />
                <span>Call {GYM_DETAILS.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Detailed Hours Format */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-[#12161F] border border-[#1E2430] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#1E2430]">
                <div className="w-10 h-10 rounded-lg bg-[#0A0C10] border border-[#1E2430] flex items-center justify-center text-amber-500">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-white uppercase">Operating Hours</h3>
                  <span className="text-xs text-slate-400">Indian Standard Time (IST)</span>
                </div>
              </div>

              <div className="space-y-4">
                {/* Weekdays */}
                <div className="p-4 rounded-xl bg-[#0A0C10] border border-[#1E2430]">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-white text-sm">Monday – Saturday</span>
                    <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                      Continuous
                    </span>
                  </div>
                  <p className="font-mono text-xl font-black text-amber-400">
                    5:40 AM – 10:00 PM
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Early morning hours fit seamlessly before IT tech shifts.
                  </p>
                </div>

                {/* Sundays */}
                <div className="p-4 rounded-xl bg-[#0A0C10] border border-[#1E2430]">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-white text-sm">Sunday (Split Hours)</span>
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                      2 Sessions
                    </span>
                  </div>
                  <div className="space-y-1.5 pt-1">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-300 font-semibold">Morning Session:</span>
                      <span className="font-mono text-white font-bold">7:00 AM – 11:00 AM</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-300 font-semibold">Evening Session:</span>
                      <span className="font-mono text-white font-bold">5:00 PM – 8:30 PM</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-2">
                    Mid-day afternoon break for deep floor sanitization.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#1E2430] text-center">
              <a
                href="#enquiry"
                className="block w-full py-3 bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs uppercase tracking-wider rounded-lg transition-colors"
              >
                Schedule a Visit / Free Trial
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
