import React from "react";

const Card = ({ image, text, color }) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className="relative w-full mx-auto rounded-2xl overflow-hidden shadow-lg shadow-[#568F87] aspect-[3/3]"
    >
      <img src={image} alt={text} className="w-full h-full object-fill" />
      <div className="absolute inset-0 bg-black/30"></div>
      <h2 className="absolute inset-0 flex items-center justify-center text-[#F3DEBA] text-8xl font-bold">
        {text}
      </h2>
    </div>
  );
};

export default Card;
