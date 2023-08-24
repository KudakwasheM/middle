import React, { useState } from "react";
import { AiOutlineBackward, AiOutlineStepBackward } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useSetProjectMutation } from "../../slices/projectsApiSlice";
import { addProject } from "../../slices/projectsSlice";
import Select from "react-select";
import { industries } from "../../layouts/constants/Industries";
import { ToastContainer, toast } from "react-toastify";
import { useGetEnterpreneursQuery } from "../../slices/usersApiSlice";

const ProjectForm = () => {
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [location, setLocation] = useState("");
  const [mobile, setMobile] = useState("");
  const [industry, setIndustry] = useState([]);
  const [expectedFund, setExpectedFund] = useState(0);
  const [raisedFund, setRaisedFund] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [stage, setStage] = useState("");
  const [enter, setEnter] = useState("");

  const navigate = useNavigate();

  const [setProject, { isLoading }] = useSetProjectMutation();
  const { data, isSuccess, isError, error } = useGetEnterpreneursQuery();

  const changeUser = (e) => {
    setEnter(e.value);
    console.log(enter);
  };

  let list = [];
  let usersSelect;
  if (data) {
    const users = data.users;
    users.map((user) => {
      list.push({ value: user._id, label: user.name });
    });
    usersSelect = (
      <div className="flex flex-col mb-2">
        <label htmlFor="">Enterpreneur</label>
        <Select options={list} onChange={changeUser} />
      </div>
    );
  }

  const handleChange = (e) => {
    const inds = e.map(({ value }) => value);
    setIndustry(inds);
  };

  const enterpreneur = (e) => {};

  const submitHandler = async (e) => {
    e.preventDefault();

    if (
      name === "" ||
      location === "" ||
      mobile === "" ||
      industry === "" ||
      expectedFund === "" ||
      raisedFund === "" ||
      percentage === "" ||
      stage === ""
    ) {
      toast.error("Please fill all fields");
      return;
    } else {
      try {
        const res = await setProject({
          name,
          website,
          location,
          mobile,
          industry,
          expected_fund: expectedFund,
          raised_fund: raisedFund,
          investor_percentage: percentage,
          stage,
          enterpreneur: enter,
        }).unwrap();
        dispatch(addProject({ ...res }));
        console.log("Yaita");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };
  return (
    <div className="m-5 p-4 w-[500px] mx-auto border">
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
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="">Website (optional)</label>
            <input
              type="text"
              className="border p-2"
              placeholder="Enter your text"
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="">Location</label>
            <input
              type="text"
              className="border p-2"
              placeholder="Enter your text"
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="">Mobile</label>
            <input
              type="text"
              className="border p-2"
              placeholder="Enter your text"
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="">Industry</label>
            <Select
              // defaultValue={[colourOptions[2], colourOptions[3]]
              isMulti
              options={industries}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="">Expected Fund</label>
            <input
              type="number"
              className="border p-2"
              placeholder="Enter your text"
              onChange={(e) => setExpectedFund(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="">Stage</label>
            <input
              type="text"
              className="border p-2"
              placeholder="Enter your text"
              onChange={(e) => setStage(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="">Raised Fund</label>
            <input
              type="number"
              className="border p-2"
              placeholder="Enter your text"
              onChange={(e) => setRaisedFund(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="">Investors Percentage</label>
            <input
              type="number"
              className="border p-2"
              placeholder="Enter your text"
              onChange={(e) => setPercentage(e.target.value)}
            />
          </div>
          {usersSelect}
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
