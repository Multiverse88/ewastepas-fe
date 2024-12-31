import React from "react";

const PickUp = () => {
  return (
    <div className="w-full  mx-auto">
      {/* Header */}
      <div className="flex items-center mb-4">
        <h2 className="text-base sm:text-lg font-bold">Penjemputan E-Waste</h2>
      </div>

      {/* Konten Penjemputan */}
      <div className="p-4 bg-gray-100 rounded-md shadow-sm">
        {/* Item Penjemputan */}
        <div className="border-b-2 border-gray-300 pb-4">
          <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            {/* Gambar Produk */}
            <img
              src="/images/kulkas.png"
              alt="Product"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-md object-contain"
            />
            {/* Detail Produk */}
            <div className="flex flex-col sm:flex-row justify-between w-full">
              <p className="font-semibold text-sm sm:text-base">
                Kulkas 100 pintu
              </p>
              <p className="text-gray-600 text-xs sm:text-sm">1 x 50 Points</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickUp;
