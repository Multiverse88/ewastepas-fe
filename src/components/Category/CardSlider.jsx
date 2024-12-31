import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const categoryData = [
  {
    image: "/images/kulkas.png",
    bgImage: "/images/bg.jpg",
    title: "Lorem",
  },
  {
    image: "/images/kulkas.png",
    bgImage: "/images/bg.jpg",
    title: "Lorem",
  },
  {
    image: "/images/kulkas.png",
    bgImage: "/images/bg.jpg",
    title: "Lorem",
  },
  {
    image: "/images/kulkas.png",
    bgImage: "/images/bg.jpg",
    title: "Lorem",
  },
  {
    image: "/images/kulkas.png",
    bgImage: "/images/bg.jpg",
    title: "Lorem",
  },
  {
    image: "/images/kulkas.png",
    bgImage: "/images/bg.jpg",
    title: "Lorem",
  },
];

const CardSlider = () => {
  const [activeCard, setActiveCard] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleCardClick = (index) => {
    setActiveCard(index);
  };

  const Card = ({ image, bgImage, title, isActive, onClick }) => {
    return (
      <div
        onClick={onClick}
        className={`cursor-pointer transform transition-transform duration-300 
          ${isActive ? "scale-110" : "hover:scale-105"}`}
      >
        <div
          className="relative w-full h-64 bg-cover bg-center rounded-xl shadow-lg"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={image} alt={title} className="w-52 object-contain z-10" />
          </div>
        </div>
        {/* Title */}
        <div className="text-center mt-6 mb-12">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto py-16">
      <Slider {...settings}>
        {categoryData.map((card, index) => (
          <div key={index} className="px-4">
            <Card
              image={card.image}
              bgImage={card.bgImage}
              title={card.title}
              isActive={activeCard === index}
              onClick={() => handleCardClick(index)}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
