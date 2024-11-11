"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useParallax } from "react-scroll-parallax";

const Header = () => {
  // Animation variants for Framer Motion
  const backgroundVariants = {
    hidden: { y: '100%', opacity: 0 },
    visible: { y: '0%', opacity: 1, transition: { duration: 1.2 } },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.8, duration: 0.9 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 1 + 0.5, duration: 0.9 },
    }),
  };

  // Parallax for the background and text
  const backgroundParallax = useParallax<HTMLDivElement>({
    speed: -20, // Higher negative value means faster scroll effect for the background
  });

  const headingParallax = useParallax<HTMLHeadingElement>({
    speed: 10, // Positive values make the heading scroll slower than the background
  });

  const textParallax = useParallax<HTMLParagraphElement>({
    speed: 5, // Subtle parallax for the text
  });

  return (
    <div className='relative w-screen h-screen overflow-hidden'>
      {/* Background Image with Parallax */}
      <motion.div
        initial='hidden'
        animate='visible'
        variants={backgroundVariants}
        ref={backgroundParallax.ref} // Applying the parallax effect
        className='absolute top-0 left-0 w-full h-full bg-cover bg-center'
        style={{ backgroundImage: "url('/images/header/header3-min.jpg')" }}
      />

      {/* Text Container */}
      <div className='relative flex flex-col justify-center items-center h-full'>
        <motion.h1
          initial='hidden'
          animate='visible'
          variants={headingVariants}
          ref={headingParallax.ref} // Applying the parallax effect
          className='text-[4.5rem] md:text-[5rem] font-canela font-thin text-white text-center leading-none capitalize flex flex-col lg:flex-row gap-4 lg:gap-8'
        >
          <span>Zamani</span>
          <Image
            src='/images/header/and.svg'
            width='100'
            height='100'
            className='w-auto h-[4rem] md:h-[5rem]'
            alt='And'
          />
          <span>Palesa</span>
        </motion.h1>

        <motion.p
          initial='hidden'
          animate='visible'
          variants={textVariants}
          custom={1}
          ref={textParallax.ref} // Applying the parallax effect
          className='text-[1.3rem] md:text-[1.5rem] text-white text-center font-canela font-thin mt-4'
        >
          Traditional Ceremony, November 2, 2024
        </motion.p>
      </div>
    </div>
  );
};

export default Header;
