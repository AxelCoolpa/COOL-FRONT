import React, { ReactNode } from 'react';
import './carousel.css';

type CarouselProps = {
    children: ReactNode;
  };

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div className="carousel-content-wrapper">
          <div className="carousel-content">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;