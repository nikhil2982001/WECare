import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ShoeCarousel.css'; 

const ShoeCarousel = ({ shoes }) => {
  return (
  <>
    <div className="carousel-container">
      <Carousel showThumbs={false} infiniteLoop autoPlay>
        {shoes.map((shoe, index) => (
          <div key={index} className="shoe-slide">
            <img src={shoe.image} alt={shoe.name} />
          </div>
        ))}
      </Carousel>
    </div>
    <div id='sp'></div>
    
    
    </>
  );
};

export default ShoeCarousel;
