import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { SquareCrossMark } from "./ui/TechnicalDoodles";
import statementGraphicImg from "../../assets/statement_graphic.jpg";

interface WordRevealProps {
  word: string;
  idx: number;
  total: number;
  progress: any;
  rangeStart?: number;
  rangeEnd?: number;
  className?: string;
}

const ScrollWordReveal: React.FC<WordRevealProps> = ({
  word,
  idx,
  total,
  progress,
  rangeStart = 0,
  rangeEnd = 0.75,
  className = "",
}) => {
  const span = rangeEnd - rangeStart;
  const start = rangeStart + (idx / total) * span;
  const end = start + (1 / total) * span * 1.2;

  const opacity = useTransform(progress, [start, end], [0.18, 1]);
  const y = useTransform(progress, [start, end], [6, 0]);

  return (
    <motion.span
      style={{
        opacity,
        y,
        display: "inline-block",
      }}
      className={`mr-[0.28em] last:mr-0 transition-colors duration-150 font-normal ${className}`}
    >
      {word}
    </motion.span>
  );
};

const RevealParagraph: React.FC<{
  text: string;
  progress: any;
  rangeStart: number;
  rangeEnd: number;
  className?: string;
}> = ({ text, progress, rangeStart, rangeEnd, className }) => {
  const words = text.split(" ");
  return (
    <p className={className}>
      {words.map((word, idx) => (
        <ScrollWordReveal
          key={idx}
          word={word}
          idx={idx}
          total={words.length}
          progress={progress}
          rangeStart={rangeStart}
          rangeEnd={rangeEnd}
        />
      ))}
    </p>
  );
};

export const CompanyStatement: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const statementWords = [
    "We",
    "engineer",
    "digital",
    "solutions",
    "with",
    "precision,",
    "creativity",
    "and",
    "purpose",
    "—",
    "technology",
    "that",
    "drives",
    "real",
    "business",
    "results.",
  ];

  const paragraph1 =
    "At Techno Techin, we believe the best technology disappears into the experience. We build digital products that are fast, intuitive, and engineered for lasting impact — not temporary trends.";

  const paragraph2 =
    "Every line of code, every pixel of design, and every strategic decision is made with your business objectives at the center. We don't just build websites — we craft digital ecosystems that convert visitors into customers and complexity into clarity.";

  const paragraph3 =
    "This is technology treated as craft — every decision made with scale, performance, and your long-term success in mind.";

  return (
    <section
      ref={containerRef}
      id="company-statement-section"
      className="w-full bg-white dark:bg-[#0a0a0a] py-24 md:py-32 border-b border-[#F0F0F0] dark:border-[#222222] overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Editorial text column */}
          <div className="lg:col-span-7 space-y-10">
            {/* Top Line Accent and Technical Mark */}
            <div className="flex items-center justify-between">
              <div className="w-16 h-[1px] bg-[#111111] dark:bg-white" />
              <SquareCrossMark />
            </div>

            {/* Main Editorial Statement */}
            <h2
              id="company-core-statement"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[42px] font-normal leading-[1.25] tracking-tight text-balance text-left"
            >
              {statementWords.map((word, idx) => (
                <ScrollWordReveal
                  key={idx}
                  word={word}
                  idx={idx}
                  total={statementWords.length}
                  progress={smoothProgress}
                  rangeStart={0.15}
                  rangeEnd={0.3}
                  className="text-[#111111] dark:text-[#f5f5f5]"
                />
              ))}
            </h2>

            {/* Commentary paragraph fields */}
            <div className="pt-10 border-t border-[#F0F0F0] dark:border-[#222222] space-y-5">
              <RevealParagraph
                text={paragraph1}
                progress={smoothProgress}
                rangeStart={0.3}
                rangeEnd={0.4}
                className="text-base sm:text-lg text-[#333333] dark:text-[#e5e5e5] font-medium leading-relaxed text-left"
              />
              <RevealParagraph
                text={paragraph2}
                progress={smoothProgress}
                rangeStart={0.4}
                rangeEnd={0.55}
                className="text-sm sm:text-base text-[#666666] dark:text-[#cccccc] font-normal leading-relaxed text-left"
              />
              <RevealParagraph
                text={paragraph3}
                progress={smoothProgress}
                rangeStart={0.55}
                rangeEnd={0.7}
                className="text-sm sm:text-base text-[#888888] dark:text-[#aaaaaa] font-normal leading-relaxed text-left"
              />
            </div>
          </div>

          {/* Graphic Image Column */}
          <div className="lg:col-span-5 relative rounded-2xl border border-neutral-200 dark:border-[#2a2a2a] shadow-xl overflow-hidden mt-8 lg:mt-0">
            <img
              src={statementGraphicImg}
              alt="Techno Techin Architecture Blueprint"
              className="w-full h-auto object-cover hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/5 via-transparent to-transparent pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};
