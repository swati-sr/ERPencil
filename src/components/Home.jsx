import React from "react";
import Header from "./Header";
import FrontLabel from "./FrontLabel";

const Home = () => {
  return (
    <>
      <Header />
      <hr className="w-[90%] h-[1px] bg-gray-600 mt-6 mx-auto" />
      <FrontLabel />
    </>
  );
};

export default Home;
