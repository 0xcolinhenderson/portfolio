import React, { useState } from "react";
import "./carousel.css";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
      setIsAnimating(false);
    }, 1000);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
      setIsAnimating(false);
    }, 800);
  };

  return (
    <div className="carousel-container">
      <button className="carousel-arrow left" onClick={handlePrev}>
        &lt;
      </button>
      <div className={`carousel-item ${isAnimating ? "fade-out" : "fade-in"}`}>
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