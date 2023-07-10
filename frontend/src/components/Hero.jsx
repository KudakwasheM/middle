import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto px-4 text-center flex flex-col justify-center">
      <p className="text-[rgb(0,223,154)] font-bold p-2 uppercase">
        growing through investments
      </p>
      <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold md:py-6">
        Grow with invsetments.
      </h1>
      <div className="flex justify-center items-center mb-2">
        <p className="md:text-4xl sm:text-3xl text-xl font-bold">
          Best platform for investments in
          <Typed
            className="md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2 text-[rgb(0,223,154)]"
            strings={["Farming", "Mining", "Ideas"]}
            typeSpeed={120}
            backSpeed={130}
            loop
          />
        </p>
      </div>
      <p className="md:text-2xl text-xl font-bold text-gray-500">
        Helping you grow your income through investment in Farming, Mining &
        Ideas
      </p>
      <button className="bg-black w-[200px] rounded-md font-medium my-8 mx-auto py-3 text-[rgb(0,223,154)] hover:bg-[rgb(0,223,154)] hover:text-black hover:scale-110">
        Get Started
      </button>
    </div>
  );
};

export default Hero;
