/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
    const [toggleMenu, setToggleMenu]  = useState(false);
  return (
    <div>
       <header className="flex justify-between px-5 py-4 bg-black items-center ">
       <a className="font-bold text-white my-3" href="#"> LOGESH GOPI</a>
       <nav className="hidden md:block">
        <ul className="flex text-blue-900 ">
        <li className='px-2'><a href="/">Home</a></li>
                <li className='px-2'><a href="/#about">About</a></li>
                <li className='px-2'><a href="/#projects">Projects</a></li>
                <li className='px-2'><a href="/#resume">Resume</a></li>
                <li className='px-2'><a href="/#contact">Contact</a></li>
        </ul>

       </nav>

       {toggleMenu && <nav className="block md:hidden  ">
            <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-white  fixed top-10 left-0 bg-gray-800 w-full h-1/4">
                <li className='w-full h-full text-center border-b-2'><a href="#">Home</a></li>
                <li className='w-full h-full text-center border-b-2' ><a href="#about">About</a></li>
                <li className='w-full h-full text-center border-b-2'><a href="#projects">Projects</a></li>
                <li className='w-full h-full text-center border-b-2'><a href="#contact">Contact</a></li>
            </ul>
        </nav>}
        <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'><IoMdMenu  className='text-white h-5'/></button>
       </header>
    </div>
  )
}

export default Navbar;
