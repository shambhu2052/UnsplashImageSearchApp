import React from 'react'
import {BsFacebook,BsLinkedin,BsGithub} from "react-icons/bs"
import Link from 'next/link'
const Fotter = () => {
  return (
    <div>
        <div className='container mx-auto flex flex-wrap items-center justify-center md:justify-between px-2 md:px-0 my-4 md:my-10 gap-3 md:gap-0'>
            <h3 className="font-normal text-[#4385e3] text-xl ">shambhuchu21@gmail.com</h3>
            <div className='flex gap-3 justify-end'>
                <Link href="https://www.facebook.com/" target='_blank' className='w-[30px] h-[30px] flex items-center justify-center hover:bg-[#4385e3] rounded-md text-gray-500 hover:text-white'>
                    <BsFacebook size={25} className=""/>
                </Link>
                <Link href="https://www.linkedin.com/feed/" target='_blank' className='w-[30px] h-[30px] flex items-center justify-center hover:bg-[#4385e3] rounded-md text-gray-500 hover:text-white'>
                    <BsLinkedin size={25}/>
                </Link>
                <Link href="https://github.com/" target='_blank' className='w-[30px] h-[30px] flex items-center justify-center hover:bg-[#4385e3] rounded-md text-gray-500 hover:text-white'>
                    <BsGithub size={25}/>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Fotter