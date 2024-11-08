import React from "react";
import { NavLink } from "react-router-dom";
import { FaUser, FaFileAlt } from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="w-64 ml-10 h-48 p-4 rounded-lg border shadow">
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
            className={({ isActive }) =>
              `flex items-center cursor-pointer hover:text-primary ${
                isActive ? "text-primary font-bold" : ""
              }`
            }
          >
            <FaFileAlt className="text-lg" />
            <span className="ml-2">Order</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
