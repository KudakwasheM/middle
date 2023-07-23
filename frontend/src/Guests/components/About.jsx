import React from "react";

const About = () => {
  return (
    <div className="bg-[#000300]  px-4 py-16 text-white">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2">
        <div className="flex lg:flex-col text-center justify-center">
          <p className="text-5xl sm:text-7xl md:text-8xl lg:text-[150px] font-bold text-white">
            About
          </p>
          <p className="text-5xl sm:text-7xl md:text-8xl lg:text-[150px] ml-4 lg:ml-0 font-bold text-white">
            Us
          </p>
        </div>
        <div className="flex flex-col text-center justify-center md:px-[150px] px-4 lg:px-4 my-8 md:p-0">
          <h2 className="text-[rgb(0,223,154)] text-3xl">The Middle.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            repudiandae eligendi placeat nisi impedit delectus illum sapiente,
            itaque aliquam veniam odit facilis corporis qui quos obcaecati rem
            reprehenderit inventore ea.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            repudiandae eligendi placeat nisi impedit delectus illum sapiente,
            itaque aliquam veniam odit facilis corporis qui quos obcaecati rem
            reprehenderit inventore ea.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            repudiandae eligendi placeat nisi impedit delectus illum sapiente,
            itaque aliquam veniam odit facilis corporis qui quos obcaecati rem
            reprehenderit inventore ea.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
