import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-[1100px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-3xl sm:text-2xl text-xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p className="">Sign up to our newsletter and stay up to date</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 w-full rounded-md text-black"
              type="email"
              placeholder="Enter email"
            />
            <button className="bg-[rgb(0,223,154)] w-[200px] rounded-md ml-4 font-medium my-6 py-3 text-black">
              Notify Me
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our{" "}
            <span className="text-[rgb(0,223,154)]">Privacy policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
