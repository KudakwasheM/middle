import React, { useEffect, useState } from "react";
import {
  AiOutlineAccountBook,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineTeam,
  AiOutlineUser,
} from "react-icons/ai";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../slices/authApiSlice";
import { logout } from "../slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Administration = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [logoutApiCall] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (err) {
      toast.error(err);
    }
  };

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    } else {
      const role = userInfo.role;
      switch (role) {
        case "Enterprenuer":
          navigate("/enterprenuer/dashboard");
          break;
        case "Investor":
          navigate("/investor/dashboard");
          break;
        default:
          break;
      }
    }
  }, [userInfo]);
  return (
    <div className="h-screen max-w-screen grid grid-cols-6 bg-[rgb(240,240,240)]">
      <aside className="flex flex-col bg-[rgb(0,0,0)] p-5 col-span-1 max-h-full">
        <h1 className="text-3xl font-bold text-[rgb(0,223,154)]">Middle.</h1>
        <div className="flex flex-col flex-1 text-white pt-10">
          <Link
            to="/admin/dashboard"
            className="p-3 mb-1 w-full flex items-center hover:bg-white hover:text-black"
          >
            <span className="mr-2">
              <AiOutlineHome size={25} />
            </span>
            Dashboard
          </Link>
          <Link
            to="/admin/projects"
            className="p-3 mb-1 w-full flex items-center hover:bg-white hover:text-black"
          >
            <span className="mr-2">
              <AiOutlineProject size={25} />
            </span>
            Projects
          </Link>
          <Link
            to="/admin/investors"
            className="p-3 mb-1 w-full flex items-center hover:bg-white hover:text-black"
          >
            <span className="mr-2">
              <AiOutlineProject size={25} />
            </span>
            Investors
          </Link>
          <Link
            to="/admin/funds"
            className="p-3 mb-1 w-full flex items-center hover:bg-white hover:text-black"
          >
            <span className="mr-2">
              <AiOutlineProject size={25} />
            </span>
            Funds
          </Link>
          <Link
            to="/admin/users"
            className="p-3 mb-1 w-full flex items-center hover:bg-white hover:text-black"
          >
            <span className="mr-2">
              <AiOutlineTeam size={25} />
            </span>
            Users
          </Link>
        </div>
        <div>
          <Link
            to="/"
            onClick={logoutHandler}
            className="text-red-500 p-3 mb-1 w-full flex items-center hover:bg-red-500 hover:text-white"
          >
            <span className="mr-2">
              <AiOutlineAccountBook size={25} />
            </span>
            Logout
          </Link>
        </div>
      </aside>
      <div className="max-h-full col-span-5">
        <div className="flex border-b h-14 items-center justify-end p-5 bg-white">
          {userInfo ? (
            <p className="flex items-center p-2 hover:bg-slate-100 rounded-full">
              {userInfo?.name}
              <span>
                <AiOutlineUser size={20} className="ml-2" />
              </span>
            </p>
          ) : (
            ""
          )}
        </div>
        <ToastContainer />
        <div className="h-full overflow-y-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Administration;
