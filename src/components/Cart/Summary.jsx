import React from "react";
import { Link } from "react-router-dom";

const Summary = () => {
  return (
    <div className="w-full max-w-md mx-auto lg:max-w-sm bg-white p-4 sm:p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-4 text-center lg:text-left">
        Ringkasan E-Waste
      </h3>
      <div className="border-t border-gray-300 mt-2 pt-4">
        <div className="flex justify-between text-gray-700 mb-4 text-sm sm:text-base">
          <span>Total E-Waste</span>
          <span>1</span>
        </div>
      </div>
      <Link to="/CheckoutPage" className="mt-4 w-full block">
        <button className="w-full bg-primary text-white py-2 rounded-md font-semibold text-sm sm:text-base hover:bg-primary-dark transition">
          Konfirmasi E-Waste
        </button>
      </Link>
    </div>
  );
};

export default Summary;
