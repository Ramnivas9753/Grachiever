import { useState } from "react";

const CardCarousel = ({ cards }) => {
  const [activeCard, setActiveCard] = useState(0);

  const handlePrevClick = () => {
    setActiveCard((activeCard - 1 + cards.length) % cards.length);
  };

  const handleNextClick = () => {
    setActiveCard((activeCard + 1) % cards.length);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-all duration-300"
          style={{
            transform: `translateX(-${activeCard * 100}%)`,
            width: `${cards.length * 100}%`,
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full p-4"
              style={{ minWidth: "320px" }}
            >
              <div className="bg-white rounded-lg shadow-md">
                <img
                  className="object-cover w-full h-64 rounded-t-lg"
                  src={card.image}
                  alt={card.title}
                />
                <div className="p-4">
                  <h2 className="text-lg font-medium">{card.title}okkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk  </h2>
                  <p className="mt-2 text-gray-600">{card.description}okkkkkkkkkkkkkkkkkk</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute inset-y-0 left-0 z-10 flex items-center justify-center w-16 h-full text-gray-500 transition-colors duration-300 hover:text-gray-700 focus:outline-none"
        onClick={handlePrevClick}
      >
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" />
        </svg>
      </button>
      <button
        className="absolute inset-y-0 right-0 z-10 flex items-center justify-center w-16 h-full text-gray-500 transition-colors duration-300 hover:text-gray-700 focus:outline-none"
        onClick={handleNextClick}
      >
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.59 16.59L10 18L16 12L10 6L8.59 7.41L13.17 12L8.59 16.59Z" />
        </svg>
      </button>
    </div>
  );
};

export default CardCarousel;
