import React from "react";
import Agriculture from "../assets/agriculture.png";
import Gold from "../assets/gold.png";
import Brainstorm from "../assets/brainstorm.png";

const Opportunities = () => {
  return (
    // <div className="bg-[#000300] text-black w-full py-16 px-4">
    //   <div className="max-w-[1100px] mx-auto grid md:grid-cols-2">
    //     <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
    //     <div className="flex flex-col justify-center">
    //       <p className="text-[rgb(0,223,154)] font-bold uppercase">
    //         Data analytics dashboard
    //       </p>
    //       <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
    //         Manage Data Analytics Centrally
    //       </h1>
    //       <p className="">
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
    //         eligendi ea nulla numquam omnis voluptatibus quibusdam aliquid,
    //         saepe ipsum. Nihil aspernatur iusto saepe doloribus hic itaque
    //         obcaecati debitis ullam et.
    //       </p>
    //       <button className="bg-black w-[200px] rounded-md font-medium my-6 md:mx-0 mx-auto py-3 text-[rgb(0,223,154)]">
    //         Get Started
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div className="w-full py-16 px-4">
      <div className="max-w-[1200px] mx-auto text-center">
        <div className="mx-auto max-w-[600px] mb-16">
          <h1 className="text-[rgb(0,223,154)] text-3xl sm:text-4xl md:text-5xl mb-4">
            Opportunities
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id nostrum
            commodi aliquid obcaecati quibusdam quos, dicta libero? Provident
            sit alias architecto quis soluta earum accusamus. Aperiam ipsum est
            ea inventore.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 justify-center">
          <div className="p-4 max-w-[300px] mx-auto border border-[rgb(0,223,154)] shadow-md shadow-[rgb(0,223,154)] my-4 rounded-lg hover:scale-105">
            <img
              className="w-14 mx-auto mt-[-3rem] m-2 bg-white"
              src={Agriculture}
              alt=""
            />
            <h2 className="text-3xl font-bold text-center py-8">Farming</h2>
            <p className="text-center py-2 font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, temporibus.
            </p>
            <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[rgb(0,223,154)]">
              Explore
            </button>
          </div>
          <div className="p-4 max-w-[300px] mx-auto border border-black shadow-md shadow-black my-4 rounded-lg hover:scale-105">
            <img
              className="w-14 mx-auto mt-[-3rem] m-2 bg-white"
              src={Gold}
              alt=""
            />
            <h2 className="text-3xl font-bold text-center py-8">Mining</h2>
            <p className="text-center py-2 font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, temporibus.
            </p>
            <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[rgb(0,223,154)]">
              Explore
            </button>
          </div>
          <div className="p-4 max-w-[300px] mx-auto border border-[rgb(0,223,154)] shadow-md shadow-[rgb(0,223,154)] my-4 rounded-lg hover:scale-105">
            <img
              className="w-14 mx-auto mt-[-3rem] m-2 bg-white"
              src={Brainstorm}
              alt=""
            />
            <h2 className="text-3xl font-bold text-center py-8">Ideas</h2>
            <p className="text-center py-2 font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, temporibus.
            </p>
            <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[rgb(0,223,154)]">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
