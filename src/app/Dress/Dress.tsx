"use client";
import DressGallery from "./DressGallery/DressGallery";
import Image from "next/image";
import React from "react";

const Dress: React.FC = () => {
  return (
    <section className='w-screen flex flex-col items-center my-[4rem] overflow-x-hidden border border-t-orange-600'>
      {/* Dress Code */}
      <div className='mr-auto px-[2rem] lg:px-[12rem] font-canela font-thin text-gray-700 text-[2.5rem] md:text-[3.9rem] lg:text-[4rem] capitalize leading-none my-[4rem] flex items-center'>
        <div className='flex flex-col'>
          <h1 className='transform translate-x-[0%]'>Dress</h1>
          <h1 className='transform translate-x-[4rem]'>Code</h1>
        </div>
        <div className='ml-[3rem] lg:ml-[4rem]'>
          <Image
            src='/images/dress/icon-dress.png'
            alt='Church Icon'
            height={100} // Adjust this height as necessary
            width={100} // Adjust this width as necessary to maintain aspect ratio
            className='object-contain h-[3.5rem] lg:h-[5rem] opacity-80'
          />
        </div>
      </div>

      {/* Dress Code Details */}
      <div className='font-calibri font-light text-gray-500 text-center w-[90%] md:w-[60%] lg:w-[40%] leading-[1.75rem] mb-[2rem]'>
        <p className='text-[1.2rem] md:text-[1.2rem]'>
          The suggested Wedding Dress Code is{' '}
          <span className='font-bold'>Traditional</span>
        </p>
      </div>

      {/* Pinterest Link */}
      <div className='font-calibri text-center mb-[2rem] px-8'>
        <p className='text-[1rem] text-gray-600'>
          For inspiration, explore our Pinterest board to see potential looks:
        </p>
        <a
          href='https://pin.it/2pRajzcbP'
          target='_blank'
          rel='noopener noreferrer'
          className='text-orange-600 hover:text-orange-800 hover:underline transition-colors duration-300 text-[1.1rem]'
        >
          Visit the Pinterest Board
        </a>
      </div>

      {/* Slider or Collage */}
      <div className='w-screen lg:px-[12rem]'>
        <DressGallery />
      </div>

      {/* Additional Note */}
      <div className='font-calibri text-gray-500 text-center w-[90%] md:w-[60%] lg:w-[40%] leading-[1.75rem]'>
        <p className='text-[0.9rem] md:text-[1rem] text-gray-400 italic'>
          NB: Please feel free to wear any traditional attire.
        </p>
      </div>
    </section>
  );
};

export default Dress;
