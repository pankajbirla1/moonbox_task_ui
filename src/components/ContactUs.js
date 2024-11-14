import React from 'react'
import astro_img from '../assets/images/astro_painter.png';
function ContactUs() {
  return (
   <section className='container bg-[#d5a53f]'>
      <div className='bg-[#0b0c15]'>
          <div className='lg:w-1/2 px-4 py-16 xl:py-20 gap-8 lg:gap-12 xl:gap-16 md:flex items-center justify-center lg:mx-auto'>
              {/* Left side */}
              <div className='md:w-1/2'>
                  <h1 className='text-2xl md:text-3xl font-orbitron text-white font-bold py-5 border-t-2 border-[#d5a53f] border-b-2'>
                   Call for artists!<br/> 
                    <span className='text-[#d5a53f]'>
                    Applications are open for all artists & creators</span>
                 </h1>
                  {/* Button */}
                <div className='py-6'>
                  <button className='text-[#d5a53f] border border-[#d5a53f] font-montserrat bg-[#0b0c15] font-bold py-2 px-12 rounded-full mr-2'>
                    Contact Us
                  </button> 
                  <button className='text-black font-montserrat bg-[#d5a53f] font-bold py-2 px-6 mt-4  rounded-full'>
                    Application From
                  </button> 
                </div>
              </div>
              {/* Right side */}
              <div className='pt-8 md:pt-0'>
                <img src={astro_img} alt='astro_img'/>
              </div>
          </div>
      </div>
   </section>
  )
}

export default ContactUs