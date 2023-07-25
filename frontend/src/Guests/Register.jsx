import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useRegisterMutation } from "../slices/authApiSlice";
import { setCredentials } from "../slices/authSlice";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);
  const [register, { isLoading }] = useRegisterMutation();

  useEffect(() => {
    if (userInfo) {
      let role = userInfo.role;
      console.log(role);
      switch (role) {
        case "Admin":
          navigate("/admin");
          break;
        case "Interprenuer":
          navigate("/enterprenuer");
          break;
        case "Investor":
          navigate("/investor");
          break;
        default:
          // navigate("/");
          break;
      }
      // navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirm_password) {
      toast.error("Passowrds do not match");
    } else {
      try {
        const res = await register({
          name,
          username,
          email,
          role,
          password,
        }).unwrap();
        dispatch(setCredentials({ ...res }));
        console.log(res);
        // navigate("/");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <div>
      Register
      <div className="p-5">
        <form>
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
            <button type="submit" onClick={submitHandler}>
              {isLoading ? "...Loading" : "Register"}
            </button>
          </div>
        </form>
        <Link to="/login">Log in</Link>
      </div>
    </div>
  );
};

export default Register;
