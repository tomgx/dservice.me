import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import Logo from '../assets/dservice-logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center bg-[#cacaca60] text-[#000000]'>
      <Link to='home' smooth={true} duration={600}>
        <div className=' hover:bg-[#67d8bf9d] cursor-pointer'>
        <img src={Logo} alt='Logo Image' style={{ width: '200px' }} />
        </div>
      </Link> 
      
      {/* menu */}
      <ul className='font-bold hidden md:flex'>
        <Link to='home' smooth={true} duration={600}>
          <li className='group px-6 py-7 flex items-center hover:bg-[#67d8bf9d]'>
            Home
          </li>
        </Link>
        <Link to='about' smooth={true} duration={600}>
          <li className='group px-6 py-7 flex items-center hover:bg-[#67d8bf9d]'>
            About
          </li>
        </Link>
        <Link to='contact' smooth={true} duration={600}>
          <li className='group px-6 py-7 flex items-center hover:bg-[#67d8bf9d]'>
            Contact
          </li>
        </Link>
      </ul>

      {/* Mobile menu icon */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#6fc2b0] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/tomgx'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href="mailto:t.green7@lancaster.ac.uk">
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
