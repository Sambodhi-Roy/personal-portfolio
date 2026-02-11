import React from "react";
import { Timeline } from "@/components/ui/Timeline";
import { section } from "framer-motion/client";

export function TimelineDemo() {
  const data = [
    {
      title: "Coyesco",
      subtitle: "SWE Intern | Remote | June 2025 - August 2025",
      content: (
        <>
          <div className="flex items-start gap-2">
            <span className="text-purple-400 mt-1 text-sm">✓</span>
            <p className="text-neutral-300 text-sm md:text-base">
              Redesigned and developed a US client’s marketing website using Next.js and TypeScript, improving performance, user engagement, and overall SEO.
            </p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-purple-400 mt-1 text-sm">✓</span>
            <p className="text-neutral-300 text-sm md:text-base">
              Collaborated with UI/UX designers and backend developers to revamp the existing design, translating Figma prototypes into production-ready features for a modern, consistent UI/UX.
            </p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-purple-400 mt-1 text-sm">✓</span>
            <p className="text-neutral-300 text-sm md:text-base">
              Implemented SSG, SSR, and dynamic component loading, enhancing scalability and significantly boosting site visibility, speed, and user experience.
            </p>
          </div>
        </>
      ),
    },
    {
      title: "Infotsav",
      subtitle: "Frontend Developer | Part Time | June 2025 - October 2025",
      content: (
        <>
          <div className="flex items-start gap-2">
            <span className="text-purple-400 mt-1 text-sm">✓</span>
            <p className="text-neutral-300 text-sm md:text-base">
              Built and deployed the official website for Infotsav’25, IIIT Gwalior’s annual tech fest themed on Stranger Things, delivering optimized performance with a Lighthouse SEO score of 92 and accessibility score of 90.
            </p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-purple-400 mt-1 text-sm">✓</span>
            <p className="text-neutral-300 text-sm md:text-base">
              Boosted event reach and participation by driving 4,000+ website visits and enabling 1,500+ user registrations, while ensuring an engaging and immersive UI/UX.
            </p>
          </div>
        </>
      ),
    },
  ];
  
  return (
    <section id="work-experience">
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
    </section>
  );
}