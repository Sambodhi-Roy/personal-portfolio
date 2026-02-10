"use client";
import { div } from "framer-motion/client";
import React from "react";
import { projects } from "@/data";
import dynamic from "next/dynamic";
import { FaLocationArrow } from "react-icons/fa";

const PinContainer = dynamic(
  () => import("./ui/3D-Pin").then((mod) => mod.PinContainer),
  { ssr: false }
);

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-around px-4 py-2 gap-16 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="l:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <PinContainer title={title} href={link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh]">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img
                  src={img}
                  alt={title}
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-2">
                {title}
              </h1>

              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3 w-full">
                <div className="flex space-around">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black
                                 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${index * 10}px)` }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>

                {/* GitHub link (right) */}
                <button
                onClick={(e) => {
                  e.stopPropagation(); window.open(link, "_blank", "noopener,noreferrer");}}
                className="flex items-center gap-2 text-purple hover:text-white transition"
                >
                <span className="lg:text-xl md:text-xs text-sm">
                    GitHub
                </span>
              <FaLocationArrow />
              </button>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
