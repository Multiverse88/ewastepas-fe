import React from "react";

const UpperBar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex flex-row mb-4 border rounded-lg border-gray-200">
      {/* Button On Going */}
      <button
        onClick={() => setActiveTab("ongoing")}
        className={`flex-1 text-center py-3 text-sm sm:text-base ${
          activeTab === "ongoing"
            ? "text-white bg-primary font-semibold"
            : "text-gray-600 hover:bg-gray-100"
        } rounded-l-lg`}
      >
        On Going
      </button>

      {/* Button History */}
      <button
        onClick={() => setActiveTab("history")}
        className={`flex-1 text-center py-3 text-sm sm:text-base ${
          activeTab === "history"
            ? "text-white bg-primary font-semibold"
            : "text-gray-600 hover:bg-gray-100"
        } rounded-r-lg`}
      >
        Histori
      </button>
    </div>
  );
};

export default UpperBar;
