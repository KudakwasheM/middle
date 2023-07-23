import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Guests/components/Navbar";

const Guests = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Guests;
