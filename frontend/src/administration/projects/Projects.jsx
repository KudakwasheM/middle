import React, { useState } from "react";
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";
import { useGetAllProjectsQuery } from "../../slices/projectsApiSlice";
import { AiOutlineUserAdd } from "react-icons/ai";

const Projects = () => {
  const per2 = 80;
  const { data, isLoading, isSuccess, isError, error } =
    useGetAllProjectsQuery();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredUsers.length;
    setItemOffset(newOffset);
  };

  let projectsList = null;
  if (isLoading) {
    projectsList = <p>...Loading</p>;
  } else if (isSuccess) {
    const projects = data.projects;
    const filteredProjects = projects.filter((project) => {
      // Specify your filter conditions here
      return search.toLowerCase() === ""
        ? project
        : project.name.toLowerCase().includes(search)
        ? project
        : project.location.toLowerCase().includes(search);
    });

    const itemsPerPage = 2;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = filteredProjects.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(filteredProjects.length / itemsPerPage);

    projectsList = (
      <>
        {currentItems.length > 0 ? (
          <div className="grid grid-cols-3 gap-5 py-5">
            {currentItems.map((project) => {
              return (
                <div className="flex flex-col border rounded-lg bg-[rgba(0,223,154,0.05)] hover:shadow-xl">
                  <div className="h-32">No Image</div>
                  <div className="w-full bg-slate-500 h-[3px]">
                    <div
                      className="bg-[rgb(0,223,154)] h-full"
                      style={{ width: `${project.investor_percentage}%` }}
                    ></div>
                  </div>
                  <div className="p-3">
                    <h2 className="font-semibold mb-2">{project.name}</h2>
                    <p className="mb-2 flex items-center text-sm">
                      <GoLocation size={18} className="text-blue-500" />
                      <span className="ml-1">{project.location}</span>
                    </p>
                    <p className="text-gray-700">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Culpa animi illum ipsam maxime quas perspiciatis deserunt
                      esse ex. Consequatur rem atque dolore, corporis quasi
                      mollitia fugit hic animi. Eum id consectetur sed quisquam
                      assumenda magnam ullam velit, esse dolor dolorem dicta nam
                      reiciendis earum reprehenderit error odio fugiat quis?
                      Quo.
                    </p>
                    <div className="flex mt-5 gap-10">
                      <div className="flex flex-col">
                        <p className="text-sm">Target</p>
                        <h3 className="font-semibold">
                          US$ {project.expected_fund}
                        </h3>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-sm">Investors' Percentage</p>
                        <h3 className="font-semibold">
                          {project.investor_percentage}%
                        </h3>
                      </div>
                    </div>
                    <div className="mt-5">
                      <Link
                        to={`/proposals/${project._id}`}
                        className="bg-[rgba(0,223,154,0.75)] hover:bg-[rgba(0,223,154,1)] py-2 px-3 text-white text-sm rounded"
                      >
                        Find Out More
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-xl font-bold text-center py-5">
            No projects found
          </p>
        )}
      </>
    );
  }
  return (
    <div className="bg-white p-5 w-full">
      <div className="flex justify-between items-center pb-5">
        <h2 className="text-3xl font-semibold">Proposals</h2>
        <Link
          to="/admin/projects/add"
          className="flex items-center bg-green-400 font-semibold py-2 px-3 text-white"
        >
          Add Project
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
      {projectsList}
    </div>
  );
};

export default Projects;
