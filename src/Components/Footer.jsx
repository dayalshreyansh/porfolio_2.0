import React from 'react'
import logo from "../assets/logo.png";
function Footer() {
  return (
    <div>
      <div className='h-[100px] flex flex-row justify-center' data-aos="fade-down">
        <img src={logo} alt="" />
      </div>
      <div className='h-[50px] bg-[#222831] flex items-center justify-center'  >
        <div className='text-[#f2f2f2]'>© {new Date().getFullYear()} Shreyansh Dayal. All rights reserved.</div>
      </div>
    </div>
  )
}

export default Footer
