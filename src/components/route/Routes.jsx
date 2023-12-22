import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashBoard from "../dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Profile from "../dashboard/Profile";
import AllTask from "../dashboard/AllTask";
import AddTask from "../dashboard/AddTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoard></DashBoard>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/all-tasks",
        element: (
          <PrivateRoute>
            <AllTask></AllTask>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/add-task",
        element: (
          <PrivateRoute>
            <AddTask></AddTask>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
