import React, { useEffect, useState } from "react";
import { AiOutlineAccountBook } from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";

const Administration = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {}, []);
  return (
    <div className="h-screen max-w-screen grid grid-cols-6 bg-[rgb(240,240,240)]">
      <aside className="flex flex-col bg-[rgb(0,0,0)] p-5 col-span-1 max-h-full">
        <h1 className="text-3xl font-bold text-[rgb(0,223,154)]">Middle.</h1>
        <div className="flex flex-col flex-1 text-white pt-10">
          <Link
            to="/"
            className="p-3 mb-1 w-full flex items-center hover:bg-white hover:text-black"
          >
            <span className="mr-2">
              <AiOutlineAccountBook size={25} />
            </span>
            Dashboard
          </Link>
          <Link
            to="/"
            className="p-3 mb-1 w-full flex items-center hover:bg-white hover:text-black"
          >
            <span className="mr-2">
              <AiOutlineAccountBook size={25} />
            </span>
            Projects
          </Link>
          <Link
            to="/"
            className="p-3 mb-1 w-full flex items-center hover:bg-white hover:text-black"
          >
            <span className="mr-2">
              <AiOutlineAccountBook size={25} />
            </span>
            Interprenuers
          </Link>
          <Link
            to="/"
            className="p-3 mb-1 w-full flex items-center hover:bg-white hover:text-black"
          >
            <span className="mr-2">
              <AiOutlineAccountBook size={25} />
            </span>
            Investors
          </Link>
        </div>
        <div>
          <Link
            to="/"
            className="text-red-500 p-3 mb-1 w-full flex items-center hover:bg-red-500 hover:text-white"
          >
            <span className="mr-2">
              <AiOutlineAccountBook size={25} />
            </span>
            Logout
          </Link>
        </div>
      </aside>
      <div className=" max-h-full col-span-5 overflow-y-scroll">
        <div className="flex border-b h-14 items-center justify-end p-5 bg-white">
          User Name
        </div>
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Administration;
