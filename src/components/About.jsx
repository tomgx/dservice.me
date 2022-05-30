import React from 'react';
import { Link } from 'react-scroll';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#504f4f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <h2 className='text-center text-4xl sm:text-5xl font-bold text-[#EEEEEE]'>
          About
        </h2>
        <div className='text-center text-xl py-5'>
        <p className='font-bold'>Thomas</p>
      <p>Studying Computer Science at Lancaster University</p>
      </div>
      </div>
    </div>
  );
};

export default About;
