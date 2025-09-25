import React from "react";
import { MENU_ITEMS_LEFT, MENU_ITEMS_RIGHT } from "../static/constant";

const Header = () => {
  return (
    <div className="flex justify-between items-center pt-10 px-5 text-text-color text-lg bg-light-bg">
      <h1 className="font-bold text-3xl">Orbitly</h1>
      <ul className="flex gap-7">
        {MENU_ITEMS_LEFT.map((item, index) => (
          <li
            key={index}
            className="relative group cursor-pointer font-bold text-lg"
          >
            <span className="relative z-10">{item.label}</span>
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="w-0 h-0 bg-[#A9907E] rounded-full transition-all duration-300 group-hover:w-12 group-hover:h-12"></span>
            </span>
          </li>
        ))}
      </ul>
      <ul className="flex gap-5">
        {MENU_ITEMS_RIGHT.map((item, index) => (
          <li
            key={index}
            className="relative group cursor-pointer font-bold text-lg"
          >
            <span className="relative z-10">{item.label}</span>
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="w-0 h-0 bg-[#A9907E] rounded-full transition-all duration-300 group-hover:w-12 group-hover:h-12"></span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
