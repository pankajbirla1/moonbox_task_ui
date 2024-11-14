import React, { useState, useEffect } from 'react';
import img_1 from '../assets/images/slider-img-1.webp';
import img_2 from '../assets/images/slider-img-2.webp';
import img_3 from '../assets/images/slider-img-3.webp';
import img_4 from '../assets/images/slider-img-4.webp';
import img_5 from '../assets/images/slider-img-5.webp';
import img_6 from '../assets/images/slider-img-6.webp';
import img_7 from '../assets/images/slider-img-7.webp';
import img_8 from '../assets/images/slider-img-8.webp';
import img_9 from '../assets/images/slider-img-9.webp';
import img_10 from '../assets/images/slider-img-10.webp';

const images = [img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8, img_9, img_10];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 3 seconds

    // Clear the interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='container bg-[#d5a53f] ' id='slider'>
      <section className="flex justify-center pt-4 bg-[#0b0c15]">
        <div className=" relative flex justify-center overflow-hidden w-[300px] h-[300px]">
          {images.map((image, index) => {
            const position = index - currentIndex;
            const isCenter = position === 0;
            const isLeft = position === -1 || (index === images.length - 1 && currentIndex === 0);
            const isRight = position === 1 || (index === 0 && currentIndex === images.length - 1);

            return (
              <img
                key={index}
                src={image}
                alt={`img_${index + 1}`}
                className={`transition-all duration-500 object-cover absolute 
                  ${isCenter ? 'w-48 h-48 opacity-100 scale-100' : 'w-40 h-40 opacity-40 scale-90'} 
                  ${isLeft ? '-translate-x-[100%] left-0' : ''} 
                  ${isRight ? 'translate-x-[100%] right-0' : ''}`}
                style={{
                  zIndex: isCenter ? 10 : 5,
                  transform: isCenter ? 'translateX(0)' : '',
                }}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default ImageSlider;
