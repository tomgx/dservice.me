import React from 'react';
import { Link } from 'react-scroll';

const About = () => {
  return (
    <div name='about' className='overflow-x-auto w-full h-screen bg-[#504f4f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <h2 className='text-center text-4xl sm:text-5xl font-bold text-[#EEEEEE]'>
          about
        </h2>
        <div className=' text-center sm:text-xl text-base pt-3'>
          <p className='font-bold'>Thomas</p>
          <p>Studying Computer Science at <a className='hover:text-[#5cd8bd]' href='https://www.lancaster.ac.uk/study/undergraduate/courses/computer-science-bsc-hons-g400/'>Lancaster University</a></p>
        </div>
        <Link className='display-nothing' to='contact' smooth={true} duration={600}>
          <a href="#" class="arrow-container1">
            <div class="arrow1 animate-bounce w-6 h-6"></div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default About;
