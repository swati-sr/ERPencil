import React, { useState, useRef, useEffect } from "react";
import Card from "./Card";

const AnimatedCard = ({ image, text, color, path }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref} className="w-full h-screen flex items-center justify-center">
      <div
        className={`w-[100%] max-w-4xl transition-all duration-1000 ease-out transform ${
          visible
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-90 translate-y-10"
        }`}
      >
        <Card image={image} text={text} color={color} path={path} />
      </div>
    </div>
  );
};

export default AnimatedCard;
