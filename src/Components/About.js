import React from 'react';
import AboutImg from "../asset/about.png";
import { Aboutconfig } from '../utlis/config';

const About = () => {
  return (
    <div>
      <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
      <div className='py-5 md:w-1/2'>
            <img src={AboutImg} alt='' />
        </div>

        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{Aboutconfig.line1}</p>
                <p className='pb-5'>{Aboutconfig.line2}</p>
                <p className='pb-5'>{Aboutconfig.line3}</p>
            </div>
        </div>
      </section>
    </div>
  )
}

export default About
