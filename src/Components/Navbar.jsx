import React, { useState } from 'react';
import logo from "../assets/logo.png";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className="bg-[#393E46] w-full flex flex-row items-center justify-between px-5 md:px-20 py-4" >
        <img className='h-[80px] md:h-[120px]' data-aos="fade-down"  src={logo} alt="Logo" />

        <div className="md:hidden text-white text-3xl hover-target" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✖' : '☰'}
        </div>

        <div className="hidden md:flex flex-row text-[#F2F2F2] text-lg md:text-2xl tracking-wide gap-12">
          <div className='text-gray-400 hover-target hover:text-[#F2F2F2] ' data-aos="fade-down" ><a href='#skill'>Skills</a></div>
          <div className='text-gray-400 hover-target hover:text-[#F2F2F2] ' data-aos="fade-down" data-aos-delay="100"><a href='#project'>Projects</a></div>
          <div className='text-gray-400 hover-target hover:text-[#F2F2F2] ' data-aos="fade-down" data-aos-delay="200"><a href='#other'>Other Works</a></div>
          <div className='text-gray-400 hover-target hover:text-[#F2F2F2] ' data-aos="fade-down" data-aos-delay="300">Download CV</div>
        </div>
      </nav>

      {menuOpen && (
        <div className="flex flex-col md:hidden bg-[#393E46] text-[#F2F2F2] text-lg tracking-wide gap-4 px-5 py-4">
          <div className='opacity-50 hover-target hover:opacity-100 '><a href='#skill'>Skills</a></div>
          <div className='opacity-50 hover-target hover:opacity-100 '><a href='#project'>Projects</a></div>
          <div className='opacity-50 hover-target hover:opacity-100 '><a href='#other'>Other Works</a></div>
          <div className='opacity-50 hover-target hover:opacity-100 '>Download CV</div>
        </div>
      )}
    </>
  );
}

export default Navbar;

