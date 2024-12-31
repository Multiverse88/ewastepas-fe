import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className="flex justify-center items-center py-4 sm:py-8">
      <div className="relative w-full px-4 sm:px-0 sm:max-w-md">
        <input
          type="text"
          className="w-full p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-1 focus:ring-primary bg-gray-50 text-sm md:text-base"
          placeholder="Cari Sampah Elektronik..."
        />
        <button className="absolute right-8 top-1/2 transform -translate-y-1/2 sm:right-4">
          <FiSearch className="h-5 w-5 text-gray-500 sm:h-6 sm:w-6" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
