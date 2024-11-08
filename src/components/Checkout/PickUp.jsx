import React from "react";

const PickUp = () => {
  return (
    <>
      <div className="flex items-center mb-4">
        <h2 className="text-lg font-bold">Penjemputan E-Waste</h2>
      </div>
      <div className="p-4 bg-gray-100 rounded-md">
        <div className="border-b-2 border-b-slate-300 pb-4">
          <div className="flex items-center space-x-4">
            <img
              src="/images/kulkas.png"
              alt="Product"
              className="w-20 h-20 rounded-md"
            />
            <div className="flex justify-between w-full">
              <p className="font-semibold">Kulkas 100 pintu</p>
              <p className="text-gray-600">1 x 50 Points</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PickUp;
