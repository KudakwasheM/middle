import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiError } from "react-icons/bi";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center text-center">
      <BiError size={150} className="text-red-500" />
      <div className="">
        <p className="text-2xl text-red-600">Error 404</p>
        <p className="text-3xl">Page not found</p>
      </div>
      <div className="mt-2">
        <button
          className="bg-sky-500 py-3 px-5 text-white text-xl mt-3"
          onClick={() => navigate(-1)}
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
