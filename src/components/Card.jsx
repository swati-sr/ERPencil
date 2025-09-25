import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Card = ({ image, text, color, path }) => {
  const [pos, setPos] = useState({ x: "50%", y: "80%" });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x: `${x}%`, y: `${y}%` });
  };

  const handleMouseLeave = () => {
    setPos({ x: "50%", y: "80%" });
  };

  return (
    <div
      style={{ backgroundColor: color }}
      className="relative w-full mx-auto rounded-2xl overflow-hidden shadow-lg shadow-[#568F87] aspect-[3/3]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img src={image} alt={text} className="w-full h-full object-fill" />
      <div className="absolute inset-0 bg-black/30"></div>
      <div
        className="absolute z-20 -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-out"
        style={{
          left: pos.x,
          top: pos.y,
        }}
      >
        <Link to={path}>
          <Button text="View" />
        </Link>
      </div>
      <h2 className="absolute inset-0 flex items-center justify-center text-[#F3DEBA] text-8xl font-bold pointer-events-none">
        {text}
      </h2>
    </div>
  );
};

export default Card;
