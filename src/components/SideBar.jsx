import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaUser, FaFileAlt, FaBars } from "react-icons/fa";

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  // Debugging: Log lokasi URL saat ini
  console.log("Current Location:", location.pathname);

  return (
    <div>
      {/* Sidebar for large screens */}
      <div className="bg-white hidden lg:block w-64 ml-10 h-auto p-4 rounded-lg border shadow">
        <div className="flex items-center mb-8">
          <div className="bg-gray-300 w-10 h-10 rounded-full flex items-center justify-center">
            <FaUser className="text-xl" />
          </div>
          <span className="ml-4 font-bold">Lorem Ipsum</span>
        </div>
        <ul>
          <li className="mb-4">
            <NavLink
              to="/ProfilePage"
              className={({ isActive }) =>
                `flex items-center cursor-pointer hover:text-primary ${
                  isActive ? "text-primary font-bold" : ""
                }`
              }
            >
              <FaUser className="text-lg" />
              <span className="ml-2">Profil</span>
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink
              to="/OrderPage"
              className={() =>
                `flex items-center cursor-pointer hover:text-primary ${
                  location.pathname.startsWith("/OrderPage") ||
                  location.pathname.startsWith("/TrackPage")
                    ? "text-primary font-bold"
                    : ""
                }`
              }
            >
              <FaFileAlt className="text-lg" />
              <span className="ml-2">Order</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Sidebar for mobile */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-64 h-full bg-white shadow-md transition-transform duration-300 ${
          isSidebarOpen ? "transform-none" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center">
            <div className="bg-gray-300 w-10 h-10 rounded-full flex items-center justify-center">
              <FaUser className="text-xl" />
            </div>
            <span className="ml-4 font-bold">Lorem Ipsum</span>
          </div>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <FaBars className="text-2xl" />
          </button>
        </div>
        <ul className="p-4">
          <li className="mb-4">
            <NavLink
              to="/ProfilePage"
              className={({ isActive }) =>
                `flex items-center cursor-pointer hover:text-primary ${
                  isActive ? "text-primary font-bold" : ""
                }`
              }
            >
              <FaUser className="text-lg" />
              <span className="ml-2">Profil</span>
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink
              to="/OrderPage"
              className={() =>
                `flex items-center cursor-pointer hover:text-primary ${
                  location.pathname.startsWith("/OrderPage") ||
                  location.pathname.startsWith("/TrackPage")
                    ? "text-primary font-bold"
                    : ""
                }`
              }
            >
              <FaFileAlt className="text-lg" />
              <span className="ml-2">Order</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black opacity-50"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default SideBar;
