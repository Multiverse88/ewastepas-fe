import React, { useState } from "react";

const productsData = [
  {
    title: "Laptop",
    points: 30,
    image: "/images/kulkas.png",
    bgImage: "/images/pattern.jpg",
  },
  {
    title: "Laptop",
    points: 30,
    image: "/images/kulkas.png",
    bgImage: "/images/pattern.jpg",
  },
  {
    title: "Laptop",
    points: 30,
    image: "/images/kulkas.png",
    bgImage: "/images/pattern.jpg",
  },
];

const Card = ({ title, points, image, bgImage, onAddToCart }) => {
  return (
    <div className="w-full mx-3">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden w-64 flex flex-col items-center">
        {/* Background */}
        <div
          className="relative w-full h-52 flex justify-center items-center"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Image */}
          <img
            src={image}
            alt={title}
            className="w-44 h-44 object-contain z-0"
          />
        </div>

        {/* Title dan poin */}
        <div className="text-center mt-6 px-6">
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <p className="text-primary text-lg font-medium">{points} Points</p>
        </div>
        {/* Button Add to Cart */}
        <button
          onClick={onAddToCart}
          className="flex items-center justify-center bg-primary font-semibold text-white rounded-full mt-2 mb-4 w-56 py-2 shadow-md transform transition-transform duration-200 hover:scale-105"
        >
          Masukkan ke keranjang
        </button>
      </div>
    </div>
  );
};

const CardProduct = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleAddToCart = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 500);
  };

  return (
    <div className="flex items-center justify-center p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {productsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            points={card.points}
            image={card.image}
            bgImage={card.bgImage}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      {/* Alert */}
      {showAlert && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center">
            {/* Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-green-500 mb-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <p className="sm:text-lg text-base font-medium">
              E-waste berhasil dimasukkan ke keranjang
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardProduct;
