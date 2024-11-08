import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { fetchAllWasteTypes } from "../../services/wasteTypeService";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardSlider = ({ onCategorySelect }) => {
  const [wasteTypes, setWasteTypes] = useState([]);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const fetchWasteTypes = async () => {
      try {
        const data = await fetchAllWasteTypes();
        setWasteTypes(data);
      } catch (error) {
        console.error("Error fetching waste types:", error);
      }
    };

    fetchWasteTypes();
  }, []);

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
          slidesToShow: 2,
        },
      },
    ],
  };

  const handleCardClick = (index) => {
    setActiveCard(index);
    onCategorySelect(wasteTypes[index]);
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
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={image} alt={title} className="w-52 object-contain z-10" />
          </div>
        </div>
        <div className="text-center mt-6 mb-12">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto py-16">
      <Slider {...settings}>
        {wasteTypes.map((card, index) => (
          <div key={index} className="px-4">
            <Card
              image={card.image}
              bgImage="/images/bg.jpg"
              title={card.waste_type_name}
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