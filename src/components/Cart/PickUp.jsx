import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

const PickUp = () => {
  const [count, setCount] = useState(2);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="flex-1 bg-white p-4 sm:p-6 rounded-lg shadow-md">
      <div className="border-b border-gray-300 py-2">
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2">
            Pilih Semua <span className="text-gray-400"> (0)</span>
          </span>
        </label>
      </div>

      {/* Sampah */}
      <div className="mt-4">
        <div className="flex flex-col sm:flex-row items-start border-b border-gray-300 py-4">
          <input type="checkbox" className="form-checkbox mr-3" />
          <img
            src="/images/kulkas.png"
            alt="Produk"
            className="w-16 h-16 mr-4"
          />
          <div className="flex-1">
            <p className="text-gray-700 font-medium">Kulkas 100 pintu</p>
            <div className="flex items-center justify-between mt-2">
              <p className="text-primary font-semibold">50 Points</p>
              <div className="flex items-center mt-2 sm:mt-0">
                <button className="p-1 text-gray-500 hover:text-red-500 mr-2">
                  <AiOutlineDelete size={32} />
                </button>
                <div className="flex items-center border border-primary rounded-full w-24 h-10 justify-between px-2">
                  <button
                    onClick={decrement}
                    className="text-primary text-lg font-bold"
                  >
                    −
                  </button>
                  <span className="text-gray-800">{count}</span>
                  <button
                    onClick={increment}
                    className="text-primary text-lg font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickUp;
