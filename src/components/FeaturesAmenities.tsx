import React from 'react';
import { FEATURES_DATA } from '../data/gymData';
import { Layers, Dumbbell, Users, Flame, ShieldCheck, CreditCard } from 'lucide-react';

export const FeaturesAmenities: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Layers: <Layers className="w-6 h-6 text-amber-500" />,
    Dumbbell: <Dumbbell className="w-6 h-6 text-amber-500" />,
    Users: <Users className="w-6 h-6 text-amber-500" />,
    Flame: <Flame className="w-6 h-6 text-amber-500" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-amber-500" />,
    CreditCard: <CreditCard className="w-6 h-6 text-amber-500" />,
  };

  return (
    <section className="py-20 bg-[#0A0C10] border-b border-[#1E2430]" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-xs uppercase tracking-widest text-amber-500 font-extrabold block mb-2">
            Features & Amenities
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Built For Serious Physical Progression
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Everything you need under one roof: commercial-grade machinery, certified mentors, and thoughtful facility infrastructure.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES_DATA.map((feat) => (
            <div
              key={feat.id}
              className="p-7 rounded-xl bg-[#12161F] border border-[#1E2430] hover:border-amber-500/50 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#0A0C10] border border-[#1E2430] flex items-center justify-center mb-5">
                  {iconMap[feat.icon] || <Dumbbell className="w-6 h-6 text-amber-500" />}
                </div>

                <h3 className="text-xl font-black text-white uppercase mb-1">
                  {feat.title}
                </h3>

                <h4 className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-3">
                  {feat.subtitle}
                </h4>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {feat.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#1E2430] flex items-center justify-between text-xs text-slate-400 font-medium">
                <span>Available On-Site</span>
                <span className="text-amber-500 font-bold">✓ Included</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
