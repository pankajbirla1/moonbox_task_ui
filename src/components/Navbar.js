import React from 'react';
import icon_1 from '../assets/images/back-button.svg';
import icon_2 from '../assets/images/water-drops.svg';
import icon_3 from '../assets/images/folder.svg';
import icon_4 from '../assets/images/warning.svg';
import icon_5 from '../assets/images/arrow.svg';
import icon_6 from '../assets/images/time.svg';

function Navbar() {
  return (
    <header className='container bg-[#d5a53f] pt-3'>
      <div>
        <p className='text-white font-orbitron md:text-3xl xl:text-4xl text-2xl font-bold pb-3'>
          MOON<span className='text-black font-semibold'>BOXES</span>
        </p>
      </div>
      <div className='flex justify-center bg-[#0b0c15]'>
        <div className='flex justify-center lg:gap-7 xl:gap-7 gap-4 md:gap-6 pb-2 md:pb-3 bg-[#d5a53f] w-72 md:w-96'>
          {/* Icon 1 with hover text */}
          <div className='relative group'>
            <img src={icon_1} alt='' className='w-8 cursor-pointer' />
            <span className='absolute top-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm md:text-base md:w-40 w-32 md:mt-1 rounded-md p-1 opacity-0 group-hover:opacity-100 transition-opacity'>
              Back 
            </span>
          </div>
          {/* Icon 2 with hover text */}
          <div className='relative group'>
            <img src={icon_2} alt='' className='w-8 cursor-pointer' />
            <span className='absolute top-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm md:text-base md:w-32 w-32 md:mt-1 rounded-md p-1 opacity-0 group-hover:opacity-100 transition-opacity'>
            Recent, live and upcoming NFT drops
            </span>
          </div>
          {/* Icon 3 with hover text */}
          <div className='relative group'>
            <img src={icon_3} alt='' className='w-8 cursor-pointer' />
            <span className='absolute top-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm md:text-base md:w-40 w-32 md:mt-1 rounded-md p-1 opacity-0 group-hover:opacity-100 transition-opacity'>
            This is your wallet inventory. An
            overview of all NFTs you received out of the MoonBoxes.
            </span>
          </div>
          {/* Icon 6 with hover text */}
          <div className='relative group'>
            <img src={icon_6} alt='' className='w-8 cursor-pointer' />
            <span className='absolute top-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm md:text-base md:w-40 w-32 md:mt-1 rounded-md p-1 opacity-0 group-hover:opacity-100 transition-opacity'>
            This is your history.
              An overview of your MoonBox NFT claims.
            </span>
          </div>
          {/* Icon 4 with hover text */}
          <div className='relative group'>
            <img src={icon_4} alt='' className='w-8 cursor-pointer' />
            <span className='absolute top-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm md:text-base md:w-40 w-32 md:mt-1 rounded-md p-1 opacity-0 group-hover:opacity-100 transition-opacity'>
              Warning
            </span>
          </div>
          {/* Icon 5 with hover text */}
          <div className='relative group'>
            <img src={icon_5} alt='' className='w-8 cursor-pointer' />
            <span className='absolute top-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm md:text-base md:w-40 w-32 md:mt-1 rounded-md p-1 opacity-0 group-hover:opacity-100 transition-opacity'>
              Arrow
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
