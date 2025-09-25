import React from "react";

const Button = ({ text, path }) => {
  return (
    <button
      className="px-8 py-3 rounded-full bg-[#F3DEBA] text-[#675D50] font-semibold shadow-md hover:bg-[#F3DEBA] hover:scale-105 transition-all duration-300 pointer-events-auto"
      onClick={() => {
        path;
      }}
    >
      {text}
    </button>
  );
};

export default Button;
