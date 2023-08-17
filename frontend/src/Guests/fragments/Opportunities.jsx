import React from "react";

const Opportunities = () => {
  return (
    <div className="py-10">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl font-semibold mb-3 text-center">
          Opportunities To Invest In
        </h2>
        <p className="text-center mb-5">
          We connect investors with startups and businesses from all sectors to
          ensure the relationship is valuable to both parties.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 lg:mx-20 my-10">
          <div className="opp flex items-center justify-center h-[350px] border text-white text-3xl">
            Farming
          </div>
          <div className="opp flex items-center justify-center h-[350px] border text-white text-3xl">
            Mining
          </div>
          <div className="opp flex items-center justify-center h-[350px] border text-white text-3xl">
            Software
          </div>
          <div className="opp flex items-center justify-center h-[350px] border text-white text-3xl">
            Food
          </div>
          <div className="opp flex items-center justify-center h-[350px] border text-white text-3xl">
            Education
          </div>
          <div className="opp flex items-center justify-center h-[350px] border text-white text-3xl">
            Medicine
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
