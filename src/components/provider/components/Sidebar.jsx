import { useState } from "react";
import { NavLink } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
// import Icon from "@material-tailwind/react/Icon";
// import H6 from "@material-tailwind/react/Heading6";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState("-left-64");
  return (
    <>
      <AdminNavbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div
        className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
      >
        <p className="text-2xl text-blue-700">Provider panel</p>

        <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
          <a
            href="https://material-tailwind.com?ref=mtd"
            target="_blank"
            rel="noreferrer"
            className="mt-2 text-center w-full inline-block"
          >
            {/* <H6 color="gray">Material Tailwind</H6> */}
          </a>
          <div className="flex flex-col">
            <hr className="my-4 min-w-full" />

            <ul className="flex-col min-w-full flex list-none">
              <li className="rounded-lg mb-4">
                <NavLink
                  to="/provider-panel"
                  exact
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                  activeClassName="bg-gray-200 shadow-md"
                >
                  {/* <Icon name="dashboard" size="2xl" />
                  Dashboard */}
                  Dashboard
                </NavLink>
              </li>
              <li className="rounded-lg mb-4">
                <NavLink
                  to="/provider-panel/add"
                  exact
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                  activeClassName="bg-gray-200 shadow-md"
                >
                  {/* <Icon name="dashboard" size="2xl" />
                  Dashboard */}
                  Add Service
                </NavLink>
              </li>
              <li className="rounded-lg mb-4">
                <NavLink
                  to="/provider-panel/services"
                  exact
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                  activeClassName="bg-gray-200 shadow-md"
                >
                  {/* <Icon name="dashboard" size="2xl" />
                  Dashboard */}
                  Manage Services
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
