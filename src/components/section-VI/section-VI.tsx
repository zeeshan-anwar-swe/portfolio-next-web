import React from "react";
import { SVIButton } from "./s-VI-sub-components/s-VI-button";
import { Modal } from "../modals/model";

export const SectionVI = () => {
  return (
    <div
      id="contact"
      className="w-full h-full lg:p-16 bg-gray-100 sticky top-0 z-30">

      <div className="w-full h-full text-c-purple px-6 pt-32 lg:pt-16 mb-8">
      <h1 className="text-2xl lg:text-3xl font-sans font-medium mb-8">
      Contact Me
      </h1>

      <h3 className="text-lg lg:text-xl font-medium ">Don't be shy!</h3>
      <p className="s2-p">
      Swipe or drag below to see a small selection of projects I've worked
      on.
      </p>
      <SVIButton />
      </div>
      <Modal />

    </div>
  );
};
