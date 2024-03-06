import React, { useState, useEffect } from 'react';
import './carousel.scss';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isPaused) {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 3000); 

    return () => clearInterval(intervalId);
  }, [isPaused, images.length]);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleHover = () => {
    setIsPaused((prevState) => !prevState);
  };

  return (
    <div className="carousel" onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <button className="arrow left" onClick={goToPrevious}>
        &lt;
      </button>
      <div className="images-container" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} className="image" style={{margin: "10px"}}/>
        ))}
      </div>
      <button className="arrow right" onClick={goToNext}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
