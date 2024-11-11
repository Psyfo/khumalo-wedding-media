import Image from "next/image";
import React from "react";

const Accommodation: React.FC = () => {
  return (
    <section className='w-screen flex flex-col items-center my-[4rem] overflow-x-hidden border-t border-t-orange-600'>
      {/* Accommodation Header */}
      <div className='mr-auto px-[2rem] lg:px-[12rem] font-canela font-thin text-gray-700 text-[2.5rem] md:text-[3.9rem] lg:text-[4rem] capitalize leading-none my-[4rem] flex items-center'>
        <div className='flex flex-col'>
          <h1 className='transform translate-x-[0%]'>Durban</h1>
          <h1 className='transform translate-x-[2rem] lg:translate-x-[4rem]'>
            Accommodation
          </h1>
        </div>
        <div className='ml-[3rem] lg:ml-[5rem]'>
          <Image
            src='/images/accommodation/hotel.png'
            alt='Hotel Icon'
            height={100}
            width={100}
            className='object-contain h-[3.5rem] lg:h-[5rem] opacity-70'
          />
        </div>
      </div>

      {/* Accommodation Info Blocks */}
      <div className='w-full px-8 lg:px-[12rem] flex flex-col lg:flex-row'>
        <div className='lg:w-[60%]'>
          <div className='flex mb-4'>
            <div className='w-1/3 font-calibri text-gray-700 text-[0.7rem] md:text-[1.1rem] leading-[2rem] uppercase'>
              <p>Primary Accommodation</p>
            </div>
            <div className='flex-1 font-calibri font-light text-gray-700 text-[1rem] md:text-[1.4rem] leading-[2rem]'>
              <p>Southern Sun Elangeni Hotel</p>
              <p>63 Snell Parade, Durban, ZA 4001</p>
              <a
                href='https://hotelreservations.southernsun.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-orange-600 hover:underline'
              >
                Visit Website
              </a>
            </div>
          </div>
          <div className='flex mb-4'>
            <div className='w-1/3 font-calibri text-gray-700 text-[0.7rem] md:text-[1.1rem] leading-[2rem] uppercase'>
              <p>Room Rates</p>
            </div>
            <div className='flex-1 font-calibri font-light text-gray-700 text-[1rem] md:text-[1.4rem] leading-[2rem]'>
              <p>Standard Room (sleeps 2): R1,526 per night with breakfast</p>
              <p>
                Elangeni Double Room (sleeps 4): R1,845 per night with breakfast
              </p>
            </div>
          </div>
          <div className='flex mb-4'>
            <div className='w-1/3 font-calibri text-gray-700 text-[0.7rem] md:text-[1.1rem] leading-[2rem] uppercase'>
              <p>Contact Person</p>
            </div>
            <div className='flex-1 font-calibri font-light text-gray-700 text-[1rem] md:text-[1.4rem] leading-[2rem]'>
              <p>Teyana Masters</p>
              <p>Phone: +27 (0) 31 362 1487</p>
              <p>
                Email:{' '}
                <a
                  href='mailto:Teyana.Masters@southernsun.com'
                  className='text-orange-600 hover:underline'
                >
                  Teyana.Masters@southernsun.com
                </a>
              </p>
            </div>
          </div>
          <div className='flex flex-col gap-4 items-center justify-center mt-8 font-calibri text-gray-600 text-[0.9rem] md:text-[1.1rem] italic'>
            <p>For other accommodation options, please see the booklet.</p>
            <button
              className='border border-gray-500 text-gray-500 hover:bg-orange-600 hover:text-white font-calibri text-[1.2rem] px-8 py-4 shadow-lg transition-all duration-300'
              onClick={() =>
                window.open(
                  '/uploads/Khumalo Wedding Traditional Mini Booklet v1.50.pdf',
                  '_blank'
                )
              }
            >
              Download Booklet
            </button>
          </div>
        </div>

        {/* Accommodation Image */}
        <div className='w-[20rem] h-[20rem] mx-auto lg:my-auto mt-[5rem] flex items-center justify-center'>
          <Image
            src='/images/accommodation/southern_sun_elangeni_maharani.jpg'
            alt='Elangeni Hotel'
            className='rounded-full w-full h-full'
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Accommodation;
