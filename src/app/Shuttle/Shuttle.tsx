import Image from "next/image";
import React from "react";

const Shuttle: React.FC = () => {
  return (
    <section className='w-screen flex flex-col items-center my-[4rem] overflow-x-hidden border-t border-t-orange-600'>
      {/* Shuttle Service Section */}
      <div className='mr-auto px-[2rem] lg:px-[12rem] font-canela font-thin text-gray-700 text-[2.5rem] md:text-[3.9rem] lg:text-[4rem] capitalize leading-none my-[4rem] flex items-center'>
        <div className='flex flex-col'>
          <h1 className='transform translate-x-[0%]'>Shuttle</h1>
          <h1 className='transform translate-x-[4rem]'>Service</h1>
        </div>
        <div className='ml-[3rem] lg:ml-[4rem]'>
          <Image
            src='/images/schedule/bus.png'
            alt='Shuttle Icon'
            height={100}
            width={100}
            className='object-contain h-[3.5rem] lg:h-[5rem] opacity-70'
          />
        </div>
      </div>

      {/* Shuttle Info Blocks */}
      <div className='w-full px-8 lg:px-[12rem] flex flex-col lg:flex-row'>
        <div className='lg:w-[60%]'>
          <div className='flex mb-4'>
            <div className='w-1/3 font-calibri text-gray-700 text-[0.7rem] md:text-[1.1rem] leading-[2rem] uppercase'>
              <p>Pickup Location</p>
            </div>
            <div className='flex-1 font-calibri font-light text-gray-700 text-[1rem] md:text-[1.4rem] leading-[2rem]'>
              <p>The Southern Sun - Elangeni Hotel</p>
              <p>63 Snell Parade, Durban, ZA 4001</p>
              <p>Distance: 40km</p>
            </div>
          </div>
          <div className='flex mb-4'>
            <div className='w-1/3 font-calibri text-gray-700 text-[0.7rem] md:text-[1.1rem] leading-[2rem] uppercase'>
              <p>Details</p>
            </div>
            <div className='flex-1 font-calibri font-light text-gray-700 text-[1rem] md:text-[1.4rem] leading-[2rem]'>
              <p>
                Guests are welcome to use the shuttle from the hotel, with paid
                parking available under the hotel.
              </p>
              <p>
                The shuttle will operate between The Elangeni Hotel and The
                Khumalo Home at designated times (schedule to be shared).
              </p>
              <p>
                Guests may also choose to drive their own vehicles if preferred.
              </p>
            </div>
          </div>
          <div className='flex mb-4'>
            <div className='w-1/3 font-calibri text-gray-700 text-[0.7rem] md:text-[1.1rem] leading-[2rem] uppercase'>
              <p>Parking & Security</p>
            </div>
            <div className='flex-1 font-calibri font-light text-gray-700 text-[1rem] md:text-[1.4rem] leading-[2rem]'>
              <p>Security will be onsite at The Khumalo Home.</p>
              <p>
                Guests driving to The Khumalo Home must park at 17 Howick Drive,
                Waterfall, and board from there.
              </p>
              <p>
                Alternatively, guests may use Uber to arrive directly at The
                Khumalo Home for drop-off.
              </p>
            </div>
          </div>
        </div>

        {/* Shuttle Image */}
        {/* <div className='w-[20rem] h-[20rem] mx-auto lg:my-auto mt-[5rem] flex items-center justify-center'>
          <Image
            src='/images/schedule/shuttle.jpg'
            alt='Shuttle'
            className='rounded-full w-full h-full'
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            width={500}
            height={500}
          />
        </div> */}
      </div>
    </section>
  );
};

export default Shuttle;
