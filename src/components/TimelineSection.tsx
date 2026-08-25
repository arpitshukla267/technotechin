import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { TIMELINE_QUALITIES } from "../data/content";

interface TimelineItemProps {
  quality: (typeof TIMELINE_QUALITIES)[0];
  arriveAt: number;
  scrollYProgress: ReturnType<typeof useSpring>;
  isEven: boolean;
}

const ProgressiveTimelineItem: React.FC<TimelineItemProps> = ({
  quality,
  arriveAt,
  scrollYProgress,
  isEven,
}) => {
  const revealEnd = Math.min(arriveAt + 0.06, 1);
  const nodeScale = useTransform(scrollYProgress, [arriveAt, revealEnd], [0.55, 1]);
  const nodeOpacity = useTransform(scrollYProgress, [arriveAt, revealEnd], [0.35, 1]);
  const nodeBg = useTransform(scrollYProgress, [arriveAt, revealEnd], ["#D1D5DB", "#111111"]);
  const cardOpacity = useTransform(scrollYProgress, [arriveAt, revealEnd], [0.2, 1]);
  const cardY = useTransform(scrollYProgress, [arriveAt, revealEnd], [20, 0]);

  return (
    <div
      id={`timeline-item-${quality.number}`}
      className={`relative flex flex-col md:flex-row items-start ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      <div
        className={`w-full md:w-1/2 pl-12 md:pl-0 ${
          isEven ? "md:pl-16 text-left" : "md:pr-16 md:text-right"
        }`}
      >
        <motion.div
          style={{ opacity: cardOpacity, y: cardY }}
          className="bg-white dark:bg-[#0a0a0a] border border-[#EEEEEE] dark:border-[#2a2a2a] rounded-xl p-7 md:p-8"
        >
          <h3 className="text-lg sm:text-xl font-medium text-[#111111] dark:text-white tracking-tight mb-2">
            {quality.number} — {quality.title}
          </h3>
          <p className="text-sm text-[#444444] font-medium leading-relaxed mb-2">
            {quality.description}
          </p>
          <p className="text-xs sm:text-sm text-[#777777] font-normal leading-relaxed">
            {quality.details}
          </p>
        </motion.div>
      </div>

      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-8 z-10 flex items-center justify-center">
        <motion.div
          style={{ scale: nodeScale, opacity: nodeOpacity }}
          className="w-4 h-4 bg-white rounded-full flex items-center justify-center ring-4 ring-[#FAFAFA]"
        >
          <motion.div style={{ backgroundColor: nodeBg }} className="w-2 h-2 rounded-full" />
        </motion.div>
      </div>

      <div className="hidden md:block md:w-1/2" />
    </div>
  );
};

export const TimelineSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const total = TIMELINE_QUALITIES.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 75%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <section
      ref={containerRef}
      id="approach"
      className="w-full bg-[#FAFAFA] dark:bg-[#111111] py-24 md:py-32 border-b border-[#F0F0F0] dark:border-[#222222] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-20 max-w-2xl">
          <motion.h2
            id="approach-section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-[40px] font-medium text-[#111111] tracking-tight leading-tight"
          >
            How we work.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-base sm:text-lg text-[#666666] font-normal leading-relaxed"
          >
            Five foundational qualities and standards that guide every phase of
            our collaboration.
          </motion.p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-8 bottom-8 w-px -translate-x-1/2">
            <div className="absolute inset-0 bg-[#E5E7EB]" />
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-[#111111] origin-top"
              style={{ scaleY: smoothProgress }}
            />
          </div>

          <div className="space-y-12 md:space-y-24">
            {TIMELINE_QUALITIES.map((quality, idx) => {
              const arriveAt = total === 1 ? 0 : idx / (total - 1);
              return (
                <ProgressiveTimelineItem
                  key={quality.id}
                  quality={quality}
                  isEven={idx % 2 === 0}
                  arriveAt={arriveAt}
                  scrollYProgress={smoothProgress}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
