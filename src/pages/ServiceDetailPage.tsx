import React from 'react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { SERVICES_DATA } from '../data/content';

interface ServiceDetailPageProps {
  serviceId: string;
  onNavigateHome: () => void;
  onNavigateService: (serviceId: string) => void;
  onOpenContact: (preselectedService?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  serviceId,
  onNavigateHome,
  onNavigateService,
  onOpenContact,
}) => {
  const service = SERVICES_DATA.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen bg-white text-[#111111] pt-28 pb-20 px-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-medium">Service not found</h1>
        <p className="text-[#666666] mt-2">The requested service does not exist in our catalog.</p>
        <button
          onClick={onNavigateHome}
          className="mt-6 px-6 py-3 bg-[#111111] text-white font-semibold text-xs tracking-wider uppercase hover:bg-[#333333] transition-colors cursor-pointer"
        >
          Return Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-[#111111] dark:text-[#f5f5f5] pt-28 pb-20 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-12">
        <button
          onClick={() => onNavigateService('services')}
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#888888] hover:text-[#111111] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Services</span>
        </button>

        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#888888]">
              {service.number} — {service.tagline}
            </span>
            {!service.hasVariants && (
              <span className="text-sm font-mono font-semibold text-[#111111]">
                {service.price}
              </span>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight">
            {service.title}
          </h1>
          <p className="text-[#666666] leading-relaxed max-w-2xl">
            {service.description}
          </p>
          {!service.hasVariants && (
            <button
              onClick={() => onOpenContact(`${service.title} (${service.price})`)}
              className="px-6 py-3 bg-[#111111] text-white font-semibold text-xs tracking-wider uppercase hover:bg-[#333333] transition-colors cursor-pointer"
            >
              Inquire Service
            </button>
          )}
        </div>

        {service.hasVariants && service.variants && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.variants.map((variant) => (
              <div key={variant.name} className="border border-[#EFEFEF] rounded-xl p-6 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-lg font-medium text-[#111111]">{variant.name}</h2>
                  <span className="text-sm font-mono font-semibold text-[#111111] shrink-0">
                    {variant.price}
                  </span>
                </div>
                <p className="text-sm text-[#666666] leading-relaxed">{variant.desc}</p>
                <button
                  onClick={() => onOpenContact(`${variant.name} (${variant.price})`)}
                  className="w-full py-2.5 bg-[#111111] text-white font-semibold text-xs tracking-wider uppercase hover:bg-[#333333] transition-colors cursor-pointer"
                >
                  Select this option
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="border-t border-[#F0F0F0] pt-10 space-y-6">
          <h2 className="text-xl font-medium">Scope</h2>
          <ul className="space-y-3">
            {service.detailedScope.map((scope) => (
              <li key={scope} className="flex items-start gap-3 text-sm text-[#555555]">
                <Check className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
                <span>{scope}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-[#F0F0F0] pt-10 space-y-4">
          <h2 className="text-xl font-medium">Deliverables</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.deliverables.map((item) => (
              <div key={item} className="border border-[#EFEFEF] rounded-lg px-4 py-3 text-sm text-[#333333]">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-[#F0F0F0] pt-8 flex justify-between items-center text-xs uppercase tracking-widest text-[#888888]">
          <span>{service.title}</span>
          <button
            onClick={() => onNavigateService('services')}
            className="hover:text-[#111111] transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>All services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
