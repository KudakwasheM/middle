import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useSetUserMutation } from "../../slices/usersApiSlice";
import { addUser } from "../../slices/usersSlice";
import { toast } from "react-toastify";
import { roles } from "../../layouts/constants/Roles";

const UsersForm = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);
  const [setUser, { isLoading }] = useSetUserMutation();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirm_password) {
      toast.error("Passowrds do not match");
    } else {
      try {
        const res = await setUser({
          name,
          username,
          email,
          role,
          password,
        }).unwrap();
        dispatch(addUser({ ...res }));
        console.log("Wassup");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <div className="w-[400px] mx-auto m-5 p-4 border">
      <h2 className="text-xl font-semibold mb-3">Add User</h2>
      <form>
        <div className="flex flex-col mb-2">
          <label htmlFor="" className="mb-1">
            Email
          </label>
          <input
            type="text"
            value={name}
            className="border p-2"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="">Username</label>
          <input
            type="text"
            value={username}
            className="border p-2"
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="">Email</label>
          <input
            type="email"
            value={email}
            className="border p-2"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="">Role</label>
          <select className="border p-2">
            <option value="" selected disabled>
              -- Select role --
            </option>
            {roles.map((role) => {
              return <option value={role.value}>{role.title}</option>;
            })}
          </select>
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="">Password</label>
          <input
            type="password"
            value={password}
            className="border p-2"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="">Confirm Password</label>
          <input
            type="password"
            value={confirm_password}
            className="border p-2"
            placeholder="Enter your confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="">
          <button
            type="submit"
            className="bg-[rgb(0,223,154)] py-2 w-full text-white"
            onClick={submitHandler}
          >
            {isLoading ? "...Loading" : "Add User"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UsersForm;
