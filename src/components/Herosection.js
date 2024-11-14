import React, { useEffect, useState } from 'react';
import img_1 from '../assets/images/herosection-img-1.webp';
import img_2 from '../assets/images/herosection-img-2.webp';
import img_3 from '../assets/images/herosection-img-3.webp';
import down_arrow from '../assets/images/down-arrow.png';
import '@fontsource/orbitron'; 
import '@fontsource/montserrat';

const images = [img_1, img_2, img_3];

function Herosection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='container bg-[#d5a53f]'>
      <div className='bg-[#0b0c15]'>
        <div className='lg:w-1/2 px-4 py-16 lg:py-32 xl:py-36 gap-8 md:flex items-center justify-center lg:mx-auto'>
          {/* Left side */}
          <div className='md:w-1/2'>
            <h1 className='text-2xl md:text-3xl font-orbitron text-white font-bold py-3 lg:py-5 border-t-2 border-[#d5a53f] border-b-2'>
              Buy MoonBoxes<br/> 
              <span className='text-[#d5a53f]'>and expand your NFT collection</span>
            </h1>
            <div className='lg:w-64'>
              <p className='text-[#d5a53f] font-montserrat text-base pt-6'>
                Buying MoonBoxes is a unique way to acquire NFTs and build your collection. It is built on the Binance Smart Chain, MoonRiver, Polygon, Ethereum, and DogeChain. Only available on <span className='text-white'>MoonBoxes.io</span>
              </p>
              {/* Button */}
              <div className='py-6 flex gap-4 lg:gap-6'>
                <button className='text-black font-montserrat bg-[#d5a53f] font-bold py-2 px-8 rounded-full'>
                  Buy A MoonBox
                </button> 
                <a href='#slider'>
                  <img src={down_arrow} alt='down_arrow' className='w-10 cursor-pointer'/>
                </a>
              </div>
            </div>
          </div>
          
          {/* Right side: Carousel */}
          <div className='md:w-1/2'>
            <div className='relative w-full overflow-hidden'>
              <img 
                src={images[currentIndex]} 
                alt={`Slide ${currentIndex + 1}`} 
                className='w-full object-cover transition-opacity' // 2s for slow smooth transition
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Herosection;
