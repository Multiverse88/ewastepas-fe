import React from "react";

const CourierInfo = () => {
  return (
    <div className="flex flex-col items-center p-4 sm:p-6 border-2 rounded-lg w-full mx-auto">
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden mb-4">
        <img
          src="/images/hikel.jpg"
          name="Hikel Bahrul Hidayat"
          alt="Foto Courier"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="text-lg sm:text-xl font-semibold">
        Hikel Bahrul Hidayat
      </div>
    </div>
  );
};

export default CourierInfo;
