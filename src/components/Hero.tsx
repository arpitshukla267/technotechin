import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { HeroCircuitTrace } from "./ui/TechnicalDoodles";
import heroBgImg from "../../assets/hero_bg.jpg";

interface HeroProps {
  onOpenContact: () => void;
  onExploreServices: () => void;
}

/* ── Animated SVG Graphic Elements ── */

const FloatingHexGrid: React.FC = () => (
  <svg
    className="absolute top-10 right-8 md:right-16 w-48 md:w-72 h-48 md:h-72 opacity-[0.12]"
    viewBox="0 0 300 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Hexagon 1 */}
    <motion.polygon
      points="150,30 195,55 195,105 150,130 105,105 105,55"
      stroke="white"
      strokeWidth="1"
      fill="none"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
    />
    {/* Hexagon 2 */}
    <motion.polygon
      points="220,100 265,125 265,175 220,200 175,175 175,125"
      stroke="white"
      strokeWidth="0.8"
      fill="none"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
    />
    {/* Hexagon 3 */}
    <motion.polygon
      points="90,160 135,185 135,235 90,260 45,235 45,185"
      stroke="white"
      strokeWidth="0.6"
      fill="none"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, delay: 0.9, ease: "easeOut" }}
    />
    {/* Connection lines between hexagons */}
    <motion.line
      x1="150" y1="130" x2="175" y2="125"
      stroke="white"
      strokeWidth="0.5"
      strokeDasharray="4 4"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.2, delay: 1.2 }}
    />
    <motion.line
      x1="105" y1="105" x2="90" y2="160"
      stroke="white"
      strokeWidth="0.5"
      strokeDasharray="4 4"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.2, delay: 1.4 }}
    />
    {/* Small node dots */}
    <motion.circle cx="150" cy="130" r="3" fill="white"
      initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0.5, 1] }}
      transition={{ duration: 2, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
    />
    <motion.circle cx="220" cy="200" r="2.5" fill="white"
      initial={{ opacity: 0 }} animate={{ opacity: [0, 0.8, 0.4, 0.8] }}
      transition={{ duration: 2.5, delay: 1.8, repeat: Infinity, repeatType: "reverse" }}
    />
    <motion.circle cx="90" cy="160" r="2" fill="white"
      initial={{ opacity: 0 }} animate={{ opacity: [0, 0.7, 0.3, 0.7] }}
      transition={{ duration: 3, delay: 2, repeat: Infinity, repeatType: "reverse" }}
    />
  </svg>
);

const AnimatedCodeBrackets: React.FC = () => (
  <motion.div
    className="absolute bottom-20 left-6 md:left-16 opacity-[0.08] select-none pointer-events-none"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 0.08, x: 0 }}
    transition={{ duration: 1.2, delay: 0.8 }}
  >
    <svg width="180" height="120" viewBox="0 0 180 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Opening bracket < */}
      <motion.path
        d="M50 20 L20 60 L50 100"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      />
      {/* Slash / */}
      <motion.path
        d="M80 15 L100 105"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      />
      {/* Closing bracket > */}
      <motion.path
        d="M130 20 L160 60 L130 100"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 2 }}
      />
    </svg>
  </motion.div>
);

const CircuitNodes: React.FC = () => (
  <svg
    className="absolute top-1/3 left-4 md:left-12 w-32 md:w-44 h-64 md:h-80 opacity-[0.1]"
    viewBox="0 0 160 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Vertical circuit line */}
    <motion.line
      x1="40" y1="20" x2="40" y2="300"
      stroke="white"
      strokeWidth="0.8"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, delay: 0.5 }}
    />
    {/* Branch lines */}
    <motion.path
      d="M40 80 L100 80 L100 140"
      stroke="white" strokeWidth="0.8" fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.2, delay: 1.2 }}
    />
    <motion.path
      d="M40 200 L120 200 L120 240 L80 240"
      stroke="white" strokeWidth="0.8" fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.2, delay: 1.6 }}
    />
    {/* Node dots with pulse */}
    {[
      { cx: 40, cy: 80, delay: 1.4 },
      { cx: 100, cy: 140, delay: 1.8 },
      { cx: 40, cy: 200, delay: 2.0 },
      { cx: 80, cy: 240, delay: 2.2 },
      { cx: 40, cy: 20, delay: 1.0 },
      { cx: 40, cy: 300, delay: 2.5 },
    ].map((node, i) => (
      <motion.circle
        key={i}
        cx={node.cx}
        cy={node.cy}
        r="3"
        fill="white"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: node.delay }}
      />
    ))}
  </svg>
);

