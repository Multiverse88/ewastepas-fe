import React from "react";
import { useNavigate } from "react-router-dom";

const ordersData = [
  {
    orderId: "202411220005",
    date: "22 November 2024",
    status: "Sedang di Proses",
    products: [
      {
        id: 1,
        title: "Kulkas Besar",
        points: 50,
        quantity: 1,
        image: "/images/kulkas.png",
      },
      {
        id: 2,
        title: "Kulkas Kecil",
        points: 40,
        quantity: 1,
        image: "/images/kulkas.png",
      },
    ],
  },
];

const OnGoing = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6 px-0 sm:px-0">
      {ordersData.map((order) => {
        const totalPoints = order.products.reduce(
          (total, product) => total + product.points * product.quantity,
          0
        );

        return (
          <div
            key={order.orderId}
            className="p-4 sm:p-6 rounded-lg shadow border border-gray-300"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start mb-4 space-y-2 sm:space-y-0">
              <h3 className="font-semibold text-sm sm:text-base sm:ml-20 sm:-indent-20">
                Order ID #{order.orderId}
              </h3>
              <div className=" flex flex-row justify-between sm:justify-end sm:gap-6 w-full">
                <button
                  className="text-primary  font-semibold text-sm sm:text-base bg-blue-50 hover:bg-blue-200 px-3 py-2 rounded-md"
                  onClick={() => navigate(`/TrackPage/${order.orderId}`)}
                >
                  Track
                </button>
                <span className="bg-yellow-300 text-gray-700 font-semibold text-xs sm:text-sm px-3 py-2 rounded-full">
                  {order.status}
                </span>
              </div>
            </div>

            {/* Products */}
            {order.products.map((product) => (
              <div
                key={product.id}
                className="border-t border-b py-4 flex flex-col sm:flex-row items-center sm:justify-between"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-28 sm:w-32 h-auto object-contain mb-4 sm:mb-0"
                />
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 w-full sm:w-auto">
                  <span className="text-sm sm:text-base font-semibold">
                    {product.title}
                  </span>
                  <span className="text-gray-600 text-sm sm:text-base">
                    {product.quantity} x {product.points} Points
                  </span>
                </div>
              </div>
            ))}

            {/* Footer */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 space-y-2 sm:space-y-0">
              <span className="text-sm text-gray-500">{order.date}</span>
              <span className="font-semibold text-sm sm:text-base">
                Total Points: {totalPoints} Points
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OnGoing;
