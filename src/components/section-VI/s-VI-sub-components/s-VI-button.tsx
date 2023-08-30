import React from "react";
import like from "../../../res/like.svg"
import hello from "../../../res/hello.svg"
import project from "../../../res/project.svg"
import Image from "next/image";

export const SVIButton = () => {
  return (
    <div className="w-full mt-16">
      
      <div onClick={() => (window as any).my_modal_2.showModal()}
        className="w-full h-12 mt-8 flex items-center cursor-pointer">
        <div className="h-full w-12 bg-c-purple rounded-full text-white flex items-center justify-center">
        <Image src={like} alt="not found"/>
        </div>
        <span className="pl-4 font-medium">I’d like to book you in</span>
      </div>

      <div onClick={() => (window as any).my_modal_2.showModal()}
        className="w-full h-12 mt-8 flex items-center cursor-pointer">
        <div className="h-full w-12 bg-c-purple rounded-full text-white flex items-center justify-center">
        <Image src={project} alt="not found"/>
        </div>
        <span className="pl-4 font-medium">I’d like a quote for a project</span>
      </div>

      <div onClick={() => (window as any).my_modal_2.showModal()}
        className="w-full h-12 mt-8 flex items-center cursor-pointer">
        <div className="h-full w-12 bg-c-purple rounded-full text-white flex items-center justify-center">
        <Image src={hello} alt="not found"/>
        </div>
        <span className="pl-4 font-medium">I’d just like to say hello</span>
      </div>

    </div>
  );
};
