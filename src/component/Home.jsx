import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const images = ["/image.png", "/image6.png", "/image3.png", "/image4.png", "/image7.png"];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);

    return () => clearInterval(slideInterval);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${images[currentSlide]})` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#AF3700] bg-opacity-10 flex flex-col justify-center items-center text-center p-4 md:p-0">
        <h1 className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-semibold mb-4 md:mb-7">
          Discover the Wonders of Ethiopia
        </h1>
        <p className="text-white text-base sm:text-lg md:text-2xl lg:text-3xl mb-6">
          A Journey Through History and Nature
        </p>
        <Link
          to="/about"
          className="bg-[#AF3700] hover:bg-orange-700 text-white py-2 px-6 sm:py-3 sm:px-10 rounded-lg font-thin text-sm sm:text-lg"
        >
          Learn more
        </Link>
      </div>

      {/* Header */}
      <Header color={"white"} />

      {/* Left arrow */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <button
          onClick={prevSlide}
          className="bg-white bg-opacity-50 rounded-full p-3 sm:p-5 lg:p-7"
        >
          <svg
            className="w-6 h-6 sm:w-8 sm:h-8 lg:w-[80px] lg:h-[80px] text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: "white" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      {/* Right arrow */}
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <button
          onClick={nextSlide}
          className="bg-white bg-opacity-50 rounded-full p-3 sm:p-5 lg:p-7"
        >
          <svg
            className="w-6 h-6 sm:w-8 sm:h-8 lg:w-[80px] lg:h-[80px] text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: "white" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 sm:bottom-8 flex justify-center w-full space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 sm:h-3 sm:w-3 lg:h-3 lg:w-3 rounded-full ${
              index === currentSlide ? "bg-white" : "border border-white"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
