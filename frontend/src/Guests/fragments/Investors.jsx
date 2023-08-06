import React from "react";
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";

const Investors = () => {
  return (
    <div className="bg-[rgba(0,223,154,0.05)] py-10">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl font-semibold mb-3 text-center">
          Get In-touch With Our Investors
        </h2>
        <p className="text-center mb-5">
          Meet individuals and businesses willing to invest in your ideas and
          innovaions
        </p>
        <div className="grid md:grid-cols-3 gap-10 mx-5 lg:mx-20 my-10 text-center">
          <div className="flex flex-col border rounded-lg bg-white p-5">
            <div className="mx-auto">
              <img
                src=""
                alt=""
                className="h-24 w-24 rounded-full p-1 border-2 border-[rgb(0,223,154)]"
              />
            </div>
            <div className="mt-5">
              <h2 className="font-semibold mb-2">Investor Name</h2>

              <p className="text-gray-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
                omnis est velit. Blanditiis adipisci molestias architecto omnis
                fugit vel harum.
              </p>
              <div className="flex mt-5 gap-10">
                <div className="flex flex-col">
                  <p className="text-sm">Target</p>
                  <h3 className="font-semibold">US$ 8,400</h3>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm">Investors' Percentage</p>
                  <h3 className="font-semibold">65%</h3>
                </div>
              </div>
              <div className="mt-5">
                <button className="bg-[rgb(45,168,234)] py-2 px-3 text-white text-sm rounded">
                  Get in touch
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col border rounded-lg bg-white p-5">
            <div className="mx-auto">
              <img
                src=""
                alt=""
                className="h-24 w-24 rounded-full p-1 border-2 border-[rgb(0,223,154)]"
              />
            </div>
            <div className="mt-5">
              <h2 className="font-semibold mb-2">Investor Name</h2>

              <p className="text-gray-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
                omnis est velit. Blanditiis adipisci molestias architecto omnis
                fugit vel harum.
              </p>
              <div className="flex mt-5 gap-10">
                <div className="flex flex-col">
                  <p className="text-sm">Target</p>
                  <h3 className="font-semibold">US$ 8,400</h3>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm">Investors' Percentage</p>
                  <h3 className="font-semibold">65%</h3>
                </div>
              </div>
              <div className="mt-5">
                <button className="bg-[rgb(45,168,234)] py-2 px-3 text-white text-sm rounded">
                  Get in touch
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col border rounded-lg bg-white p-5">
            <div className="mx-auto">
              <img
                src=""
                alt=""
                className="h-24 w-24 rounded-full p-1 border-2 border-[rgb(0,223,154)]"
              />
            </div>
            <div className="mt-5">
              <h2 className="font-semibold mb-2">Investor Name</h2>

              <p className="text-gray-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
                omnis est velit. Blanditiis adipisci molestias architecto omnis
                fugit vel harum.
              </p>
              <div className="flex mt-5 gap-10">
                <div className="flex flex-col">
                  <p className="text-sm">Target</p>
                  <h3 className="font-semibold">US$ 8,400</h3>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm">Investors' Percentage</p>
                  <h3 className="font-semibold">65%</h3>
                </div>
              </div>
              <div className="mt-5">
                <button className="bg-[rgb(45,168,234)] py-2 px-3 text-white text-sm rounded">
                  Get in touch
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center py-10">
          <p className="mb-5">
            Browser enterprenuer ideas, startups from all over Zimbabwe
          </p>
          <Link className="text-blue-400 p-10">View more</Link>
        </div>
      </div>
    </div>
  );
};

export default Investors;
