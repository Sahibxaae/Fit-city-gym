import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Phone, Calendar, Clock, Sparkles } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

export const EnquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    fitnessGoal: 'fatloss',
    preferredSlot: 'morning',
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `FCG-${Math.floor(1000 + Math.random() * 9000)}`;
    setTicketId(id);

    try {
      const stored = JSON.parse(localStorage.getItem('fitcity_leads') || '[]');
      stored.unshift({
        id,
        ...formData,
        date: new Date().toISOString(),
      });
      localStorage.setItem('fitcity_leads', JSON.stringify(stored));
    } catch {
      // Local storage fallback
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      fitnessGoal: 'fatloss',
      preferredSlot: 'morning',
    });
  };

  return (
    <section className="py-24 bg-[#0E1117] border-b border-[#1E2430]" id="enquiry">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-[#12161F] border border-[#1E2430] shadow-2xl">
          {!submitted ? (
            <div>
              {/* Header */}
              <div className="text-center max-w-xl mx-auto mb-10">
                <span className="text-xs uppercase tracking-widest text-amber-500 font-extrabold block mb-2">
                  Take The First Step Today
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
                  Claim Your Free Trial Pass
                </h2>
                <p className="mt-3 text-sm text-slate-400">
                  Experience our 3 massive floors, test drive the equipment, and meet our motivating trainers with zero obligations.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2" htmlFor="name">
                      Full Name <span className="text-amber-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-[#0A0C10] border border-[#1E2430] rounded-lg px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 text-sm"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2" htmlFor="phone">
                      Phone Number (WhatsApp) <span className="text-amber-500">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 095350 56130"
                      className="w-full bg-[#0A0C10] border border-[#1E2430] rounded-lg px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2" htmlFor="email">
                      Email Address (Optional)
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full bg-[#0A0C10] border border-[#1E2430] rounded-lg px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 text-sm"
                    />
                  </div>

                  {/* Fitness Goal */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2" htmlFor="fitnessGoal">
                      Primary Fitness Goal
                    </label>
                    <select
                      id="fitnessGoal"
                      value={formData.fitnessGoal}
                      onChange={(e) => setFormData({ ...formData, fitnessGoal: e.target.value })}
                      className="w-full bg-[#0A0C10] border border-[#1E2430] rounded-lg px-4 py-3.5 text-white focus:outline-none focus:border-amber-500 text-sm"
                    >
                      <option value="muscle">Muscle Gain & Hypertrophy</option>
                      <option value="fatloss">Weight Loss & Fat Burning</option>
                      <option value="strength">Heavy Strength & Powerlifting</option>
                      <option value="endurance">General Fitness & Endurance</option>
                      <option value="personal-training">Personal Coach Mentorship</option>
                    </select>
                  </div>
                </div>

                {/* Preferred Slot */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Preferred Visit Slot
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: 'morning', label: 'Morning (5:40 AM – 11:00 AM)' },
                      { id: 'afternoon', label: 'Mid-Day (11:00 AM – 4:00 PM)' },
                      { id: 'evening', label: 'Evening (5:00 PM – 10:00 PM)' },
                    ].map((slot) => (
                      <button
                        key={slot.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, preferredSlot: slot.id })}
                        className={`p-3 rounded-lg text-xs font-bold text-center transition-colors ${
                          formData.preferredSlot === slot.id
                            ? 'bg-amber-500 text-black font-extrabold'
                            : 'bg-[#0A0C10] text-slate-300 border border-[#1E2430]'
                        }`}
                      >
                        {slot.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Final Compelling CTA */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-amber-500 hover:bg-amber-400 text-black font-black uppercase text-sm tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Claim Your Free Trial & Inquire Now</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <p className="text-center text-xs text-slate-400 mt-3">
                    🔒 No spam guarantee. Passes valid for first-time visitors in Bengaluru.
                  </p>
                </div>
              </form>
            </div>
          ) : (
            /* Lead Submitted Confirmation Voucher */
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <h3 className="text-3xl font-black text-white uppercase">
                Trial Pass Confirmed!
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Your guest pass voucher has been issued for <strong className="text-white">FIT CITY GYM</strong>. Show this confirmation at our front desk in Kaggadasapura.
              </p>

              {/* Digital Voucher */}
              <div className="max-w-md mx-auto bg-[#0A0C10] border border-[#1E2430] rounded-xl p-6 text-left space-y-4">
                <div className="flex justify-between items-center border-b border-[#1E2430] pb-3">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-500">
                      FIT CITY GYM · UNISEX
                    </span>
                    <p className="text-sm font-black text-white">3-Floor VIP Trial Pass</p>
                  </div>
                  <span className="bg-amber-500 text-black font-mono font-black text-xs px-2.5 py-1 rounded">
                    {ticketId}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Member</span>
                    <p className="font-bold text-white truncate">{formData.name}</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Phone</span>
                    <p className="font-bold text-white font-mono">{formData.phone}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs border-t border-[#1E2430] pt-3">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <Clock className="w-3.5 h-3.5 text-amber-500" />
                    <span className="capitalize">{formData.preferredSlot} Slot</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-amber-500" />
                    <span>Valid: 7 Days</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto pt-2">
                <a
                  href={`tel:${GYM_DETAILS.phoneClean}`}
                  className="w-full py-3 px-4 bg-[#0A0C10] hover:bg-[#161C26] border border-[#1E2430] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 font-mono"
                >
                  <Phone className="w-4 h-4 text-amber-500" />
                  Call Front Desk ({GYM_DETAILS.phone})
                </a>
                <button
                  onClick={handleReset}
                  className="w-full py-3 px-4 bg-amber-500 hover:bg-amber-400 text-black font-black text-xs uppercase tracking-wider rounded-lg transition-colors"
                >
                  Book Another Pass
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
