import React, { useEffect, useState } from "react";
import {
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineEye,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { useGetAllUsersQuery } from "../../slices/usersApiSlice";
import ReactPaginate from "react-paginate";
import SearchBar from "../components/SearchBar";

const Users = () => {
  const [search, setSearch] = useState("");
  const { data, isLoading, isSuccess, isError, error } = useGetAllUsersQuery();
  const [currentPage, setCurrentPage] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredUsers.length;
    setItemOffset(newOffset);
  };

  let usersList = null;

  if (isLoading) {
    usersList = <p>...Loading</p>;
  } else if (isSuccess) {
    const users = data.users;
    const filteredUsers = users.filter((user) => {
      // Specify your filter conditions here
      return search.toLowerCase() === ""
        ? user
        : user.name.toLowerCase().includes(search)
        ? user
        : user.email.toLowerCase().includes(search)
        ? user
        : user.username.toLowerCase().includes(search)
        ? user
        : user.role.toLowerCase().includes(search);
    });

    const itemsPerPage = 2;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = filteredUsers.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(filteredUsers.length / itemsPerPage);

    usersList = (
      <>
        {currentItems.length > 0 ? (
          <div className="grid grid-cols-4 gap-5 text-center py-5">
            {currentItems
              // .filter((user) => {
              //   return search.toLowerCase() === ""
              //     ? user
              //     : user.name.toLowerCase().includes(search)
              //     ? user
              //     : user.email.toLowerCase().includes(search)
              //     ? user
              //     : user.username.toLowerCase().includes(search);
              // })
              .map((user) => {
                return (
                  <div className="flex flex-col border rounded-lg bg-white p-5">
                    <div className="mx-auto">
                      <img
                        src=""
                        alt=""
                        className="h-24 w-24 rounded-full p-1 border-2 border-[rgb(0,223,154)]"
                      />
                    </div>
                    <div className="mt-5">
                      <h2 className="font-semibold mb-2">{user.name}</h2>
                      <p className="py-[1px]">{user.username}</p>
                      <p className="py-[1px] italic">{user.email}</p>
                      <p className="py-[1px]">{user.role}</p>
                      <div className="flex justify-around py-3">
                        <div className="flex items-center text-sm">
                          {user.active ? (
                            <span className="rounded-full h-4 w-4 bg-green-500"></span>
                          ) : (
                            <span className="rounded-full h-4 w-4 bg-red-500"></span>
                          )}{" "}
                          <p className="ml-2">Active</p>
                        </div>
                        <div className="flex items-center text-sm">
                          {user.subscribed ? (
                            <span className="rounded-full h-4 w-4 bg-green-500"></span>
                          ) : (
                            <span className="rounded-full h-4 w-4 bg-red-500"></span>
                          )}{" "}
                          <p className="ml-2">Subscribed</p>
                        </div>
                      </div>
                      <div className="flex justify-around  border-t pt-3">
                        <AiOutlineEye
                          size={22}
                          title="View"
                          className="text-green-500"
                        />
                        <AiOutlineEdit
                          size={22}
                          title="Edit"
                          className="text-sky-500"
                        />
                        <AiOutlineDelete
                          size={22}
                          title="Delete"
                          className="text-red-500"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        ) : (
          <p className="text-xl font-bold text-center py-5">No users found</p>
        )}

        <ReactPaginate
          previousLabel={"← Prev "}
          nextLabel={"Next →"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={
            "flex justify-center items-center mb-1 text-lg gap-1 my-4"
          }
          previousLinkClassName={
            "border px-2 py-2 rounded-lg font-semibold hover:bg-[rgb(0,223,154)] hover:border-[rgb(0,223,154)] hover:text-white"
          }
          nextLinkClassName={
            "border px-2 py-2 rounded-lg font-semibold hover:bg-[rgb(0,223,154)] hover:border-[rgb(0,223,154)] hover:text-white"
          }
          pageLinkClassName="py-2 px-2 border rounded-lg font-semibold hover:bg-[rgb(0,223,154)] hover:border-[rgb(0,223,154)] hover:text-white"
          disabledClassName={"pagination__link--disabled"}
          activeLinkClassName={
            "bg-[rgb(0,223,154)] text-white border-[rgb(0,223,154)]"
          }
        />
      </>
    );
  } else if (isError) {
    usersList = <p>{error}</p>;
  }

  useEffect(() => {}, []);
  return (
    <div className="bg-white p-5 w-full">
      <div className="flex justify-between items-center pb-5">
        <h2 className="text-3xl font-semibold">Users</h2>
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
      <div className="">
        <form>
          <input
            type="text"
            placeholder="Search for a user (name, email, username, role)"
            className="w-full p-2 text-lg border rounded-lg"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
      {usersList}
    </div>
  );
};

export default Users;
