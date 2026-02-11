import Image from "next/image";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import Footer from "@/components/Footer";
import TechStack from "@/components/TechStack";
import { TimelineDemo } from "@/components/TimelineDemo";
import Grid from "@/components/Grid";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-2 sm:px-10 px-8 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid/>
        <TechStack />
        <TimelineDemo/>
        <RecentProjects />
        <Footer />
      </div>
    </main>
  );
}
