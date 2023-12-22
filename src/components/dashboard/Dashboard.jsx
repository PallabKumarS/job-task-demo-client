import { Link, NavLink, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { AiOutlineMenu } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import { MdAddTask } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { Toaster } from "react-hot-toast";
import useAuth from "../shared/useAuth";
import Footer from "../layout/Footer";
import userLogo from "../../assets/user.png";
import logo from "/demoLogo.png";
import { BiSolidMoon } from "react-icons/bi";
import { BsSun } from "react-icons/bs";
import { useEffect, useState } from "react";

const DashBoard = () => {
  const { user, logOut, handleAlert } = useAuth();

  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        handleAlert("success", "Logout Successful");
      })
      .catch((error) => {
        handleAlert("error", error.message);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          style={{
            fontSize: "1.125rem",
            margin: "0.75rem 0",
            padding: "0.75rem",
          }}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "font-extrabold text-yellow-500 mr-1 bg-sky-600 p-3 rounded-lg"
              : "mr-1 hover:text-purple-500"
          }
          to={`/dashboard/profile`}
        >
          <CgProfile className="text-xl"></CgProfile>
          My Profile
        </NavLink>
      </li>

      <hr />

      <li>
        <NavLink
          style={{
            fontSize: "1.125rem",
            margin: "0.75rem 0",
            padding: "0.75rem",
          }}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "font-extrabold text-yellow-500 mr-1 bg-sky-600 p-3 rounded-lg"
              : "mr-1 hover:text-purple-500 "
          }
          to={`/dashboard/all-tasks`}
        >
          <FaTasks className="text-xl"></FaTasks>
          All Tasks
        </NavLink>
      </li>

      <hr />

      <li>
        <NavLink
          style={{
            fontSize: "1.125rem",
            margin: "0.75rem 0",
            padding: "0.75rem",
          }}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "font-extrabold text-yellow-500 mr-1 bg-sky-600 p-3 rounded-lg"
              : "mr-1 hover:text-purple-500"
          }
          to={`/dashboard/add-task`}
        >
          <MdAddTask className="text-xl"></MdAddTask>
          Add Tasks
        </NavLink>
      </li>

      <hr />

      <li>
        <a
          onClick={handleLogOut}
          className="text-yellow-500 font-medium text-lg bg-gray-500 p-3 rounded-lg my-3 hover:text-purple-500"
        >
          <BiLogOutCircle className="text-xl"></BiLogOutCircle>
          Logout
        </a>
      </li>
    </>
  );
  return (
    <div>
      {/* navbar section */}
      <div className="bg-blue-200 bg-opacity-50 backdrop-blur-lg">
        <div className="navbar max-w-screen-xl mx-auto p-4">
          <div className="navbar-start">
            <div className="dropdown">
              <label
                htmlFor="my-drawer-2"
                tabIndex={0}
                className="btn btn-ghost lg:hidden"
              >
                <AiOutlineMenu></AiOutlineMenu>
              </label>
            </div>
            <Link to={"/"}>
              <div className="flex items-center ">
                <img
                  className="md:w-2/12 w-8/12 mr-1 md:mr-3"
                  src={logo}
                  alt=""
                />
                <span className="text-lg text-sky-500 md:text-2xl">Task</span>{" "}
                <span className="text-teal-500 text-lg md:text-2xl font-semibold">
                  Manager
                </span>
              </div>
            </Link>
          </div>
          <div className="navbar-end">
            {user && (
              <div className="dropdown dropdown-bottom dropdown-end flex items-center gap-5">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-20 rounded-full">
                    {user?.photoURL ? (
                      <img src={user?.photoURL} />
                    ) : (
                      <img src={userLogo} />
                    )}
                  </div>
                </label>
                <div>
                  <label className="swap swap-rotate">
                    <input onClick={toggleTheme} type="checkbox" />
                    <div className="swap-on">
                      <BiSolidMoon className="text-2xl text-blueViolet"></BiSolidMoon>
                    </div>
                    <div className="swap-off">
                      <BsSun className="text-2xl text-blueViolet"></BsSun>
                    </div>
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* dashboard section */}
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content">
          {/* Page content here */}
          <div className="">
            <Outlet></Outlet>
          </div>
        </div>
        <div className="drawer-side z-0">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <ul className="menu p-4 w-fit min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <div className="text-center mt-5">
              <h1 className="text-teal-500 font-bold">{user?.displayName}</h1>
              <h1 className="font-semibold">{user?.email}</h1>
            </div>
            <div className="md:mt-20 mt-32">{navLinks}</div>
          </ul>
        </div>
      </div>
      <Footer></Footer>
      <Toaster></Toaster>
    </div>
  );
};

export default DashBoard;
