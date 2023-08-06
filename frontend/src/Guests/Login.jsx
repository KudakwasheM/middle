import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../slices/authApiSlice";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      let role = userInfo.role;
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
          navigate("/login");
          break;
      }
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="flex flex-col border md:w-[400px] p-5">
        <h1 className="text-center text-[rgb(0,223,154)] text-4xl font-bold mb-5">
          Middle.
        </h1>
        <p className="text-2xl text-center mb-3">Login into your account</p>
        <form className="flex flex-col">
          <div className="flex flex-col mb-2">
            <label htmlFor="" className="mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              className="border p-2"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="" className="mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              className="border p-2"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="">
            <button
              className="bg-[rgb(0,223,154)] py-2 w-full text-white"
              type="submit"
              onClick={submitHandler}
            >
              {isLoading ? "...Loading" : "Login"}
            </button>
          </div>
        </form>
        <p className="text-sm">
          You do not have an account?{" "}
          <Link
            to="/register"
            className="text-[rgb(0,223,154)] hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
