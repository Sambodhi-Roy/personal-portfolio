"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/AnimatedTooltip";
import { div, image } from "framer-motion/client";

const stacks = [
  { id: 1, name: "C++", image: "/cpp.svg" },
  { id: 2, name: "C", image: "/Clang.svg" },
  { id: 3, name: "HTML 5", image: "/html.svg" },
  { id: 4, name: "CSS 3", image: "/css.svg" },
  { id: 5, name: "JavaScript", image: "/js.svg" },
  { id: 6, name: "TypeScript", image: "/ts-logo.png" },
  { id: 7, name: "Tailwind", image: "/tail.svg" },
  { id: 8, name: "React", image: "/re.svg" },
  {id:  9, name: "Node JS", image: "/node-icon.png"},
  {id:  10, name: "Express", image: "/express.png"},
  { id: 11, name: "MongoDB", image: "/mongodb.png"},
  { id: 12, name: "PostgreSQL", image: "/Postgresql_logo.svg" },
  { id: 13, name: "Prisma", image: "/prisma-icon.jpg" },
  { id: 14, name: "Next", image: "/next.svg" },
  { id: 15, name: "Bootstrap", image: "/Bootstrap.svg" },
  { id: 16, name: "Figma", image: "/Figma.svg" },
  { id: 17, name: "Turborepo", image: "/turborepo.png" },
  { id: 18, name: "Github", image: "/GitHub.png" },
  { id: 19, name: "Git", image: "/git-logo.svg" },
  { id: 20, name: "Gitlab", image: "/gitlab.png" },
  { id: 21, name: "Python", image: "/python-5.svg" },
  { id: 22, name: "Numpy", image: "/numpy.svg" },
  { id: 23, name: "Pandas", image: "/pandas.svg" },
  { id: 24, name: "Matplotlib", image: "/matplotlib.svg" },
  { id: 25, name: "Scikit-Learn", image: "/scikit-learn.svg" },
  { id: 26, name: "Kaggle", image: "/Kaggle.svg" },
  { id: 27, name: "MarkDown", image: "/MarkDown.png" },
  { id: 28, name: "MySQL", image: "/MySQL.svg" },
  { id: 29, name: "SQLite", image: "/SQLite.svg" },
  { id: 30, name: "Streamlit", image: "/streamlit.svg" },
  { id: 31, name: "Vite", image: "/vite.svg" },
  { id: 32, name: "Vercel", image: "/vercel.png" },
  { id: 33, name: "Netlify", image: "/netlify.svg" },
];


export function TechStack() {
  return (
    <div className="py-20" id="tech">
      <h1 className="heading pb-20">
        <span className="text-purple">Technologies</span> I have work with
      </h1>
      <div className="flex flex-row items-center justify-center mb-10 w-full">
        <AnimatedTooltip items={stacks} />
      </div>
    </div>
  );
}

export default TechStack;
