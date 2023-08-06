import React, { useEffect } from "react";
import {
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineEye,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { useGetAllUsersQuery } from "../../slices/usersApiSlice";

const Users = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetAllUsersQuery();

  let usersList;

  if (isLoading) {
    usersList = <p>...Loading</p>;
  } else if (isSuccess) {
    usersList = (
      <table className="w-full mt-5">
        <thead className="bg-black text-white">
          <tr className="">
            <td className="py-2 text-xl ">Name</td>
            <td className="py-2 text-xl ">Username</td>
            <td className="py-2 text-xl ">Email</td>
            <td className="py-2 text-xl ">Role</td>
            <td className="py-2 text-xl ">Subsrcribed</td>
            <td className="py-2 text-xl ">Active</td>
            <td className="py-2 text-xl ">Actions</td>
          </tr>
        </thead>
        <tbody className="">
          {data.users.map((user) => {
            return (
              <tr className="border-b">
                <td className="py-1 pl-1">{user.name}</td>
                <td className="py-1 pl-1">{user.username}</td>
                <td className="py-1 pl-1">{user.email}</td>
                <td className="py-1 pl-1">{user.role}</td>
                <td className="py-1 pl-1 text-center">
                  {user.role ? (
                    <p className="text-green-500 border border-green-500 p-[1px] rounded-full text-xs px-2">
                      Active
                    </p>
                  ) : (
                    <p className="text-red-500 border border-red-500 p-[1px] rounded-full text-xs px-2">
                      Deactivated
                    </p>
                  )}
                </td>
                <td className="py-1 pl-1 text-center">
                  {user.subscribed ? (
                    <p className="text-green-500 border border-green-500 p-[1px] rounded-full text-xs px-2">
                      Subscribed
                    </p>
                  ) : (
                    <p className="text-red-500 border border-red-500 p-[1px] rounded-full text-xs px-2">
                      Not subscribed
                    </p>
                  )}
                </td>
                <td className="py-1 pl-1">
                  <div className="flex justify-around">
                    <AiOutlineEye className="text-green-500" />
                    <AiOutlineEdit className="text-sky-500" />
                    <AiOutlineDelete className="text-red-500" />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  } else if (isError) {
    usersList = <p>{error}</p>;
  }

  useEffect(() => {}, []);
  return (
    <div className="bg-white m-5 p-4 h-full">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Users</h2>
        <Link
          to="/admin/users/add"
          className="flex items-center bg-green-400 font-semibold py-2 px-3 text-white"
        >
          Add User
          <AiOutlineUserAdd
            size={20}
            className="ml-2"
            style={{ stroke: "white", strokeWidth: "50" }}
          />
        </Link>
      </div>
      {/* {data && data.map((user) => <div>hello</div>)} */}
      {usersList}
    </div>
  );
};

export default Users;
