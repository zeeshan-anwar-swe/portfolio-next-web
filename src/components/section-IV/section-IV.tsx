"use client";
import React, { useState } from "react";
import { ListItem } from "./s-IV-sub-components/ListItem";
import { useSelector } from "react-redux";

export const SectionIV = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const storeData = useSelector((state: any) => {
  return state.dummy;
  });

  return (
    <ul
    id="references"
    className={`w-full h-full bg-${storeData.color} trans text-c-purple flex items-center  p-8 lg:px-16 lg:py-8 sticky top-0 z-20`}
    >
    <div className="w-full h-full relative flex flex-col justify-center">
      <ListItem listData={storeData.dummy.sectionIV[currentPage]} />

      <div className="flex items-center absolute lg:bottom-0 bottom-4 ">
        {storeData.dummy.sectionIV.map((item: any, index: any) => (
        <div
          key={index}
          onClick={() => setCurrentPage(index)}
          className={`${
          currentPage == index
          ? "w-4 h-4 mx-2 bg-white"
          : "w-3 h-3 mx-2 bg-white/70"
          }  z-10 rounded-full transition-all ease-in-out cursor-pointer hover:bg-white`}
          ></div>
        ))}
      </div>
    </div>
    </ul>
  );
};
