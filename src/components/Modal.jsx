import React from "react";

const Modal = ({ title, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        <button
          onClick={onClose}
          className="bg-primary text-white rounded-full px-4 py-2"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
