import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA, STUDIO_CONTACT } from '../data/content';

interface FooterProps {
  onOpenContact: (serviceName?: string) => void;
  onNavigateService: (serviceId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact, onNavigateService }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="w-full bg-[#111111] text-white border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-[#333333] pb-12 gap-8">
          <div>
            <span className="text-xl font-semibold tracking-tight text-white">
              Techno Techin
            </span>
            <p className="text-[#888888] text-sm max-w-sm font-normal leading-relaxed mt-4">
              An independent digital technology studio. We engineer web platforms, layered architectures, and network solutions.
            </p>
          </div>
          <button
            onClick={() => onOpenContact()}
            className="bg-white text-[#111111] px-8 md:px-10 py-3.5 md:py-4 text-xs font-semibold uppercase tracking-widest hover:bg-[#F0F0F0] transition-colors cursor-pointer"
          >
            Start a Project
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-b border-[#222222]">
          <div className="md:col-span-5 space-y-4">
            <h4 className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#666666]">
              Services
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => {
                      onNavigateService(service.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-xs text-neutral-300 hover:text-white transition-colors text-left cursor-pointer flex items-center gap-1.5"
                  >
                    <span>{service.number} — {service.title}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#666666]" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#666666]">
              Address
            </h4>
            <address className="text-xs text-neutral-300 leading-relaxed not-italic">
              {STUDIO_CONTACT.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>

          <div className="md:col-span-4 space-y-4">
            <h4 className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#666666]">
              Inquiries
            </h4>
            <p className="text-xs text-neutral-300">
              <a
                href={`mailto:${STUDIO_CONTACT.email}`}
                className="hover:text-white font-mono transition-colors underline decoration-neutral-700 underline-offset-4"
              >
                {STUDIO_CONTACT.email}
              </a>
            </p>
            <button
              onClick={() => onNavigateService('services')}
              className="text-xs text-[#888888] hover:text-white transition-colors text-left cursor-pointer"
            >
              View all services →
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-[11px] font-medium uppercase tracking-[0.2em] text-[#666666] gap-4">
          <div>© 2026 TECHNO TECHIN. ALL RIGHTS RESERVED.</div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenContact()}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Client Inquiries
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
