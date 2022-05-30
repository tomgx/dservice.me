import React from 'react';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#EEEEEE]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <h2 className='cursor-default text-center text-4xl sm:text-7xl font-bold text-[#646464] hover:text-[#54aa97]'>
          dservice
        </h2>
        <p className='cursor-default text-center font-bold text-[#acacac] hover:text-[#646464] pl-56'>tgreen</p>
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
