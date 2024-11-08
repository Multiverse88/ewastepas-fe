import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    onSearch(searchTerm);
  }, [searchTerm, onSearch]); // Pastikan array dependensi benar

  return (
    <div className="flex justify-center items-center py-8">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          className="w-full p-2 rounded-full border border-transparent focus:outline-none ring-2 ring-primary focus:ring-secondary bg-gray-50"
          placeholder="Cari Sampah Elektronik..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <FiSearch className="h-6 w-6 text-gray-500" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;