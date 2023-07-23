import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    console.log("submit");
  };
  return (
    <div>
      Login
      <div className="p-5">
        <label htmlFor="">Email</label>
        <input
          type="email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          value={password}
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="">
          <button type="submit" onClick={submitHandler}>
            Login
          </button>
        </div>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Login;
