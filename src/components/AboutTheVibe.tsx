import React from 'react';
import { Layers, Sparkles, Users, Clock, Check } from 'lucide-react';

export const AboutTheVibe: React.FC = () => {
  const pillars = [
    {
      icon: Layers,
      title: 'Spacious 3-Floor Layout',
      subtitle: 'Zero Machine Waiting',
      desc: 'Our expansive layout spans three complete floors. By dedicating distinct levels to heavy resistance, cardio suites, and functional turf, we eliminate the crowding and bottlenecks common in typical gyms.',
    },
    {
      icon: Sparkles,
      title: 'Pristine Cleanliness',
      subtitle: 'Spotless & Well-Maintained',
      desc: 'High standards of sanitization, continuous cleaning routines, clean restrooms, and continuous air-conditioning ensure an invigorated, fresh workout environment every day.',
    },
    {
      icon: Users,
      title: 'Motivating, Approachable Culture',
      subtitle: 'Driven by Expert Trainers',
      desc: 'From day one, you are supported by certified instructors praised across hundreds of reviews for their friendly demeanor, deep technical knowledge, and proactive posture correction.',
    },
  ];

  return (
    <section className="py-20 bg-[#0E1117] border-b border-[#1E2430]" id="vibe">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-xs uppercase tracking-widest text-amber-500 font-extrabold block mb-2">
            About / The Vibe
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            A Spacious, Clean Environment Where You Never Wait For Machines
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            FIT CITY GYM was founded to eliminate the frustrations of overcrowded fitness clubs. By separating your workout into three dedicated architectural floors, we give you the space, equipment, and focus you need to hit your personal best.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-xl bg-[#12161F] border border-[#1E2430] hover:border-amber-500/50 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#0A0C10] border border-[#1E2430] flex items-center justify-center text-amber-500 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-white uppercase mb-1">
                    {pillar.title}
                  </h3>
                  <span className="text-[11px] font-bold text-amber-500 uppercase tracking-wider block mb-3">
                    {pillar.subtitle}
                  </span>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#1E2430] flex items-center gap-2 text-xs text-slate-300 font-semibold">
                  <Check className="w-4 h-4 text-amber-500" />
                  <span>Verified by 946+ Google Reviews</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
