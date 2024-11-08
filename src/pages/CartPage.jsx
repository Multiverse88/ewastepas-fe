import React from "react";
import PickUp from "../components/Cart/PickUp";
import Summary from "../components/Cart/Summary";

const CartPage = () => {
  return (
    <div className="flex justify-center bg-gray-100 py-8 pt-36">
      <div className="w-full sm:w-4/5 px-4 sm:px-0">
        {/* Title */}
        <h2 className="text-2xl font-bold mb-4">Keranjang</h2>

        <div className="flex flex-col lg:flex-row gap-6">
          <PickUp />
          <Summary />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
