import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import { SERVICES_DATA } from '../data/content';

interface ServicesPageProps {
  onOpenContact: (preselectedService?: string) => void;
  onNavigateService: (serviceId: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onOpenContact,
  onNavigateService,
}) => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-[#111111] dark:text-[#f5f5f5] pt-28 pb-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-14">
        <div className="max-w-2xl space-y-4">
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#888888]">
            Studio catalog
          </span>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight">
            Services
          </h1>
          <p className="text-base md:text-lg text-[#666666] leading-relaxed font-normal">
            Seven focused offerings with clear pricing. Choose a standard layout
            or add API integration where available.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, idx) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.04 * idx }}
              className="border border-[#EFEFEF] dark:border-[#2a2a2a] rounded-2xl p-6 flex flex-col bg-white dark:bg-[#111111] hover:border-[#D4D4D8] dark:hover:border-[#444444] transition-colors duration-300"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <span className="text-[10px] font-mono tracking-widest text-[#999999] uppercase">
                  {service.number}
                </span>
                {!service.hasVariants && (
                  <span className="text-sm font-mono font-semibold text-[#111111]">
                    {service.price}
                  </span>
                )}
              </div>

              <h2 className="text-xl font-medium tracking-tight text-[#111111]">
                {service.title}
              </h2>
              <p className="mt-2 text-sm text-[#666666] leading-relaxed font-normal">
                {service.description}
              </p>

              {service.hasVariants && service.variants ? (
                <div className="mt-6 space-y-3 flex-1">
                  {service.variants.map((variant) => (
                    <div
                      key={variant.name}
                      className="border border-[#F0F0F0] rounded-xl p-4"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-sm font-medium text-[#111111] leading-snug">
                          {variant.name}
                        </p>
                        <span className="text-sm font-mono font-semibold text-[#111111] shrink-0">
                          {variant.price}
                        </span>
                      </div>
                      <p className="mt-1.5 text-xs text-[#777777] leading-relaxed">
                        {variant.desc}
                      </p>
                      <button
                        type="button"
                        onClick={() => onOpenContact(`${variant.name} (${variant.price})`)}
                        className="mt-3 w-full py-2 text-[11px] font-medium tracking-widest uppercase bg-[#111111] text-white hover:bg-[#333333] transition-colors cursor-pointer"
                      >
                        Select
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-6 space-y-2 flex-1">
                  {service.detailedScope.slice(0, 3).map((scope) => (
                    <div key={scope} className="flex items-start gap-2.5">
                      <Check className="w-3.5 h-3.5 text-[#111111] shrink-0 mt-0.5" />
                      <span className="text-xs text-[#666666] leading-relaxed">{scope}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-6 pt-4 border-t border-[#F5F5F5] flex items-center gap-3">
                {!service.hasVariants && (
                  <button
                    type="button"
                    onClick={() => onOpenContact(`${service.title} (${service.price})`)}
                    className="flex-1 py-2.5 bg-[#111111] text-white text-[11px] font-semibold tracking-widest uppercase hover:bg-[#333333] transition-colors cursor-pointer"
                  >
                    Order
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => onNavigateService(service.id)}
                  className={`inline-flex items-center justify-center gap-1.5 py-2.5 text-[11px] font-semibold tracking-widest uppercase text-[#555555] hover:text-[#111111] transition-colors cursor-pointer ${
                    service.hasVariants ? 'w-full border border-[#EFEFEF]' : 'px-3'
                  }`}
                >
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};
