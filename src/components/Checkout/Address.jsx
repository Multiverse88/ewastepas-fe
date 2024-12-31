import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const Address = () => {
  return (
    <div className="w-full mx-auto">
      {/* Header */}
      <div className="flex items-center text-primary mb-4">
        <FaLocationDot className="mr-2 text-base sm:text-lg" />
        <h2 className="text-base sm:text-lg font-bold">Alamat Pengiriman</h2>
      </div>

      {/* Konten Alamat */}
      <div className="p-4 bg-gray-100 rounded-md shadow-sm">
        <p className="font-bold text-sm sm:text-base">Aufaa Husniati</p>
        <p className="text-xs sm:text-sm mt-2">
          jl. Lorem ipsum, No. 45, 02/07, Babakan lorem, Kota Bandung, Jawa
          Barat, 6285156983812
        </p>
        <div className="mt-4 space-x-2">
          <button className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 transition">
            Ganti Alamat
          </button>
        </div>
      </div>
    </div>
  );
};

export default Address;
