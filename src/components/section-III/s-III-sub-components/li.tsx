import { ListItemProps } from "../../../types/index";
import React from "react";

export const ListItem = ({ icon }: ListItemProps) => {
  return (
    <li className="relative p-5 group hover:bg-white transition-all duration-500 ease-in-out overflow-hidden  w-1/2 flex-grow border-2 border-r-0 border-white flex items-center justify-center">
      <div className="w-10/12  group-hover:opacity-0 transition-opacity ease-in-out duration-300  ">
      <img
      className="object-cover w-full h-full"
      src="https://uploads-ssl.webflow.com/63a1a09fd6b229280c52d17e/63a313c6ca8aa6240e1e5dc1_Logo%20Inverse-p-500.png"
      alt=""
      />
      </div>
      
      <div className="w-full h-full opacity-0 p-8 absolute top-16 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:top-0 ">
      
      <div>
      <h3 className="text-c-purple text-xl mb-2">{icon.title}</h3>
      <p className="s2-p">{icon.discription}</p>
      </div>
      </div>

    </li>
  );
};
