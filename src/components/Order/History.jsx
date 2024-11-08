import React, { useState } from "react";
import SearchBar from "../SearchBar";
import { FaSortAmountDownAlt, FaSortAmountUp } from "react-icons/fa";

const historyData = [
  {
    orderId: "202411210001",
    date: "21 November 2024",
    status: "Selesai",
    products: [
      {
        id: 1,
        title: "Air Conditioner",
        points: 100,
        quantity: 1,
        image: "/images/kulkas.png",
      },
    ],
  },
  {
    orderId: "202411200002",
    date: "20 November 2024",
    status: "Selesai",
    products: [
      {
        id: 2,
        title: "Vacuum Cleaner",
        points: 80,
        quantity: 1,
        image: "/images/kulkas.png",
      },
      {
        id: 3,
        title: "Toaster",
        points: 20,
        quantity: 1,
        image: "/images/kulkas.png",
      },
    ],
  },
];

const History = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isAscending, setIsAscending] = useState(true);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const toggleSortOrder = () => {
    setIsAscending(!isAscending);
  };

  const sortedData = [...historyData].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return isAscending ? dateA - dateB : dateB - dateA;
  });

  const filteredData = sortedData.filter((order) =>
    order.products.some((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <>
      <div className="flex items-center justify-center mb-4 space-x-2 max-w-lg mx-auto">
        <div className="flex-grow">
          <SearchBar onSearch={handleSearch} />
        </div>
        <button
          onClick={toggleSortOrder}
          className="text-gray-600 cursor-pointer"
        >
          {isAscending ? (
            <FaSortAmountUp size={24} />
          ) : (
            <FaSortAmountDownAlt size={24} />
          )}
        </button>
      </div>
      <div className="space-y-6">
        {filteredData.map((order) => {
          const totalPoints = order.products.reduce(
            (total, product) => total + product.points * product.quantity,
            0
          );

          return (
            <div
              key={order.orderId}
              className="bg-white p-6 rounded-lg shadow w-full"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Order ID#{order.orderId}</h3>
                <span className="bg-green-300 text-gray-700 font-semibold px-3 py-1 rounded-full">
                  {order.status}
                </span>
              </div>
              {order.products.map((product) => (
                <div key={product.id} className="border-t border-b py-4">
                  <div className="flex justify-between items-center">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-40 object-contain"
                    />
                    <span className="mr-[300px] font-semibold">
                      {product.title}
                    </span>
                    <span>
                      {product.quantity} x {product.points} Points
                    </span>
                  </div>
                </div>
              ))}
              <div className="flex justify-between items-center mt-4">
                <span>{order.date}</span>
                <span className="font-semibold">
                  Total Points: {totalPoints} Points
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default History;
