import React from "react";

const ordersData = [
  {
    orderId: "202411220005",
    date: "22 November2024",
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
  {
    orderId: "202411230006",
    date: "23 November 2024",
    status: "Sedang di Proses",
    products: [
      {
        id: 3,
        title: "Microwave",
        points: 30,
        quantity: 2,
        image: "/images/kulkas.png",
      },
    ],
  },
];

const OnGoing = () => {
  return (
    <div className="space-y-6">
      {ordersData.map((order) => {
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
              <button className="text-primary font-semibold ml-[300px]">
                Track
              </button>
              <span className="bg-yellow-300 text-gray-700 font-semibold px-3 py-1 rounded-full">
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
  );
};

export default OnGoing;
