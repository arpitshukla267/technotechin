import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { STUDIO_CONTACT } from '../data/content';
import { ThemeToggle } from './ui/ThemeToggle';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  currentPage: string;
  onNavigateHome: () => void;
  onNavigateService: (serviceId: string) => void;
  onOpenContact: (preselectedService?: string) => void;
}

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
] as const;

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigateHome,
  onNavigateService,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  const isHomePage = currentPage === 'home';
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (id: string) => {
    if (id === 'home') return currentPage === 'home';
    if (id === 'services') return currentPage === 'services' || currentPage.startsWith('services/');
    return currentPage === id;
  };

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (sectionId === 'home') {
      onNavigateHome();
      return;
    }
    onNavigateService(sectionId);
  };

  const navOnHero = isHomePage && !isScrolled;
  const navThemeDark = navOnHero && !isDark;

  const linkClass = (id: string) => {
    const active = isActive(id);
    if (navThemeDark) {
      return active ? 'text-white' : 'text-white/75 hover:text-white';
    }
    return active
      ? 'text-[#111111] dark:text-white'
      : 'text-[#666666] dark:text-[#999999] hover:text-black dark:hover:text-white';
  };

  const headerBg =
    isScrolled || !isHomePage
      ? 'bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#F0F0F0] dark:border-[#222222] py-4'
      : 'bg-transparent py-5 md:py-6';

  return (
    <>
      <header id="main-navbar" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-12">
          <button
            onClick={() => {
              onNavigateHome();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            id="brand-logo-link"
            className="group flex items-center gap-3 focus:outline-none cursor-pointer text-left"
          >
            <span
              className={`text-lg font-semibold tracking-tight transition-colors duration-300 ${
                navThemeDark ? 'text-white' : 'text-[#111111] dark:text-white'
              }`}
            >
              Techno Techin
            </span>
          </button>

          <nav id="desktop-nav-menu" className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative text-[13px] font-medium uppercase tracking-widest transition-colors duration-200 cursor-pointer ${linkClass(item.id)}`}
              >
                {item.label}
                {isActive(item.id) && (
                  <span
                    className={`absolute -bottom-1.5 left-0 right-0 h-px ${
                      navThemeDark ? 'bg-white' : 'bg-[#111111] dark:bg-white'
                    }`}
                  />
                )}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle variant={navThemeDark ? 'on-dark' : 'default'} />
            <button
              id="navbar-cta-button"
              onClick={() => handleNavClick('contact')}
              className={`group flex items-center gap-2 px-6 py-2.5 text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                navThemeDark
                  ? 'bg-white text-[#111111] hover:bg-[#F0F0F0]'
                  : 'bg-[#111111] dark:bg-white text-white dark:text-[#111111] hover:bg-[#333333] dark:hover:bg-[#F0F0F0]'
              }`}
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle variant={navThemeDark ? 'on-dark' : 'default'} />
            <button
              id="mobile-menu-toggle-button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className={`p-2 transition-colors duration-200 cursor-pointer ${
                navThemeDark ? 'text-white' : 'text-[#111111] dark:text-white'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-white dark:bg-[#0a0a0a] pt-24 px-6 pb-12 flex flex-col justify-between md:hidden"
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-2xl font-medium py-3 border-b border-[#F0F0F0] dark:border-[#222222] text-left cursor-pointer transition-colors ${
                    isActive(item.id)
                      ? 'text-[#111111] dark:text-white'
                      : 'text-[#111111] dark:text-[#cccccc] hover:text-[#666666]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="space-y-6 pt-6">
              <button
                id="mobile-menu-cta-button"
                onClick={() => handleNavClick('contact')}
                className="w-full flex items-center justify-center gap-2 py-4 bg-[#111111] dark:bg-white text-white dark:text-[#111111] font-medium text-sm tracking-wider uppercase hover:opacity-90 transition-colors cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="text-xs text-[#888888] space-y-1">
                <p>Techno Techin — Digital Technology Studio</p>
                <p className="font-mono">{STUDIO_CONTACT.email}</p>
                <p className="leading-relaxed pt-1">{STUDIO_CONTACT.addressLines[0]}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
