import React from 'react'
import wood from '../assets/wood.jpeg'
import Darkwood from '../assets/Darkwood.jpeg'

import{ useEffect, useState } from 'react';


const Nav = () => {

    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        // Function to handle the scroll event
        const handleScroll = () => {
          if (window.scrollY > 0) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);
      


  return (
<div>
              <div
            className="py-4 px-6 flex fixed top-0 left-0 right-0 z-10 transition duration-1000"
            style={{
              backgroundImage: `url(${scrolled ? Darkwood : ''})`,
              transform: `${scrolled ? 'translateY(0)' : 'translateY(-100%)'}`,
              height: '70px'
              }}
            ></div>

    <div
    className="py-4 px-6 flex justify-between items-center fixed top-0 left-0 right-0 z-10"
    >
    
    {/* <div className="text-white text-2xl font-semibold ml-7 font-custom">Company Name</div> */}
              
        <div className="text-center ml-2">
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text relative" style={{ backgroundImage: `url(${wood})`, backgroundSize: 'cover' }}>
                Zen<span >Jeez</span>
            </h1>
        </div>

    <div className="space-x-[65px]">
        <a href="#" className="text-black text-lg hover:text-gray-300 transition font-semibold font-nav ">Home</a>
        <a href="#" className="text-black text-lg hover:text-gray-300 transition font-semibold font-nav">Cart</a>
        <a href="#" className="text-black text-lg hover:text-gray-300 transition font-semibold font-nav">Categories</a>
        
    </div>
    </div>
    </div>
)
}

export default Nav