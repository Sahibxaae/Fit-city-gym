import React from 'react';
import { TESTIMONIALS_DATA, GYM_DETAILS } from '../data/gymData';
import { Star, CheckCircle, ExternalLink } from 'lucide-react';

export const SocialProof: React.FC = () => {
  return (
    <section className="py-24 bg-[#0E1117] border-b border-[#1E2430]" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#12161F] border border-[#1E2430] text-xs uppercase tracking-widest text-amber-500 font-extrabold mb-3">
            <Star className="w-3.5 h-3.5 fill-current" />
            Social Proof & Member Reviews
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Rated 4.9 / 5 Stars Across 946+ Google Reviews
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Read what dedicated members from Kaggadasapura and C.V. Raman Nagar say about the three-floor space, zero queue times, and expert coaching.
          </p>
        </div>

        {/* 4 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-xl bg-[#12161F] border border-[#1E2430] hover:border-amber-500/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-amber-500" />
                  ))}
                  <span className="text-xs text-slate-400 ml-2 font-mono">5.0 Star Google Rating</span>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed italic mb-6">
                  "{t.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#1E2430] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{t.author}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-amber-500" />
                  </h4>
                  <span className="text-xs text-slate-400 font-semibold">{t.duration}</span>
                </div>

                <div className="w-9 h-9 rounded-full bg-[#0A0C10] border border-[#1E2430] text-amber-500 flex items-center justify-center font-black text-xs">
                  {t.initials}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Outlink to Google Maps Reviews */}
        <div className="text-center mt-12">
          <a
            href={GYM_DETAILS.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-amber-400 transition-colors uppercase tracking-wider"
          >
            <span>Read all 946+ verified reviews directly on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
