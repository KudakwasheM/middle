import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    console.log("submit");
  };
  return (
    <div>
      Register
      <div className="p-5">
        <label htmlFor="">Name</label>
        <input
          type="text"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="">Username</label>
        <input
          type="text"
          value={username}
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="">Email</label>
        <input
          type="email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="">Role</label>
        <input
          type="text"
          value={role}
          placeholder="Enter your role"
          onChange={(e) => setRole(e.target.value)}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          value={password}
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="">Confirm Password</label>
        <input
          type="password"
          value={confirm_password}
          placeholder="Enter your confirm password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div className="">
          <button>Register</button>
        </div>
        <Link to="/login">Log in</Link>
      </div>
    </div>
  );
};

export default Register;
