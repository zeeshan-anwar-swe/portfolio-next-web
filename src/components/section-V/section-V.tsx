import { SectionVCarousel } from "./s-V-sub-components/s-v-carousel";
import React from "react";

export const SectionV = () => {
  
  return (
    <div id="projects" className="w-full h-full bg-white sticky top-0 z-20">
      <div className="w-full text-c-purple px-6 lg:px-16 lg:pt-16 pt-32 mb-8 ">
        
        <h1 className="text-2xl lg:text-4xl font-sans font-medium lg:mb-2">
        Project
        </h1>
        
        <p className="s2-p">
        Swipe or drag below to see a small selection of projects I've worked
        on.
        </p>

      </div>
      <SectionVCarousel />
    </div>
  );
};
