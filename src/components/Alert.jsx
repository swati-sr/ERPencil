import React from "react";

const Alert = ({ text, type }) => {
  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";

  return (
    <div
      className={`${bgColor} text-white px-4 py-3 rounded fixed top-5 left-1/2 transform -translate-x-1/2 z-50 shadow-lg`}
    >
      {text}
    </div>
  );
};

export default Alert;
