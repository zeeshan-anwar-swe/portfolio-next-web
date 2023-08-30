"use client";
import { changeColor } from "@/redux/slice/portfolio-slice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Menu = () => {
  const [toggle, setToggle] = useState(false);

  const dispatch = useDispatch();

  const themeChanger = (color: string) => {
    dispatch(changeColor(color));
  };

  const globalColor = useSelector((state: any) => {
    return state.dummy.color;
  });

  return (
    <div
      className={`group trans bg-white fixed top-10 z-50   ${
      toggle
      ? " w-10/12  lg:w-4/12  max-sm:text-sm rounded-md p-5"
      : "w-10 h-10 flex items-center justify-center"
      } rounded-full `}
    >
      <svg
        onClick={() => setToggle(!toggle)}
        style={{ color: "#2e304b" }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`w-10 h-10 p-2 bg-${globalColor} rounded-full`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
        />
      </svg>

      <ul className={`${toggle ? "block " : "hidden"} py-6`}>
      
        <li>
        <a
          href="#about"
          // onClick={() => {
          //   document.querySelector("#menu").scrollTo(200,0);
          // }}
          >
          <h3 className="text-c-purple mb-1 font-medium">About</h3>
          <p className="s2-p mb-6">
          Delicately tender with a slice of cheese.
          </p>
        </a>
        </li>

        <li>
        <a href="#clients">
          <h3 className="text-c-purple mb-1 font-medium">Clients</h3>
          <p className="s2-p mb-6">
          Our great selection from the best in town.
          </p>
        </a>
        </li>

        <li>
        <a href="#references">
          <h3 className="text-c-purple mb-1 font-medium">References</h3>
          <p className="s2-p mb-6">
          Delicately tender with a slice of cheese.
          </p>
        </a>
        </li>

        <li>
        <a href="#projects">
          <h3 className="text-c-purple mb-1 font-medium">Projects</h3>
          <p className="s2-p mb-6">Served on a bed of frontend tech.</p>
        </a>
        </li>

        <li>
        <a href="#contact">
          <h3 className="text-c-purple mb-1 font-medium">Contact</h3>
          <p className="s2-p mb-6">A superb choice to finish the day.</p>
        </a>
        </li>
      </ul>

      <div className={toggle ? "flex hover:cursor-pointer" : "hidden"}>

        <div
        onClick={() => themeChanger("c-pink")}
        className="bg-c-pink w-5 h-5 rounded-full mr-2"
        >
        </div>

        <div
        onClick={() => themeChanger("c-yellow")}
        className="bg-c-yellow w-5 h-5 rounded-full mr-2"
        >
        </div>

        <div
        onClick={() => themeChanger("c-green")}
        className="bg-c-green w-5 h-5 rounded-full mr-2"
        >
        </div>

      </div>
    </div>
  );
};
