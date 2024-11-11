import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='w-full bg-[#f7ded7] py-6 border-t border-gray-300 flex flex-col items-center justify-center'>
      <div className='text-center'>
        <p className='font-calibri text-gray-700 text-[1rem] md:text-[1.2rem] mb-2'>
          © 2024,{' '}
          <Link href='https://private.khumalowedding.com' passHref>
            <span className='text-orange-600 hover:underline transition duration-300'>
              khumalowedding
            </span>
          </Link>{' '}
          Powered by Mobisynco (Pty) Ltd & Watchdog Media (Pty) Ltd
        </p>
      </div>
    </footer>
  );
};

export default Footer;
