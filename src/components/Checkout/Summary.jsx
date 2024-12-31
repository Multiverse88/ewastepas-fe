import React from "react";
import { Link } from "react-router-dom";

const Summary = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full max-w-sm mx-auto">
      {/* Judul */}
      <h2 className="text-base sm:text-lg font-bold mb-4">Ringkasan E-Waste</h2>

      {/* Detail Ringkasan */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm sm:text-base">
          <p>Total E-Waste</p>
          <p>2</p>
        </div>
        <div className="flex justify-between text-sm sm:text-base">
          <p>Total Points</p>
          <p>50</p>
        </div>
      </div>

      {/* Tombol Konfirmasi */}
      <Link to="/" className="mt-4 w-full block">
        <button className="w-full bg-primary text-white py-2 rounded-md font-semibold text-sm sm:text-base hover:bg-primary-dark transition">
          Konfirmasi E-Waste
        </button>
      </Link>
    </div>
  );
};

export default Summary;
