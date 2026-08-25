import React from 'react';
import {
  ArrowRight,
  Code2,
  Cpu,
  Sparkles,
  Shield,
  Zap,
  Users,
  MapPin,
  Mail,
} from 'lucide-react';
import aboutTeamImg from '../../assets/about_team.jpg';
import {
  ABOUT_VALUES,
  ABOUT_PROCESS,
  ABOUT_STATS,
  STUDIO_CONTACT,
} from '../data/content';

interface AboutPageProps {
  onNavigateHome: () => void;
  onOpenContact: (preselectedService?: string) => void;
}

const VALUE_ICONS: Record<string, React.ReactNode> = {
  code: <Code2 className="w-5 h-5" />,
  cpu: <Cpu className="w-5 h-5" />,
  sparkles: <Sparkles className="w-5 h-5" />,
  shield: <Shield className="w-5 h-5" />,
  zap: <Zap className="w-5 h-5" />,
  users: <Users className="w-5 h-5" />,
};

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenContact }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-[#111111] dark:text-[#f5f5f5] pt-28 pb-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24 md:space-y-28">
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#888888] dark:text-[#999999]">
              Who we are
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
              We design and engineer{' '}
              <span className="underline decoration-[#111111] dark:decoration-white underline-offset-8">
                high-impact
              </span>{' '}
              digital solutions.
            </h1>
            <p className="text-lg text-[#666666] dark:text-[#aaaaaa] leading-relaxed font-normal">
              Techno Techin is an independent digital technology studio based in Jhansi,
              Uttar Pradesh. We build fast web platforms, layered API architectures, secure
              network setups, and polished single-page experiences for clients who value
              precision over noise.
            </p>
            <p className="text-base text-[#666666] dark:text-[#999999] leading-relaxed font-normal">
              Whether you need a $100 single website design, a full 7 layer stack with API
              integration, or a codebase cleanup — we scope every project clearly, price it
              transparently, and deliver with engineering discipline.
            </p>
          </div>

          <div className="lg:col-span-5 relative group overflow-hidden rounded-2xl border border-[#EFEFEF] dark:border-[#2a2a2a] shadow-xl">
            <img
              src={aboutTeamImg}
              alt="Techno Techin studio workspace"
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {ABOUT_STATS.map((stat) => (
            <div
              key={stat.label}
              className="border border-[#EFEFEF] dark:border-[#2a2a2a] rounded-xl p-6 text-center"
            >
              <p className="text-3xl md:text-4xl font-medium tracking-tight">{stat.value}</p>
              <p className="mt-2 text-xs text-[#888888] dark:text-[#999999] uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-[#F0F0F0] dark:border-[#222222] pt-16">
          <div className="space-y-4">
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#888888]">
              Our mission
            </span>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight leading-tight">
              Technology that works quietly and delivers loudly.
            </h2>
          </div>
          <div className="space-y-4 text-[#666666] dark:text-[#aaaaaa] leading-relaxed">
            <p>
              We believe the best digital products disappear into the experience. Users should
              not notice the architecture — they should notice the speed, clarity, and reliability.
            </p>
            <p>
              From Sipri Bazar to clients worldwide, Techno Techin brings the same standard to
              every engagement: listen first, architect thoughtfully, build cleanly, and ship
              something your business can depend on for years.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="space-y-10">
          <div className="max-w-2xl space-y-3">
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#888888]">
              What we stand for
            </span>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
              Principles behind every project.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ABOUT_VALUES.map((value) => (
              <div
                key={value.title}
                className="border border-[#EFEFEF] dark:border-[#2a2a2a] rounded-xl p-6 space-y-4 hover:border-[#D4D4D8] dark:hover:border-[#444444] transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FAFAFA] dark:bg-[#1a1a1a] border border-[#EFEFEF] dark:border-[#333333] flex items-center justify-center text-[#111111] dark:text-white">
                  {VALUE_ICONS[value.icon]}
                </div>
                <h3 className="text-lg font-medium">{value.title}</h3>
                <p className="text-sm text-[#666666] dark:text-[#999999] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="border-t border-[#F0F0F0] dark:border-[#222222] pt-16 space-y-10">
          <div className="max-w-2xl space-y-3">
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#888888]">
              How we work
            </span>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
              A clear path from idea to launch.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ABOUT_PROCESS.map((item) => (
              <div key={item.step} className="space-y-3">
                <span className="text-[10px] font-mono tracking-widest text-[#888888]">
                  STEP {item.step}
                </span>
                <h3 className="text-lg font-medium">{item.title}</h3>
                <p className="text-sm text-[#666666] dark:text-[#999999] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border border-[#EFEFEF] dark:border-[#2a2a2a] rounded-2xl p-8 md:p-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#888888]">
              <MapPin className="w-4 h-4" />
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase">Studio location</span>
            </div>
            <h3 className="text-2xl font-medium">Based in Jhansi, serving clients globally.</h3>
            <address className="text-sm text-[#666666] dark:text-[#aaaaaa] leading-relaxed not-italic">
              {STUDIO_CONTACT.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>
          <div className="space-y-4 lg:border-l lg:border-[#EFEFEF] dark:lg:border-[#2a2a2a] lg:pl-10">
            <div className="flex items-center gap-2 text-[#888888]">
              <Mail className="w-4 h-4" />
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase">Get in touch</span>
            </div>
            <p className="text-sm text-[#666666] dark:text-[#aaaaaa] leading-relaxed">
              Reach out for architecture consultations, payment integrations, website design,
              VPN setup, or a combined scope across multiple services.
            </p>
            <a
              href={`mailto:${STUDIO_CONTACT.email}`}
              className="inline-block font-mono text-sm hover:underline"
            >
              {STUDIO_CONTACT.email}
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 md:p-12 rounded-2xl bg-[#111111] dark:bg-[#161616] text-white flex flex-col md:flex-row items-center justify-between gap-8 border border-transparent dark:border-[#2a2a2a]">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-medium">Ready to discuss your project?</h3>
            <p className="text-sm text-neutral-400">
              Let's coordinate on API structures, custom layouts, or database connections.
            </p>
          </div>
          <button
            onClick={() => onOpenContact('Combined Digital Suite')}
            className="group whitespace-nowrap inline-flex items-center gap-2.5 px-6 py-3.5 bg-white text-black font-semibold text-xs tracking-wider uppercase rounded-xl hover:bg-neutral-200 transition-colors cursor-pointer"
          >
            <span>Initiate Consult</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
