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
          Our Fairytale
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }} // Start hidden
          animate={isVisible ? { opacity: 1 } : {}} // Animate to visible
          transition={{ duration: 0.5, delay: 0.5 }} // Delay for paragraph
          className='font-canela font-light text-gray-700 text-[1rem] lg:text-[1.2rem] text-justify mb-4'
        >
          <span className='italic'>Once upon at time,</span> there was a young
          man named Zamani Khumalo. He had decided to spend his short 2008
          December holiday with his mother, Gugu Khumalo in South Africa (Kloof,
          KwaZulu -Natal) before heading back to study in the US.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }} // Start hidden
          animate={isVisible ? { opacity: 1 } : {}} // Animate to visible
          transition={{ duration: 0.5, delay: 0.5 }} // Delay for paragraph
          className='font-canela font-light text-gray-700 text-[1rem] lg:text-[1.2rem] text-justify mb-4'
        >
          During his visit, a varsity friend to his mother named Pearl Gwamanda
          paid them a visit, to reconnect and to also collect the keys for the
          guesthouse, where she and her daughter Palesa Lebona would be staying.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }} // Start hidden
          animate={isVisible ? { opacity: 1 } : {}} // Animate to visible
          transition={{ duration: 0.5, delay: 0.5 }} // Delay for paragraph
          className='font-canela font-light text-gray-700 text-[1rem] lg:text-[1.2rem] text-justify mb-4'
        >
          Upon opening the door to receive and welcome them, Zamani’s and
          Palesa’s eyes locked and they spoke for hours as if they had known
          each other years. They continued to have more riveting conversations
          on the beach during the last 2 days of his holiday. Alas, he then had
          to sadly bid her adieu and return to the US.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }} // Start hidden
          animate={isVisible ? { opacity: 1 } : {}} // Animate to visible
          transition={{ duration: 0.5, delay: 0.5 }} // Delay for paragraph
          className='font-canela font-light text-gray-700 text-[1rem] lg:text-[1.2rem] text-justify mb-4'
        >
          However, their powerful and unwavering connection continued to grow
          stronger and stronger despite distance and with the help of Skype
          (Zoom’s grandfather), leading them to officially become a couple on
          Jan 2nd 2010.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }} // Start hidden
          animate={isVisible ? { opacity: 1 } : {}} // Animate to visible
          transition={{ duration: 0.5, delay: 0.5 }} // Delay for paragraph
          className='font-canela font-light text-gray-700 text-[1rem] lg:text-[1.2rem] text-justify mb-4'
        >
          Through a long distance relationship spanning multiple locations (i.e.
          Texas, Oklahoma, Joburg, Cape Town, Pretoria, Los Angeles, Durban) and
          Palesa’s career change from Marketing & Logistics to Film; they have
          always loved, supported and been each other’s rock even when the world
          didn’t understand/ questioned their relationship and Palesa’s career
          change.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }} // Start hidden
          animate={isVisible ? { opacity: 1 } : {}} // Animate to visible
          transition={{ duration: 0.5, delay: 0.5 }} // Delay for paragraph
          className='font-canela font-light text-gray-700 text-[1rem] lg:text-[1.2rem] text-justify mb-4'
        >
          On 27 October 2021, Zamani won his bet of a surprise-wedding proposal,
          where he proposed to Palesa on the very same beach where they had
          solidified their connection in 2008; just the two of them wearing
          tracksuits, no makeup, no fancy hair nor nails- just the two of them
          in their purist form.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }} // Start hidden
          animate={isVisible ? { opacity: 1 } : {}} // Animate to visible
          transition={{ duration: 0.5, delay: 0.5 }} // Delay for paragraph
          className='font-canela font-light text-gray-700 text-[1rem] lg:text-[1.2rem] text-justify mb-4'
        >
          Being different, unconventional and true to themselves for the past 14
          years, they look forward to embarking on their journey as husband and
          wife in creating more fairytales and taking a page out of Frank
          Sinatra’s book: doing love, life and everything else, Their Way.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }} // Start hidden
          animate={isVisible ? { opacity: 1 } : {}} // Animate to visible
          transition={{ duration: 0.5, delay: 0.5 }} // Delay for paragraph
          className='font-canela font-light font-italic italic text-gray-700 text-[1rem] lg:text-[1.2rem] text-right mb-4'
        >
          The End
        </motion.p>
      </div>
    </section>
  );
};

export default Synopsis;
