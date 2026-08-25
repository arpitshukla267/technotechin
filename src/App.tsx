import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CompanyStatement } from './components/CompanyStatement';
import { TimelineSection } from './components/TimelineSection';
import { ServicesSection } from './components/ServicesSection';
import { VisualBreak } from './components/VisualBreak';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { CustomCursor } from './components/ui/CustomCursor';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ContactPage } from './pages/ContactPage';

function getPageFromPath(pathname: string): string {
  const clean = pathname.replace(/\/+$/, '') || '/';
  if (clean === '/') return 'home';

  const segments = clean.slice(1).split('/').filter(Boolean);
  const first = (segments[0] || '').toLowerCase();

  if (first === 'about') return 'about';
  if (first === 'contact') return 'contact';
  if (first === 'services') {
    if (segments[1]) return `services/${segments[1]}`;
    return 'services';
  }
  return 'home';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>(() =>
    typeof window !== 'undefined' ? getPageFromPath(window.location.pathname) : 'home'
  );
  const [selectedContactService, setSelectedContactService] = useState('7 layer design ($300.00)');

  const syncFromLocation = useCallback(() => {
    setCurrentPage(getPageFromPath(window.location.pathname));
  }, []);

  useEffect(() => {
    const rawHash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
    if (rawHash) {
      const nextPath = rawHash.startsWith('/') ? rawHash : `/${rawHash}`;
      window.history.replaceState({}, '', nextPath);
    }

    syncFromLocation();
    window.addEventListener('popstate', syncFromLocation);
    return () => window.removeEventListener('popstate', syncFromLocation);
  }, [syncFromLocation]);

  const navigate = (path: string) => {
    const normalized = path.startsWith('/') ? path : `/${path}`;
    if (window.location.pathname !== normalized) {
      window.history.pushState({}, '', normalized);
    }
    setCurrentPage(getPageFromPath(normalized));
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const navigateToHome = () => {
    navigate('/');
  };

  const navigateToService = (serviceId: string) => {
    if (serviceId === 'home') {
      navigate('/');
      return;
    }
    if (serviceId === 'about' || serviceId === 'contact' || serviceId === 'services') {
      navigate(`/${serviceId}`);
      return;
    }
    navigate(`/services/${serviceId}`);
  };

  const handleOpenContact = (serviceName?: string) => {
    if (serviceName) {
      setSelectedContactService(serviceName);
    }
    navigate('/contact');
  };

  const handleExploreServices = () => {
    navigate('/services');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-[#111111] dark:text-[#f5f5f5] flex flex-col selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black relative transition-colors duration-300">
      <CustomCursor />
      <ScrollProgress />

      <Navbar
        currentPage={currentPage}
        onNavigateHome={navigateToHome}
        onNavigateService={navigateToService}
        onOpenContact={handleOpenContact}
      />

      <main className="flex-1">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home-page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              <Hero
                onOpenContact={() => handleOpenContact('General Project')}
                onExploreServices={handleExploreServices}
              />
              <CompanyStatement />
              <TimelineSection />
              <ServicesSection
                onNavigateService={navigateToService}
                onOpenContact={handleOpenContact}
              />
              <VisualBreak />
              <TestimonialsSection />
              <CtaSection onOpenContact={() => handleOpenContact('New Project Inquiry')} />
            </motion.div>
          )}

          {currentPage === 'about' && (
            <motion.div
              key="about-page"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <AboutPage
                onNavigateHome={navigateToHome}
                onOpenContact={handleOpenContact}
              />
            </motion.div>
          )}

          {currentPage === 'services' && (
            <motion.div
              key="services-page"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <ServicesPage
                onOpenContact={handleOpenContact}
                onNavigateService={navigateToService}
              />
            </motion.div>
          )}

          {currentPage === 'contact' && (
            <motion.div
              key="contact-page"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <ContactPage
                onNavigateHome={navigateToHome}
                initialService={selectedContactService}
              />
            </motion.div>
          )}

          {currentPage.startsWith('services/') && (
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <ServiceDetailPage
                serviceId={currentPage.replace('services/', '')}
                onNavigateHome={navigateToHome}
                onNavigateService={navigateToService}
                onOpenContact={handleOpenContact}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer
        onOpenContact={handleOpenContact}
        onNavigateService={navigateToService}
      />
    </div>
  );
}
