import React, { useState } from "react";
import "./carousel.css";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  const handlePrev = () => {
    setDirection("prev");
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setDirection("next");
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel-container">
      <button className="carousel-arrow left" onClick={handlePrev}>
        &lt;
      </button>
      <div className={`carousel-item ${direction}`}>
        <div className="carousel-content">
          {items[currentIndex]}
        </div>
      </div>
      <button className="carousel-arrow right" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;