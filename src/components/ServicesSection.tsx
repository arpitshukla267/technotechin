import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { SERVICES_DATA } from "../data/content";

interface ServicesSectionProps {
  onNavigateService: (serviceId: string) => void;
  onOpenContact: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onNavigateService,
  onOpenContact,
}) => {
  return (
    <section
      id="services"
      className="w-full bg-white dark:bg-[#0a0a0a] py-24 md:py-32 border-b border-[#F0F0F0] dark:border-[#222222] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-14 md:mb-16">
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#888888]">
            Core practice areas
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-medium text-[#111111] dark:text-white tracking-tight leading-tight">
            Services built around your goals.
          </h2>
          <p className="mt-4 text-base text-[#666666] dark:text-[#999999] font-normal leading-relaxed">
            Seven focused offerings — from layered architecture and website design
            to cleanup and secure network setup.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES_DATA.map((service, idx) => (
            <motion.button
              key={service.id}
              id={`service-card-${service.id}`}
              type="button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: 0.05 * idx,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={() => onNavigateService(service.id)}
              className="text-left rounded-xl border border-[#EFEFEF] dark:border-[#2a2a2a] p-6 hover:border-[#D4D4D8] dark:hover:border-[#444444] hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300 bg-white dark:bg-[#111111] flex flex-col cursor-pointer"
            >
              <div className="flex items-start justify-between gap-3 mb-5">
                <span className="text-[10px] font-mono tracking-widest text-[#999999] uppercase">
                  {service.number}
                </span>
                {service.hasVariants && service.variants ? (
                  <span className="text-xs font-mono font-semibold text-[#111111]">
                    {service.variants[0].price} / {service.variants[1].price}
                  </span>
                ) : (
                  <span className="text-xs font-mono font-semibold text-[#111111]">
                    {service.price}
                  </span>
                )}
              </div>

              <h3 className="text-lg font-medium text-[#111111] dark:text-white tracking-tight mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-[#666666] dark:text-[#999999] leading-relaxed font-normal flex-1">
                {service.description}
              </p>

              <div className="mt-6 pt-4 border-t border-[#F5F5F5] flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-widest text-[#888888]">
                  View details
                </span>
                <ArrowRight className="w-4 h-4 text-[#111111]" />
              </div>
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10 p-6 md:p-8 bg-[#FAFAFA] dark:bg-[#111111] border border-[#F0F0F0] dark:border-[#2a2a2a] rounded-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
        >
          <div>
            <p className="text-sm font-medium text-[#111111]">
              Need an integrated multi-discipline engagement?
            </p>
            <p className="text-xs text-[#666666] mt-1">
              We combine layered architecture, website design, cleanup, and network
              services into a single scoped delivery.
            </p>
          </div>
          <button
            id="combined-services-inquiry-btn"
            onClick={() => onOpenContact("Combined Digital Suite")}
            className="whitespace-nowrap px-6 py-3 bg-[#111111] text-white text-xs font-medium tracking-widest uppercase rounded-full hover:bg-[#333333] transition-colors cursor-pointer"
          >
            Inquire Combined Scope
          </button>
        </motion.div>
      </div>
    </section>
  );
};
