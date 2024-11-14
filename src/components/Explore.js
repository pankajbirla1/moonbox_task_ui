import React from 'react'

function Explore() {
  return (
    <section className='container bg-[#d5a53f]'>
        <div className='bg-[#0b0c15]'>
             <p className='text-[#d5a53f] font-montserrat lg:text-lg text-base font-bold text-center pb-4 md:pb-8 xl:pb-10'>The RaBbitsNFT series</p>
            <div className='lg:w-1/2 px-4 pb-20 lg:pb-32 xl:pb-36 gap-8 xl:gap-20 md:flex justify-center md:mx-auto'>
                    {/* Left side */}
                <div>
                     <h1 className='md:text-3xl text-2xl font-orbitron text-white font-bold py-5 xl:py-6 border-t-2 border-[#d5a53f] border-b-2'>
                         MoonBoxes.io<br/> 
                        <span className='text-[#d5a53f]'>your base to purchase NFTs</span>
                    </h1>
                </div>    
                {/* Right side */}
                <div className='lg:w-1/2 border-t-2 '>
                    <p className='text-[#d5a53f] font-montserrat text-base pt-6'><span className='text-white'>MoonBoxes.io</span>offers you a complete overview of upcoming, active and recent NFT drops.</p>
                    <p className='text-[#d5a53f] font-montserrat text-base pt-6'><span className='text-white'>MoonBoxes.io</span>will be home to collectors and amazing NFT artists.</p>
                    <div className='py-6'>
                        <button className='text-black font-montserrat bg-[#d5a53f] hover:bg-white font-bold py-2 px-12 rounded-full'>
                         Explore
                        </button> 
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Explore