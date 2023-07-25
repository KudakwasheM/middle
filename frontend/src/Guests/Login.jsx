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

    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  return (
    <div>
      Login
      <div className="p-5">
        <form>
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
              {isLoading ? "...Loading" : "Login"}
            </button>
          </div>
        </form>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Login;
