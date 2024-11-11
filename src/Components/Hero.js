
import React from 'react'
import { Config } from '../utlis/config';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import HeroImg from "../asset/Myphoto-removebg-preview (1).jpg"
const Hero = () => {
  return (
    <div>
       <section className='flex flex-col md:flex-row px-5 py-32 bg-black justify-center'>
           <div className='md:w-1/2 flex flex-col'>
           <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> I'M <span className='text-blue-900'>LOGESH</span> GOPI 
                <p className='text-2xl'>{Config.subtitle}</p>
            </h1>
            <div className='flex  py-10'>
            <a href={Config.social.githib} className='pr-5 text-white'><FaGithub  size={40} /></a>
            <a href={Config.social.linkedin} className='pr-5 text-white '><FaLinkedin  size={40}/></a>
            </div>
           </div>
           <img className='md:w-1/3  h-[30rem] ' src={HeroImg}  alt=''/>
       </section>
    </div>
  )
}

export default Hero
