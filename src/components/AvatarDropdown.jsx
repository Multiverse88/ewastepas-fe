import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi"; // Import the dropdown icon

function AvatarDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  return (
    <div className="relative inline-block">
      <button onClick={toggleDropdown} className="flex items-center space-x-2">
        <img
          src="/images/hikel.jpg"
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
        <FiChevronDown className="text-gray-600" />
        {/* Add dropdown icon here */}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
          <Link
            to="/ProfilePage"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:font-semibold hover:text-white"
            onClick={closeDropdown}
          >
            Profil
          </Link>
          <Link
            to="/OrderPage"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:font-semibold hover:text-white"
            onClick={closeDropdown}
          >
            Order
          </Link>
          <Link
            to="/logout"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:font-semibold hover:text-white"
            onClick={closeDropdown}
          >
            Logout
          </Link>
        </div>
      )}
    </div>
  );
}

export default AvatarDropdown;
