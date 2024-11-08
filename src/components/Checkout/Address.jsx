import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const Address = () => {
  return (
    <div>
      <div className="flex text-primary">
        <FaLocationDot className="mr-2 mt-1" />
        <h2 className="text-lg font-bold mb-2">Alamat Pengiriman</h2>
      </div>
      <div className="p-4 bg-gray-100 rounded-md">
        <p className="font-bold">Aufaa Husniati</p>
        <p>
          jl. Lorem ipsum, No. 45, 02/07, Babakan lorem, Kota Bandung, Jawa
          Barat, 6285156983812
        </p>
        <div className="mt-4 space-x-2">
          <button className="text-sm font-semibold text-blue-600">
            Ganti Alamat
          </button>
        </div>
      </div>
    </div>
  );
};

export default Address;
