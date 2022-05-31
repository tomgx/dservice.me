import React from 'react'
import { Link } from 'react-scroll';

const Contact = () => {
  return (
    <div name='contact' className='truncate w-full h-screen bg-[#3d3d3d]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <div className='text-center text-4xl sm:text-5xl font-bold text-[#EEEEEE]'>
          <p>contact</p>
        </div>
        <h2 className='text-center text-xl pt-3 '>
          <a className='text-[#EEEEEE] hover:text-[#5cd8bd]' href="mailto:t.green7@lancaster.ac.uk">t.green7@lancaster.ac.uk</a>
        </h2>
        <div className='max-w-[1000px] mx-auto text-center home-container'>
          <p className='text-2x3 sm: text-4x5 animate-bounce display-nothing'>
            <Link to='home' smooth={true} duration={600}>
              <a className='cursor-pointer text-[#EEEEEE] hover:text-[#5cd8bd]'>
                home
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact