// src/components/Carousel.js
import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="carousel">
            <button className="prev" onClick={prevSlide}>&#10094;</button>
            <img src={images[currentIndex]} alt={`carousel-slide-${currentIndex}`} />
            <button className="next" onClick={nextSlide}>&#10095;</button>

            {/* Optional: Carousel dots */}
            <div className="carousel-dots">
                {images.map((_, index) => (
                    <span 
                        key={index}
                        className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Carousel;

