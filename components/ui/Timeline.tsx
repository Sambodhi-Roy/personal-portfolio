"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { ExperienceCard, ExperienceCardMobile } from "./ExperienceCard";

interface TimelineEntry {
  title: string;
  subtitle: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-transparent font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-10 md:py-16 px-4 md:px-8 lg:px-10">
        <h1 className="heading">
          An Overview of my <span className="text-purple">Work Experience</span>
        </h1>
      </div>

      {/* Desktop Timeline */}
      <div ref={ref} className="hidden md:block relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`flex justify-center gap-10 ${
                index === 0 ? "pt-10" : "pt-40"
              }`}
            >
              {/* Left side content */}
              <div className={`w-5/12 ${isLeft ? "pr-8" : ""}`}>
                {isLeft && (
                  <ExperienceCard
                    title={item.title}
                    subtitle={item.subtitle}
                    content={item.content}
                    isLeft={true}
                    index={index}
                  />
                )}
              </div>

              {/* Center timeline dot */}
              <div className="sticky flex flex-col items-center top-40 self-start z-40">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/50"
                >
                  <div className="h-4 w-4 rounded-full bg-white dark:bg-slate-900" />
                </motion.div>
              </div>

              {/* Right side content */}
              <div className={`w-5/12 ${!isLeft ? "pl-8" : ""}`}>
                {!isLeft && (
                  <ExperienceCard
                    title={item.title}
                    subtitle={item.subtitle}
                    content={item.content}
                    isLeft={false}
                    index={index}
                  />
                )}
              </div>
            </div>
          );
        })}

        {/* Vertical line */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-1/2 -translate-x-1/2 top-10 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>

      {/* Mobile - Cards Only */}
      <div className="md:hidden flex flex-col gap-6 max-w-7xl mx-auto px-4 pb-20">
        {data.map((item, index) => (
          <ExperienceCardMobile
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            content={item.content}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};