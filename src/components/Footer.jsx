import React from "react";
import { FOOTER_DATA } from "../static/constant";

const Footer = () => {
  const { contact, socialLinks, bottomText } = FOOTER_DATA;

  return (
    <footer className="relative w-full text-[#675D50] py-16 px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 text-2xl font-medium">
        <div className="flex flex-col space-y-3">
          <h3 className="text-xl font-semibold text-[#102C57] animate-textSlideIn">
            Contact
          </h3>
          <ul className="space-y-1 text-[#F3DEBA] animate-textSlideIn">
            {contact.map((item, idx) => (
              <li key={idx} className="relative group cursor-pointer">
                <span className="relative z-10">{item.value}</span>
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="w-0 h-0 bg-[#A9907E] rounded-full transition-all duration-300 group-hover:w-12 group-hover:h-12"></span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col space-y-3 text-2xl font-medium">
          <h3 className="text-xl font-semibold text-[#102C57] animate-textSlideIn">
            Follow Us
          </h3>
          <ul className="space-y-1 text-[#F3DEBA] animate-textSlideIn">
            {socialLinks.map((link, idx) => (
              <li
                key={idx}
                className="relative group cursor-pointer"
                onClick={() => window.open(link.url, "_blank")}
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="w-0 h-0 bg-[#A9907E] rounded-full transition-all duration-300 group-hover:w-12 group-hover:h-12"></span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-16 text-center max-w-7xl mx-auto">
        <h2 className="text-[clamp(3rem,10vw,8rem)] font-extrabold text-[#102C57] leading-tight tracking-tight transition-transform transition-colors duration-500 hover:text-[#F3DEBA] hover:scale-105 animate-pulse">
          {bottomText}
        </h2>
      </div>
      <div className="mt-8 border-t border-[#A9907E] pt-6 text-center">
        <p className="text-[#A9907E]">
          &copy; {new Date().getFullYear()} YourSite. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
