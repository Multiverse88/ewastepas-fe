import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Hero = () => {
  return (
    <div className="relative overflow-hidden rounded-lg bg-gray-900 text-white max-w-screen-xl mx-auto mt-32">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-900/60" />
        <img
          src="/images/hero.png"
          alt="Hero"
          className="h-full w-full object-cover opacity-50"
        />
      </div>

      <div className="relative z-10 lg:p-10 my-16">
        <div className="flex flex-col  justify-between items-start">
          <div className="mb-8 ">
            <h1 className="text-5xl font-bold leading-tight text-center  mb-8 ">
              <span className="block">Cara Baru</span>
              <span className="block">Daur Ulang</span>
              <span className="whitespace-nowrap">Sampah Elektronikmu</span>
            </h1>

            <div className="flex justify-center mb-12">
              <button className="bg-primary hover:bg-primary text-white px-4 py-2 text-lg font-semibold rounded-full flex items-center">
                Daur Ulang Sekarang
                <IoIosArrowForward className="ml-2 h-10 w-10" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 z-20 bg-white rounded-tl-3xl p-6 shadow-lg text-gray-900 -mb-10">
        <div className="flex justify-between items-center gap-5 mb-4">
          <div className="text-center flex justify-between items-center gap-3">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2">
                <span className="text-primary text-5xl font-semibold block">
                  25
                </span>
                <span className="text-md font-semibold">Total Sampah</span>
              </div>
              <button className="w-full bg-primary hover:bg-primary text-white rounded-full py-1 px-4 flex items-center justify-center mt-4">
                Pilih Sampah
                <IoIosArrowForward className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>

          <span className="border text-primary font-bold h-32 -my-8"></span>

          <div className="text-center flex justify-between gap-3">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2">
                <span className="text-primary text-5xl font-semibold block">
                  500
                </span>
                <span className="text-md font-semibold">Pts</span>
              </div>
              <button className="bg-primary hover:bg-primary text-white rounded-full py-1 px-4 flex items-center justify-center mt-4">
                Tukar Point
                <IoIosArrowForward className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
