import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Guests/components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Guests = () => {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <Outlet />
    </>
  );
};

export default Guests;
