/* eslint-disable jsx-a11y/anchor-is-valid */
import ResumeImg from "../asset/resume.jpg";
import React from 'react'

const Resume = () => {
  return (
    <div>
       <section id='resume' className='flex flex-col md:flex-row bg-secondary px-5'>
        <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
            <img className='w-[300px]' src={ResumeImg}  alt=""/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold'>Resume</h1>
                <p className='pb-5'>You can view my resume <a className='px-5 py-2 font-bold hover:border-2 border-white rounded bg-blue-800' href="" download> Download</a></p>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Resume;
