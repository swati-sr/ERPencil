import React from "react";

const FrontLabel = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[88vh] bg-light-bg overflow-hidden">
      <h1 className="text-[#675D50] font-extrabold text-[8rem] leading-[1.1] tracking-tight uppercase relative px-6 inline-block text-center">
        FROM ADMISSION TO GRADUATION
      </h1>
      <h4 className="text-[#F3DEBA] font-medium text-[1.8rem] tracking-tight mt-4 text-center animate-slide-text-horizontal">
        one platform for every student record
      </h4>
      <p className="text-[#675D50] font-semibold text-[1.5rem] mt-4">
        Orbitly manages student's library activity, academics, rewards,
        documents & more....
      </p>
    </div>
  );
};

export default FrontLabel;
