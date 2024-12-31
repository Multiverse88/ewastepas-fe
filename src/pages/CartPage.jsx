import React from "react";
import PickUp from "../components/Cart/PickUp";
import Summary from "../components/Cart/Summary";

const CartPage = () => {
  return (
    <div className="flex justify-center bg-gray-50 py-8 pt-36">
      <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center lg:text-left">
          Keranjang
        </h2>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* PickUp Section */}
          <div className="flex-1">
            <PickUp />
          </div>

          {/* Summary Section */}
          <div className="w-full lg:w-1/3">
            <Summary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
