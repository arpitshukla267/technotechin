import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, ArrowRight, Home } from 'lucide-react';
import { ProjectInquiry } from '../types';
import { SERVICES_DATA, STUDIO_CONTACT } from '../data/content';

interface ContactPageProps {
  onNavigateHome: () => void;
  initialService?: string;
}

const SERVICE_OPTIONS = [
  ...SERVICES_DATA.flatMap((service) => {
    if (service.hasVariants && service.variants) {
      return service.variants.map((variant) => `${variant.name} (${variant.price})`);
    }
    return [`${service.title} (${service.price})`];
  }),
  'Combined Digital Suite',
  'General Project',
  'New Project Inquiry',
];

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigateHome,
  initialService = '7 layer design ($300.00)',
}) => {
  const resolvedInitial = SERVICE_OPTIONS.includes(initialService)
    ? initialService
    : SERVICE_OPTIONS.find((option) => option.startsWith(initialService)) || initialService;

  const [formData, setFormData] = useState<ProjectInquiry>({
    name: '',
    email: '',
    company: '',
    service: resolvedInitial,
    budgetRange: '$5k – $15k',
    timeframe: '1 – 2 Months',
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const next = SERVICE_OPTIONS.includes(initialService)
      ? initialService
      : SERVICE_OPTIONS.find((option) => option.startsWith(initialService)) || initialService;
    setFormData((prev) => ({ ...prev, service: next }));
  }, [initialService]);

  const budgetOptions = ['$3k – $5k', '$5k – $15k', '$15k – $30k', '$30k+'];
  const timeframeOptions = ['Immediate (< 1 mo)', '1 – 2 Months', '2 – 4 Months', 'Flexible'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-[#111111] dark:text-[#f5f5f5] pt-28 pb-20 px-6 md:px-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 space-y-6">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#888888]">
            Contact
          </span>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight">
            Let's start your project.
          </h1>
          <p className="text-[#666666] text-base leading-relaxed max-w-md">
            Share a few details and we’ll respond within 24 hours with a clear next step.
          </p>
          <div className="pt-4 border-t border-[#F0F0F0] space-y-4 text-sm">
            <div className="space-y-1">
              <p className="text-[#888888]">Direct mail</p>
              <a href={`mailto:${STUDIO_CONTACT.email}`} className="font-mono text-[#111111] hover:underline">
                {STUDIO_CONTACT.email}
              </a>
            </div>
            <div className="space-y-1">
              <p className="text-[#888888]">Address</p>
              <address className="text-[#111111] leading-relaxed not-italic">
                {STUDIO_CONTACT.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 border border-[#EFEFEF] dark:border-[#2a2a2a] rounded-2xl p-6 sm:p-10 bg-white dark:bg-[#111111]">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#111111]" />
                <h3 className="text-2xl font-medium tracking-tight">Inquiry received</h3>
              </div>
              <p className="text-sm text-[#666666] leading-relaxed">
                Thanks {formData.name}. We’ll review your request for {formData.service} and follow up at {formData.email}.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={onNavigateHome}
                  className="px-6 py-3 bg-[#111111] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#333333] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Home className="w-4 h-4" />
                  <span>Go to Home</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 border border-[#EFEFEF] text-[#111111] text-xs font-semibold tracking-wider uppercase hover:border-[#111111] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit another</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-[11px] font-medium uppercase tracking-widest text-[#888888] mb-2">
                  Service
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 border border-[#EFEFEF] rounded-lg text-sm text-[#111111] bg-white focus:outline-none focus:border-[#111111] transition-colors"
                >
                  {[resolvedInitial, ...SERVICE_OPTIONS.filter((option) => option !== resolvedInitial)]
                    .filter((option, idx, arr) => arr.indexOf(option) === idx)
                    .map((svc) => (
                      <option key={svc} value={svc}>
                        {svc}
                      </option>
                    ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-medium uppercase tracking-widest text-[#888888] mb-1.5">
                    Full name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-[#EFEFEF] rounded-lg text-sm text-[#111111] focus:outline-none focus:border-[#111111] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium uppercase tracking-widest text-[#888888] mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-[#EFEFEF] rounded-lg text-sm text-[#111111] focus:outline-none focus:border-[#111111] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-medium uppercase tracking-widest text-[#888888] mb-1.5">
                    Company
                  </label>
                  <input
                    type="text"
                    placeholder="Optional"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 border border-[#EFEFEF] rounded-lg text-sm text-[#111111] focus:outline-none focus:border-[#111111] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium uppercase tracking-widest text-[#888888] mb-1.5">
                    Budget
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full px-4 py-3 border border-[#EFEFEF] rounded-lg text-sm text-[#111111] bg-white focus:outline-none focus:border-[#111111] transition-colors"
                  >
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-medium uppercase tracking-widest text-[#888888] mb-2">
                  Timeline
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {timeframeOptions.map((time) => (
                    <button
                      type="button"
                      key={time}
                      onClick={() => setFormData({ ...formData, timeframe: time })}
                      className={`py-2 px-1 text-[11px] font-medium border rounded-lg text-center transition-all cursor-pointer ${
                        formData.timeframe === time
                          ? 'border-[#111111] bg-[#111111] text-white'
                          : 'border-[#EFEFEF] text-[#666666] hover:border-[#111111]'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-medium uppercase tracking-widest text-[#888888] mb-1.5">
                  Project details *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about the work you need."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full px-4 py-3 border border-[#EFEFEF] rounded-lg text-sm text-[#111111] focus:outline-none focus:border-[#111111] transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#111111] text-white font-semibold text-xs tracking-wider uppercase hover:bg-[#333333] transition-all disabled:opacity-50 cursor-pointer"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send inquiry'}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
