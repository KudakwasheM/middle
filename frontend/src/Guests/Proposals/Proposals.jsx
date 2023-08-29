import React, { useState } from "react";
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { useGetAllProjectsQuery } from "../../slices/projectsApiSlice";

const Proposals = () => {
  const per1 = 80;
  const { data, isLoading, isSuccess, isError } = useGetAllProjectsQuery();
  const itemsPerPage = 12;
  const [itemOffset, setItemOffset] = useState(0);
  // const endOffset = itemOffset + itemsPerPage;
  // const currentItems = data.slice(itemOffset, endOffset);
  // const pageCount = Math.ceil(data.length / itemsPerPage);

  // const handlePageClick = (event) => {
  //   const newOffset = (event.selected * itemsPerPage) % data.length;
  //   setItemOffset(newOffset);
  // };
  return (
    <div>
      <div className="sub-hero w-full">
        <div className="h-full bg-[rgba(0,0,0,0.4)]">
          <div className="flex flex-col items-center justify-around h-full lg:w-[800px] mx-auto text-white text-center py-14 px-5">
            <h1 className="text-5xl text-[rgb(0,223,154)] font-bold">
              Proposals
            </h1>
            <p className="">
              Where great businesses and great people meet. We bring together
              businesses looking for investment and investors with the capital,
              contacts and knowledge to help them succeed.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-[1200px] grid grid-cols-3 gap-5 mx-auto px-5 lg:px-24 py-10">
        <div className="flex flex-col border rounded-lg bg-[rgba(0,223,154,0.05)] hover:shadow-lg">
          <div className="h-32">No Image</div>
          <div className="w-full bg-slate-500 h-[3px]">
            <div
              className="bg-[rgb(0,223,154)] h-full"
              style={{ width: `${per1}` }}
            ></div>
          </div>
          <div className="px-3 py-4">
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
              <Link
                to="/innovations/id"
                className="bg-[rgba(0,223,154,0.75)] hover:bg-[rgba(0,223,154,1)] py-2 px-3 text-white text-sm rounded"
              >
                Find Out More
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col border rounded-lg bg-[rgba(0,223,154,0.05)] hover:shadow-lg">
          <div className="h-32">No Image</div>
          <div className="w-full bg-slate-500 h-[3px]">
            <div
              className="bg-[rgb(0,223,154)] h-full"
              style={{ width: `${per1}` }}
            ></div>
          </div>
          <div className="px-3 py-4">
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
              <Link
                to="/innovations/id"
                className="bg-[rgba(0,223,154,0.75)] hover:bg-[rgba(0,223,154,1)] py-2 px-3 text-white text-sm rounded"
              >
                Find Out More
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col border rounded-lg bg-[rgba(0,223,154,0.05)] hover:shadow-lg">
          <div className="h-32">No Image</div>
          <div className="w-full bg-slate-500 h-[3px]">
            <div
              className="bg-[rgb(0,223,154)] h-full"
              style={{ width: `${per1}` }}
            ></div>
          </div>
          <div className="px-3 py-4">
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
              <Link
                to="/innovations/id"
                className="bg-[rgba(0,223,154,0.75)] hover:bg-[rgba(0,223,154,1)] py-2 px-3 text-white text-sm rounded"
              >
                Find Out More
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col border rounded-lg bg-[rgba(0,223,154,0.05)] hover:shadow-lg">
          <div className="h-32">No Image</div>
          <div className="w-full bg-slate-500 h-[3px]">
            <div
              className="bg-[rgb(0,223,154)] h-full"
              style={{ width: `${per1}` }}
            ></div>
          </div>
          <div className="px-3 py-4">
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
              <Link
                to="/innovations/id"
                className="bg-[rgba(0,223,154,0.75)] hover:bg-[rgba(0,223,154,1)] py-2 px-3 text-white text-sm rounded"
              >
                Find Out More
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col border rounded-lg bg-[rgba(0,223,154,0.05)] hover:shadow-lg">
          <div className="h-32">No Image</div>
          <div className="w-full bg-slate-500 h-[3px]">
            <div
              className="bg-[rgb(0,223,154)] h-full"
              style={{ width: `${per1}` }}
            ></div>
          </div>
          <div className="px-3 py-4">
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
              <Link
                to="/innovations/id"
                className="bg-[rgba(0,223,154,0.75)] hover:bg-[rgba(0,223,154,1)] py-2 px-3 text-white text-sm rounded"
              >
                Find Out More
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col border rounded-lg bg-[rgba(0,223,154,0.05)] hover:shadow-lg">
          <div className="h-32">No Image</div>
          <div className="w-full bg-slate-500 h-[3px]">
            <div
              className="bg-[rgb(0,223,154)] h-full"
              style={{ width: `${per1}` }}
            ></div>
          </div>
          <div className="px-3 py-4">
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
              <Link
                to="/innovations/id"
                className="bg-[rgba(0,223,154,0.75)] hover:bg-[rgba(0,223,154,1)] py-2 px-3 text-white text-sm rounded"
              >
                Find Out More
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col border rounded-lg bg-[rgba(0,223,154,0.05)] hover:shadow-lg">
          <div className="h-32">No Image</div>
          <div className="w-full bg-slate-500 h-[3px]">
            <div
              className="bg-[rgb(0,223,154)] h-full"
              style={{ width: `${per1}` }}
            ></div>
          </div>
          <div className="px-3 py-4">
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
              <Link
                to="/innovations/id"
                className="bg-[rgba(0,223,154,0.75)] hover:bg-[rgba(0,223,154,1)] py-2 px-3 text-white text-sm rounded"
              >
                Find Out More
              </Link>
            </div>
          </div>
        </div>
        {/* <>
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
          />
        </> */}
      </div>
    </div>
  );
};

export default Proposals;
