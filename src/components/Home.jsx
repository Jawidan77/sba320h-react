// src/components/Home.js
import React from 'react';
import Carousel from './Carousel'; // Import the Carousel component

const Home = () => {
    // Array of image paths for the carousel
    const images = [
        '/images/qabili1.jpg',
        '/images/zireshk2.jpg',
        '/images/Bolani2.jpg',
        '/images/adas3.jpg',
        '/images/soup4.jpg'
    ];

    return (
        <div className='carousel-container'>
            <h1>Welcome to Friendly Restaurant</h1>
            {/* Use the Carousel component and pass the images */}
            <Carousel images={images} />
            {/* Add more content for the home page */}
            <p>Enjoy delicious dishes and the best takeout service!</p>
        
        
            
        
        
        </div>
        

    );
};

export default Home;



