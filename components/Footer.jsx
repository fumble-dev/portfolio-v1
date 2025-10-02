import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={assets.logo} alt='' className='w-36 mx-auto mb-2' />

        <div className=' flex items-center justify-center gap-2'>
            <Image src={assets.mail_icon} className='w-6' alt='' />
            udanth.work@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex sm:items-center sm:justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
          <p>&copy; Udanth. All rights reserved.</p>
          <ul className='flex items-center justify-center gap-10 mt-4 sm:mt-0'>
              <li>
                  <a target='_blank' href="https://github.com/fumble-dev">GitHub</a>
              </li>
              <li>
                  <a target='_blank' href="https://www.linkedin.com/in/udanth">LinkedIn</a>
              </li>
              <li>
                  <a target='_blank' href="https://x.com/udanthreddy">Twitter</a>
              </li>
              <li>
                  <a target='_blank' href="https://leetcode.com/u/fumble_dev/">Leetcode</a>
              </li>
          </ul>
      </div>
    </div>
  )
}

export default Footer
