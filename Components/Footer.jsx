
import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div className='w-[100%]  h-52 mt-[800px] bg-blue-950  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <div className=' flex  gap-4 ml-12'>
                <div className=' text-5xl  mt-10'><IoLogoWhatsapp /></div>
                <div className=' text-5xl  mt-10'><FaFacebook /></div>
                <div className=' text-5xl  mt-10'><CiLinkedin /></div>
                <div className=' text-5xl  mt-10'><MdEmail /></div>
            </div>
        </div>
    )
}

export default Footer