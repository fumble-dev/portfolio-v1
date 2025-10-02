import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Work = () => {
    return (
        <div id='projects' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-3xl font-semibold'>
                Latest Projects
            </h4>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>Explore a collection of projects showcasing my expertise.</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-10 gap-5'>
                {
                    workData.map((work, index) => (
                        <div key={index} style={{ backgroundImage: `url(${work.bgImage})` }} className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative group cursor-pointer'>
                            <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 items-center justify-between duration-500 group-hover:bottom-7'>
                                <div className=''>
                                    <h2 className='font-semibold'>{work.title}</h2>
                                    <p className='text-sm text-gray-700'>{work.description}</p>
                                </div>
                                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition-all duration-300'>
                                    <Image src={assets.send_icon} alt='' className='w-5' />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

                <a href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px]  border-gray-700 rounded-full px-10 mx-auto my-20 hover:bg-gray-100 transition-all duration-500 py-3'>
                    Show More <Image src={assets.right_arrow_bold} alt='' className='w-4 ' />
                </a>

        </div>
    )
}

export default Work
