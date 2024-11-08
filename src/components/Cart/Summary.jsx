import React from "react";
import { Link } from "react-router-dom";

const Summary = () => {
  return (
    <div className="w-full lg:w-1/4 bg-white p-4 sm:p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-4">Ringkasan E-Waste</h3>
      <div className="border-t border-gray-300 mt-2 pt-4">
        <div className="flex justify-between text-gray-700 mb-4">
          <span>Total E-Waste</span>
          <span>1</span>
        </div>
      </div>
      <Link
        to="/CheckoutPage"
        className="flex items-center justify-center bg-primary font-semibold text-white rounded-full mt-6 mb-6 w-52 py-3 shadow-md transform transition-transform duration-200 hover:scale-105"
      >
        Konfirmasi E-Waste
      </Link>
    </div>
  );
};

export default Summary;
