import React from "react";
import { AiOutlineBackward, AiOutlineStepBackward } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useSetProjectMutation } from "../../slices/projectsApiSlice";
// import Select from 'react-select'
import { industries } from "../../layouts/constants/Industries";

const ProjectForm = () => {
  const navigate = useNavigate();

  const [setProject, { isLoading }] = useSetProjectMutation();

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="p-5 w-[500px] mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold mb-3">Add Project</h2>
        <button
          onClick={() => navigate(-1)}
          className="text-red-500 p-1 border-2 rounded-full border-red-500"
        >
          <BiArrowBack size={20} className="" />
        </button>
      </div>
      <div className="">
        <form>
          <div className="flex flex-col mb-2">
            <label htmlFor="">Project Name</label>
            <input
              type="text"
              className="border p-2"
              placeholder="Enter your project name"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="">Website (optional)</label>
            <input
              type="text"
              className="border p-2"
              placeholder="Enter your text"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="">Location</label>
            <input
              type="text"
              className="border p-2"
              placeholder="Enter your text"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="">Mobile</label>
            <input
              type="text"
              className="border p-2"
              placeholder="Enter your text"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="">Industry</label>
            <input
              type="text"
              className="border p-2"
              placeholder="Enter your text"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="">Expected Fund</label>
            <input
              type="text"
              className="border p-2"
              placeholder="Enter your text"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="">Stage</label>
            <input
              type="text"
              className="border p-2"
              placeholder="Enter your text"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="">Raised Fund</label>
            <input
              type="text"
              className="border p-2"
              placeholder="Enter your text"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="">Investors Percentage</label>
            <input
              type="text"
              className="border p-2"
              placeholder="Enter your text"
            />
          </div>
          <div className="">
            <button
              type="submit"
              className="bg-[rgb(0,223,154)] py-2 w-full text-white"
              onClick={submitHandler}
            >
              {isLoading ? "...Loading" : "Add Project"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;
