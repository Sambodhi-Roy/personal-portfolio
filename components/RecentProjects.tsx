"use client";

import React from "react";
import { projects } from "@/data";
import dynamic from "next/dynamic";
import { FaLocationArrow } from "react-icons/fa";

const PinContainer = dynamic(
  () => import("./ui/3D-Pin").then((mod) => mod.PinContainer),
  { ssr: false },
);

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 py-2">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div key={id} className="flex items-center justify-center h-[500px]">
            <PinContainer title={title} href={link} className="h-[420px]">
              {/* Card content wrapper */}
              <div className="flex flex-col sm:w-[40vw] max-w-[500px] w-[80vw] h-[420px]">
                {/* Project image */}
                <div className="relative flex items-center justify-center overflow-hidden h-[220px] shrink-0">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                    <img src="/bg.png" alt="bg-img" />
                  </div>
                  <img
                    src={img}
                    alt={title}
                    className="z-10 absolute bottom-0"
                  />
                </div>

                {/* Project details */}
                <div className="flex flex-col flex-1 gap-3 pt-5 w-full">
                  <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-2">
                    {title}
                  </h1>

                  <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                    {des}
                  </p>

                  {/* Tech icons & GitHub link */}
                  <div className="flex items-center justify-between w-full mt-auto">
                    <div className="flex">
                      {iconLists.map((icon, index) => (
                        <div
                          key={icon}
                          className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{ transform: `translateX(-${index * 10}px)` }}
                        >
                          <img src={icon} alt={icon} className="p-2" />
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(link, "_blank", "noopener,noreferrer");
                      }}
                      className="flex items-center gap-2 text-purple hover:text-white transition"
                    >
                      <span className="lg:text-xl md:text-xs text-sm">
                        GitHub
                      </span>
                      <FaLocationArrow />
                    </button>
                  </div>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;