import React from "react";
import NoImage from "../../assets/noimage.jpg";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { GrMapLocation } from "react-icons/gr";
import { HiLocationMarker, HiOutlineLocationMarker } from "react-icons/hi";

const Projects = () => {
  let per = "80%";
  let per1 = "15%";
  let per2 = "45%";
  return (
    <div className="max-w-[1200px] mx-auto py-10">
      <h2 className="text-3xl font-semibold mb-3 text-center">
        Discover Opportunities To Invest In
      </h2>
      <p className="text-center mb-5">
        Browse our latest exciting startup pitches and connect with
        entrepreneurs to discuss further.
      </p>
      <div className="grid md:grid-cols-3 gap-10 mx-20 my-10 ">
        <div className="flex flex-col border rounded-lg bg-[rgba(0,223,154,0.05)]">
          <div className="h-32">No Image</div>
          <div className="w-full bg-slate-500 h-[3px]">
            <div
              className="bg-[rgb(0,223,154)] h-full"
              style={{ width: `${per}` }}
            ></div>
          </div>
          <div className="p-3">
            <h2 className="font-semibold mb-2">Project Name</h2>
            <p className="mb-2 flex items-center text-sm">
              <GoLocation size={18} className="text-blue-500" />
              <span className="ml-1">Harare</span>
            </p>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              animi illum ipsam maxime quas perspiciatis deserunt esse ex.
              Consequatur rem atque dolore, corporis quasi mollitia fugit hic
              animi. Eum id consectetur sed quisquam assumenda magnam ullam
              velit, esse dolor dolorem dicta nam reiciendis earum reprehenderit
              error odio fugiat quis? Quo.
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
                Find Out More
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col border rounded-lg bg-[rgba(0,223,154,0.05)]">
          <div className="h-32">No Image</div>
          <div className="w-full bg-slate-500 h-[3px]">
            <div
              className="bg-[rgb(0,223,154)] h-full"
              style={{ width: `${per1}` }}
            ></div>
          </div>
          <div className="p-3">
            <h2 className="font-semibold mb-2">Project Name</h2>
            <p className="mb-2 flex items-center text-sm">
              <GoLocation size={18} className="text-blue-500" />
              <span className="ml-1">Harare</span>
            </p>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              animi illum ipsam maxime quas perspiciatis deserunt esse ex.
              Consequatur rem atque dolore, corporis quasi mollitia fugit hic
              animi. Eum id consectetur sed quisquam assumenda magnam ullam
              velit, esse dolor dolorem dicta nam reiciendis earum reprehenderit
              error odio fugiat quis? Quo.
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
                Find Out More
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col border rounded-lg bg-[rgba(0,223,154,0.05)]">
          <div className="h-32">No Image</div>
          <div className="w-full bg-slate-500 h-[3px]">
            <div
              className="bg-[rgb(0,223,154)] h-full"
              style={{ width: `${per2}` }}
            ></div>
          </div>
          <div className="p-3">
            <h2 className="font-semibold mb-2">Project Name</h2>
            <p className="mb-2 flex items-center text-sm">
              <GoLocation size={18} className="text-blue-500" />
              <span className="ml-1">Harare</span>
            </p>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              animi illum ipsam maxime quas perspiciatis deserunt esse ex.
              Consequatur rem atque dolore, corporis quasi mollitia fugit hic
              animi. Eum id consectetur sed quisquam assumenda magnam ullam
              velit, esse dolor dolorem dicta nam reiciendis earum reprehenderit
              error odio fugiat quis? Quo.
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
                Find Out More
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
  );
};

export default Projects;
