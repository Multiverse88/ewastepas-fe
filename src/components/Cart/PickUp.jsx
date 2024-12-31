import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

const PickUp = () => {
  const [count, setCount] = useState(2);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [fadeAlert, setFadeAlert] = useState(false);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  const handleDelete = () => {
    setShowConfirm(true);
  };

  const confirmDelete = () => {
    setShowConfirm(false);
    setShowAlert(true);
    setFadeAlert(true);

    setTimeout(() => {
      setFadeAlert(false);
      setTimeout(() => setShowAlert(false), 500);
    }, 550);
  };

  const cancelDelete = () => {
    setShowConfirm(false);
  };

  return (
    <div className="flex-1 bg-white p-4 sm:p-6 rounded-xl shadow-lg">
      <div className="border-b border-gray-300 py-2">
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox text-xl w-4 h-6" />
          <span className="ml-4 sm:ml-4 text-gray-700 text-sm sm:text-base">
            Pilih Semua <span className="text-gray-400">(0)</span>
          </span>
        </label>
      </div>

      {/* Sampah */}
      <div className="mt-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center border-b border-gray-300 py-4 space-y-4 sm:space-y-0 justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbo text-xl w-4 h-6 sm:mr-3"
            />
            <img
              src="/images/kulkas.png"
              alt="Produk"
              className="w-16 h-16 sm:mr-4 object-contain"
            />
            <p className="text-gray-700 font-medium text-sm sm:text-base">
              Kulkas 100 pintu
            </p>
          </div>

          <div className="flex items-center ml-auto">
            {/* button Delete */}
            <button
              onClick={handleDelete}
              className="p-1 text-gray-500 hover:text-red-500 transition duration-200"
            >
              <AiOutlineDelete size={24} />
            </button>

            {/* button Increment/Decrement */}
            <div className="flex items-center border border-primary rounded-full w-24 h-10 justify-between px-2 ml-4">
              <button
                onClick={decrement}
                className="text-primary text-lg font-bold hover:text-primary-dark transition duration-200"
              >
                -
              </button>
              <span className="text-gray-800 text-sm sm:text-base">
                {count}
              </span>
              <button
                onClick={increment}
                className="text-primary text-lg font-bold hover:text-primary-dark transition duration-200"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Konfirmasi */}
      {showConfirm && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-center p-6 sm:p-10 rounded-xl shadow-lg w-11/12 max-w-sm sm:max-w-md">
            <p className="text-lg sm:text-xl font-semibold mb-4">
              Apakah Anda yakin?
            </p>
            <p className="text-sm sm:text-md mb-6">
              Ingin menghapus e-waste ini?
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={confirmDelete}
                className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition duration-200"
              >
                Ya, Hapus
              </button>
              <button
                onClick={cancelDelete}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-400 transition duration-200"
              >
                Tidak
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Alert Berhasil dihapus */}
      {showAlert && (
        <div
          className={`fixed bottom-4 right-4 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg transition-all duration-500 ease-out z-50 ${
            fadeAlert ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="font-semibold text-sm sm:text-base">
            E-waste berhasil dihapus!
          </p>
        </div>
      )}
    </div>
  );
};

export default PickUp;
