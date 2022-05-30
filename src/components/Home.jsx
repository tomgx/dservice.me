import React from 'react';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#EEEEEE]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <h2 className='text-center text-4xl sm:text-7xl font-bold'>
         <a className='cursor-default text-[#646464] hover:text-[#54aa97]'>
           dservice
           </a> 
        </h2>
        <p className='text-center font-bold pl-56'>
         <a className='cursor-default text-[#acacac] hover:text-[#646464]'>
           tgreen
           </a> 
          </p>
        <div className='self-center'>
        </div>
        
      <Link to='about' smooth={true} duration={600}>
      <a href="#" class="arrow-container">
        <div class="arrow animate-bounce w-6 h-6"></div>
      </a>
      </Link>

      </div>
    </div>
  );
};

export default Home;
