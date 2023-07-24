import { Navigate, Route, createBrowserRouter } from "react-router-dom";
import Guests from "./layouts/guests";
import Administration from "./layouts/administration";
import Enterprenuer from "./layouts/enterprenuer";
import Investor from "./layouts/investor";
import Index from "./Guests/Index";
import Login from "./Guests/Login";
import Register from "./Guests/Register";
import AdminDash from "./administration/AdminDash";
import EnterprenuerDash from "./enterprenuer/EnterprenuerDash";
import NotFound from "./NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Administration />,
    children: [
      { path: "/", element: <Navigate to="/admin" /> },
      { path: "/admin", element: <AdminDash /> },
    ],
  },
  {
    path: "/",
    element: <Enterprenuer />,
    children: [
      { path: "/", element: <Navigate to="/enterprenuer" /> },
      { path: "/enterprenuer", element: <EnterprenuerDash /> },
    ],
  },
  {
    path: "/",
    element: <Investor />,
  },
  {
    path: "/",
    element: <Guests />,
    children: [{ path: "/", element: <Index /> }],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "*", element: <NotFound /> },
]);

export default router;
