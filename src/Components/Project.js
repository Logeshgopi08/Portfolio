/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { ProjectConfig } from '../utlis/config'

const Project = () => {
  return (
    <div>
        <section id='projects' className="flex  flex-col py-20 px-5 justify-center  text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                <p>These are some of my best projects. I have built these with React, MERN and vanilla CSS. Check them out.</p>
            </div>
        </div>

        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5 flex-wrap'>
                {
                    ProjectConfig.projects.map((project) => (
                        <div className='relative'>
                           <img className='h-[200px] w-[500px]' src={project.image} alt=''/>
                           <div className='project-desc'>
                               <p className='text-center px-5 py-5'>{project.description}</p>
                               <div className='flex justify-center'>
                                   <a className='btn' target='_blank' href={project.link} >View Project</a>
                               </div>
                           </div>
                       </div>
                ))}
            </div>
        </div>
        </section>
    </div>
  )
}

export default Project
