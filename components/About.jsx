import { infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div className='w-full px-[12%] py-10 scroll-mt-20 items-center flex flex-col justify-center' id='about'>
            <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
            <h2 className='text-center text-5xl font-Ovo'>About Me</h2>
            <div className='flex-1 justify-center items-center'>
                {/* <p className='mb-10 max-w-2xl font-Ovo'>
                    Full-stack developer skilled in building secure, scalable web applications.
                </p> */}
                <ul className='my-6 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                    {infoList.map(({ icon, iconDark, title, description }, index) => (
                        <li className='border border-gray-400 rounded-xl cursor-pointer p-6 hover:bg-[#fcf4ff] hover:-translate-y-1 transition-all duration-500 hover:shadow-lg' key={index}>
                            <Image src={icon} alt={title} className='w-7 mt-3' />
                            <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                            <p className='text-sm text-gray-600'>{description}</p>
                        </li>
                    ))}
                </ul>
                <h4 className='my-6 text-gray-700 font-semibold text-center'>
                    Tools I use
                </h4>
                <ul className='flex items-center gap-3 sm:gap-5 justify-center' >
                    {
                        toolsData.map((tool,index)=>(
                            <li className=' border-gray-400 cursor-pointer hover:-translate-y-1 duration-500 transition-all rounded-lg w-12 flex items-center justify-center aspect-square border' key={index}>
                                <Image src={tool} alt='tool' className='w-5 sm:w-7' />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default About
