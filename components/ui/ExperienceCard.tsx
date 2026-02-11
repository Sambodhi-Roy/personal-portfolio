import React from "react";
import { motion } from "motion/react";
import SpotlightCard from "../SpotlightCard";

interface ExperienceCardProps {
  title: string;
  subtitle: string;
  content: React.ReactNode;
  isLeft?: boolean;
  index: number;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  subtitle,
  content,
  isLeft = false,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <SpotlightCard 
        className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"
        spotlightColor="rgba(168, 85, 247, 0.15)"
      >
        <div className="flex flex-col gap-4">
          {/* Header row - Icon + Title/Subtitle */}
          <div className="flex gap-4">
            {/* Icon */}
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xl font-bold">
                {title.charAt(0)}
              </span>
            </div>
            
            {/* Title and Subtitle column */}
            <div className="flex flex-col flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-white">
                {title}
              </h3>
              <p className="text-neutral-400 text-xs md:text-sm font-normal">
                {subtitle}
              </p>
            </div>
          </div>
          
          {/* Body - Bullet points */}
          <div className="flex flex-col gap-2">
            {content}
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  );
};

// Mobile version
export const ExperienceCardMobile: React.FC<{
  title: string;
  subtitle: string;
  content: React.ReactNode;
  index: number;
}> = ({ title, subtitle, content, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <SpotlightCard 
        className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-slate-700/50"
        spotlightColor="rgba(168, 85, 247, 0.15)"
      >
        <div className="flex flex-col gap-3 items-center justify-center">
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
              <span className="text-white text-lg font-bold">
                {title.charAt(0)}
              </span>
            </div>
            
            <div className="flex flex-col flex-1">
              <h3 className="text-lg font-bold text-white">
                {title}
              </h3>
              <p className="text-neutral-400 text-xs font-normal">
                {subtitle}
              </p>
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            {content}
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  );
};