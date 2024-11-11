'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

/* eslint-disable react-hooks/exhaustive-deps */

const Synopsis: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing after it becomes visible
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className='flex flex-col justify-center md:flex-row gap-8 lg:gap-16 py-24 px-8'
    >
      <div className='lg:max-w-[50rem]'>
        <motion.h3
          initial={{ opacity: 0, y: -20 }} // Start hidden and slightly above
          animate={isVisible ? { opacity: 1, y: 0 } : {}} // Animate to visible
          transition={{ duration: 0.5 }}
          className='font-calibri uppercase text-center text-gray-700 text-[1.5rem] lg:text-[1.5rem] mb-8'
        >
          Dear Family and Friends
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }} // Start hidden
          animate={isVisible ? { opacity: 1 } : {}} // Animate to visible
          transition={{ duration: 0.5, delay: 0.5 }} // Delay for paragraph
          className='font-calibri font-light text-gray-700 text-[1rem] lg:text-[1.2rem] text-justify mb-4'
        >
          We are filled with immense gratitude as we reflect on the love and
          support we felt on our special day. Thank you for being a part of our
          wedding celebration. Your presence meant the world to us, and we are
          truly blessed to have shared these cherished moments with you.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }} // Start hidden
          animate={isVisible ? { opacity: 1 } : {}} // Animate to visible
          transition={{ duration: 0.5, delay: 0.5 }} // Delay for paragraph
          className='font-calibri font-light text-gray-700 text-[1rem] lg:text-[1.2rem] text-justify mb-4'
        >
          To those who traveled from near and far, we are deeply grateful for
          the time and effort you took to be with us. Your presence made our day
          even more memorable, and we are so touched by the love you showed us.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }} // Start hidden
          animate={isVisible ? { opacity: 1 } : {}} // Animate to visible
          transition={{ duration: 0.5, delay: 0.5 }} // Delay for paragraph
          className='font-calibri font-light text-gray-700 text-[1rem] lg:text-[1.2rem] text-justify mb-4'
        >
          A special thank you goes out to everyone who helped us bring this day
          to life—whether it was through your thoughtful assistance, kind words,
          or simply being there for us along the way. We couldn’t have done it
          without your support.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }} // Start hidden
          animate={isVisible ? { opacity: 1 } : {}} // Animate to visible
          transition={{ duration: 0.5, delay: 0.5 }} // Delay for paragraph
          className='font-calibri font-light text-gray-700 text-[1rem] lg:text-[1.2rem] text-justify mb-4'
        >
          Thank you for making our wedding day everything we dreamed it would be
          and more. We are excited to begin this new chapter of our lives,
          knowing that we have such wonderful people by our side.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }} // Start hidden
          animate={isVisible ? { opacity: 1 } : {}} // Animate to visible
          transition={{ duration: 0.5, delay: 0.5 }} // Delay for paragraph
          className='font-calibri font-light text-gray-700 text-[1rem] lg:text-[1.2rem] text-justify mb-4'
        >
          We would love to relive the joy and memories with you! If you captured
          any special moments in photos or videos, please feel free to upload
          them here so we can all enjoy and share in the celebration together.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }} // Start hidden
          animate={isVisible ? { opacity: 1 } : {}} // Animate to visible
          transition={{ duration: 0.5, delay: 0.5 }} // Delay for paragraph
          className='font-calibri font-light text-gray-700 text-[1rem] lg:text-[1.2rem] text-justify mb-4'
        >
          With love and appreciation,
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }} // Start hidden
          animate={isVisible ? { opacity: 1 } : {}} // Animate to visible
          transition={{ duration: 0.5, delay: 0.5 }} // Delay for paragraph
          className='font-canela font-light font-italic italic text-gray-700 text-[1rem] lg:text-[1.2rem] text-right mb-4'
        >
          Zamani & Palesa
        </motion.p>
      </div>
    </section>
  );
};

export default Synopsis;
