import React,{useEffect} from 'react';
import { useState } from 'react';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
      {
        id: 1,
        content: (
          <div className="bg-white rounded-lg p-6">
            <span className="font-thin p-2">
             1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Quasi reiciendis, minima eaque voluptatibus commodi enim soluta laboriosam veniam, 
              ratione voluptatem .
            </span>
          </div>
        ),
      },
      {
        id: 2,
        content: (
          <div className="bg-white rounded-lg p-6">
            <span className="font-thin p-2">
             2 Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Quasi reiciendis, minima eaque voluptatibus commodi enim soluta laboriosam veniam, 
              ratione voluptatem .
            </span>
          </div>
        ),
      },
      {
        id: 3,
        content: (
          <div className="bg-white rounded-lg p-6">
            <span className="font-thin p-2">
              3 Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Quasi reiciendis, minima eaque voluptatibus commodi enim soluta laboriosam veniam, 
              ratione voluptatem .
            </span>
          </div>
        ),
      },
    ];

useEffect(()=>{
  setInterval(()=>{
    if(currentSlide >= 0 && currentSlide < 2){
        setCurrentSlide(currentSlide + 1)
    }
    if(currentSlide === 2){
        setCurrentSlide(0)
    }
  },10000)
},[currentSlide])

    const goToSlide = (index : any) => {
        console.log("entra")
        setCurrentSlide(index);
      };

    return (
        <div className="flex-1">
        <div className="relative">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
            className={`absolute bottom-[200px]${
                index === currentSlide ? 'left-0 bottom-[200px] ' : 'left-full opacity-0 top-16'
              } w-full h-full transform transition-transform`}
            >
              {slide.content}
            </div>
          ))}
        </div>
  
        <div className="flex justify-center mt-4">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`w-2 h-2 rounded-full mx-2 cursor-pointer ${
              index === currentSlide ? 'bg-OrangeCooL' : 'bg-gray-300'
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
      </div>
    );
  };

export default Carousel;