const RotatingGear: React.FC = () => (
  <motion.div
    className="absolute bottom-16 right-6 md:right-24 opacity-[0.06] pointer-events-none"
    animate={{ rotate: 360 }}
    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
  >
    <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer gear ring */}
      <circle cx="70" cy="70" r="50" stroke="white" strokeWidth="1.5" fill="none" />
      <circle cx="70" cy="70" r="35" stroke="white" strokeWidth="1" fill="none" />
      <circle cx="70" cy="70" r="8" stroke="white" strokeWidth="1.5" fill="none" />
      {/* Gear teeth */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const x1 = 70 + 48 * Math.cos(angle);
        const y1 = 70 + 48 * Math.sin(angle);
        const x2 = 70 + 58 * Math.cos(angle);
        const y2 = 70 + 58 * Math.sin(angle);
        return (
          <line
            key={i}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="white"
            strokeWidth="2"
          />
        );
      })}
    </svg>
  </motion.div>
);

export const Hero: React.FC<HeroProps> = ({
  onOpenContact,
  onExploreServices,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Locomotive Parallax Transformations
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="hero-section"
      className="relative min-h-[92vh] md:min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0A0A0C]"
    >
      {/* Dark Abstract Grid & Radial Glow Background (No Stock Photos) */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      >
        {/* Real background image with opacity overlay */}
        <div className="absolute inset-0 z-0 opacity-[0.9] mix-blend-screen pointer-events-none">
          <img src="/hero-bg.png" alt="" className="w-full h-full object-cover" />
        </div>

        {/* Subtle Ambient Radial Lighting in Center */}
        {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] md:w-[900px] h-[500px] md:h-[650px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800/25 via-neutral-950/40 to-transparent blur-3xl pointer-events-none" /> */}

        {/* Technical Animated Circuit-Trace SVG Doodle */}
        <HeroCircuitTrace />

        {/* ── New SVG Graphics ── */}
        <FloatingHexGrid />
        <CircuitNodes />
        <AnimatedCodeBrackets />
        <RotatingGear />

        {/* Atmospheric Edge Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-[#0A0A0C]/80" />
      </motion.div>

      {/* Hero Content Container with Staggered Entrance and Scroll Parallax */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 pt-32 pb-20 text-center flex flex-col items-center"
      >
        {/* Headline with cinematic entrance */}
        <motion.h1
          id="hero-headline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-medium text-white tracking-tight leading-[1.08] max-w-4xl"
        >
          Technology solutions engineered to accelerate your growth.
        </motion.h1>

        {/* Supporting Paragraph */}
        <motion.p
          id="hero-subtext"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-neutral-300 font-normal leading-relaxed max-w-xl text-balance"
        >
          We build high-performance websites, craft striking visual identities,
          and deliver digital solutions that give your business a competitive edge.
        </motion.p>

        {/* Action Button Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-5 sm:gap-8 w-full sm:w-auto"
        >
          {/* Primary CTA */}
          <button
            id="hero-primary-cta"
            onClick={onOpenContact}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#111111] text-sm font-medium tracking-wide transition-all duration-200 hover:bg-[#F0F0F0] active:scale-[0.99] cursor-pointer"
          >
            <span>Let's Work Together</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>

          {/* Secondary CTA */}
          <button
            id="hero-secondary-cta"
            onClick={onExploreServices}
            className="group text-sm font-medium text-white border-b border-white/80 hover:border-white pb-1 transition-all duration-200 cursor-pointer inline-flex items-center gap-1.5"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </motion.div>
      </motion.div>

      {/* Minimalist Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-white/50 hover:text-white/80 cursor-pointer transition-colors"
        onClick={onExploreServices}
      >
        <span className="text-[10px] font-medium tracking-[0.2em] uppercase font-mono">
          Scroll
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
};
