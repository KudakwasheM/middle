import { Navigate, Route, createBrowserRouter } from "react-router-dom";
import Guests from "./layouts/guests";
import Administration from "./layouts/administration";
import Enterprenuer from "./layouts/enterprenuer";
import Investor from "./layouts/investor";
import Index from "./Guests/Index";
import Login from "./Guests/Login";
import Register from "./Guests/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Guests />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
  {
    path: "/",
    element: <Administration />,
  },
  {
    path: "/",
    element: <Enterprenuer />,
  },
  {
    path: "/",
    element: <Investor />,
  },
]);

export default router;
