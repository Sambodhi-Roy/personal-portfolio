"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/AnimatedTooltip";
import { div } from "framer-motion/client";
const people = [
  {
    id: 1,
    name: "Python",
    image: "/python-5.svg",
  },
  {
    id: 2,
    name: "C++",
    image: "/cpp.svg",
  },
  {
    id: 3,
    name: "C",
    image: "/Clang.svg",
  },
  {
    id: 4,
    name: "JavaScript",
    image: "/js.svg",
  },
  {
    id: 5,
    name: "Numpy",
    image: "/numpy.svg",
  },
  {
    id: 6,
    name: "Pandas",
    image: "/pandas.svg",
  },
  {
    id: 7,
    name: "Matplotlib",
    image: "/matplotlib.svg",
  },
  {
    id: 8,
    name: "Tensorflow",
    image: "/tensorflow.svg",
  },
  {
    id: 9,
    name: "Keras",
    image: "/keras.svg",
  },
  {
    id: 10,
    name: "Scikit-Learn",
    image: "/scikit-learn.svg",
  },
  {
    id: 11,
    name: "Kaggle",
    image: "/Kaggle.svg",
  },
  {
    id: 12,
    name: "HTML 5",
    image: "/html.svg",
  },
  {
    id: 13,
    name: "CSS 3",
    image: "/css.svg",
  },
  {
    id: 14,
    name: "Tailwind",
    image: "/tail.svg",
  },
  {
    id: 15,
    name: "React",
    image: "/re.svg",
  },
  {
    id: 16,
    name: "Next",
    image: "/next.svg",
  },
  {
    id: 17,
    name: "Bootstrap",
    image: "/Bootstrap.svg",
  },
  {
    id: 18,
    name: "Figma",
    image: "/Figma.svg",
  },
  {
    id: 19,
    name: "Github",
    image: "/GitHub.svg",
  },
  {
    id: 20,
    name: "Git",
    image: "/git-logo.svg",
  },
  {
    id: 21,
    name: "MarkDown",
    image: "/MarkDown.svg",
  },
  {
    id: 22,
    name: "MySQL",
    image: "/MySQL.svg",
  },
  {
    id: 23,
    name: "SQLite",
    image: "/SQLite.svg",
  },
  {
    id: 24,
    name: "Streamlit",
    image: "/streamlit.svg",
  },
  {
    id: 25,
    name: "Vite",
    image: "/vite.svg",
  },
  {
    id: 26,
    name: "Vercel",
    image: "/vercel.svg",
  },
  {
    id: 27,
    name: "Netlify",
    image: "/netlify.svg",
  },
];

export function TechStack() {
  return (
    <div className="py-20" id="tech">
      <h1 className="heading pb-20">
        <span className="text-purple">Technologies</span> I have work with
      </h1>
      <div className="flex flex-row items-center justify-center mb-10 w-full">
        <AnimatedTooltip items={people} />
      </div>
    </div>
  );
}

export default TechStack;
