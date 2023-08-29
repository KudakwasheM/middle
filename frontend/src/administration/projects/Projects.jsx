import React, { useEffect, useState } from "react";
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";
import { useGetAllProjectsQuery } from "../../slices/projectsApiSlice";
import {
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineEye,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { InfinitySpin } from "react-loader-spinner";
import ReactPaginate from "react-paginate";
import axiosClient from "../../axiosClient";

const Projects = () => {
  const per2 = 80;
  // const { data, isLoading, isSuccess, isError, error } =
  //   useGetAllProjectsQuery();
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  const filteredProjects = projects.filter((project) => {
    // Specify your filter conditions here
    return search.toLowerCase() === ""
      ? project
      : project.name.toLowerCase().includes(search)
      ? project
      : project.location.toLowerCase().includes(search);
  });

  const itemsPerPage = 3;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredProjects.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredProjects.length / itemsPerPage);

  const getProjects = async (e) => {
    setLoading(true);
    await axiosClient
      .get("/projects")
      .then((res) => {
        setLoading(false);
        setProjects(res.data.projects);
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err?.response?.data?.message || err.message);
      });
  };

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredProjects.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="bg-white p-3 w-full">
      <div className="flex justify-between items-center mb-3">
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
      <input
        type="text"
        placeholder="Search for a user (name, email, username, role)"
        className="w-full p-2 text-lg border rounded-lg"
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading ? (
        <div className="flex flex-col justify-center items-center">
          <InfinitySpin width="200" color="#4fa94d" />
          <p className="text-[#4fa94d] text-lg">Loading...</p>
        </div>
      ) : (
        <>
          {currentItems ? (
            <>
              {currentItems.length > 0 ? (
                <div className="grid grid-cols-3 gap-5 py-3">
                  {currentItems.map((project) => {
                    return (
                      <div
                        className="flex flex-col border rounded-lg bg-white hover:shadow-xl"
                        key={project._id}
                      >
                        <div className="h-32">No Image</div>
                        <div className="w-full bg-slate-500 h-[3px]">
                          <div
                            className="bg-[rgb(0,223,154)] h-full"
                            style={{
                              width:
                                (project.raised_fund / project.expected_fund) *
                                  100 +
                                "%",
                            }}
                          ></div>
                        </div>

                        <div className="p-3">
                          <h2 className="font-semibold mb-2">{project.name}</h2>
                          <p className="mb-2 flex items-center text-sm">
                            <GoLocation size={18} className="text-blue-500" />
                            <span className="ml-1">{project.location}</span>
                          </p>
                          <p className="text-gray-700">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Culpa animi illum ipsam maxime quas
                            perspiciatis deserunt esse ex. Consequatur rem atque
                            dolore, corporis quasi mollitia fugit hic animi. Eum
                            id consectetur sed quisquam assumenda magnam ullam
                            velit, esse dolor dolorem dicta nam reiciendis earum
                            reprehenderit error odio fugiat quis? Quo.
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
                          <div className="flex justify-around  border-t pt-3 mt-3">
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
                <p className="text-xl font-bold text-center py-5">
                  No projects found
                </p>
              )}
            </>
          ) : (
            <p className="text-xl font-bold text-center py-5">
              No projects found
            </p>
          )}
        </>
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
      {/* {projectsList} */}
    </div>
  );
};

export default Projects;
