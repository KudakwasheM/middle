import { Navigate, Route, createBrowserRouter } from "react-router-dom";
import Guests from "./layouts/Guests";
import Administration from "./layouts/Administration";
import Enterprenuer from "./layouts/Enterprenuer";
import Investor from "./layouts/Investor";
import Index from "./Guests/Index";
import Login from "./Guests/Login";
import Register from "./Guests/Register";
import AdminDash from "./administration/AdminDash";
import EnterprenuerDash from "./enterprenuer/EnterprenuerDash";
import NotFound from "./NotFound";
import InvestorDash from "./investor/InvestorDash";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Guests />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
  {
    path: "/admin",
    element: <Administration />,
    children: [
      { path: "/admin", element: <Navigate to="/admin/dashboard" /> },
      { path: "dashboard", element: <AdminDash /> },
      // { path: "users", element: <U /> },
    ],
  },
  {
    path: "/enterprenuer",
    element: <Enterprenuer />,
    children: [
      {
        path: "/enterprenuer",
        element: <Navigate to="/enterprenuer/dashboard" />,
      },
      { path: "dashboard", element: <EnterprenuerDash /> },
    ],
  },
  {
    path: "/investor",
    element: <Investor />,
    children: [
      { path: "/investor", element: <Navigate to="/investor/dashboard" /> },
      { path: "dashboard", element: <InvestorDash /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
