import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { TbClock24 } from "react-icons/tb";
const Topbar = () => {
  return (
    <div className='w-full flex justify-between items-center px-4 py-2'>
        <div className='flex  items-center'>
           <IoChatbubbleEllipsesOutline size={38} className=' text-[var(--primary-dart)] mr-2'/> 
           <h1 className='text-xl font-bold text-gray-700'>WEEKAWAY</h1>
        </div>
        <div className='flex'>
            <div className='hidden md:flex items-center px-6'>
                <TbClock24 size={20 }className='mr-2 text-[var(--primary-dart)]'/> 
                <p>9AM - 5AM</p>
            </div>
            <div className='hidden md:flex items-center px-6'>
                <FiPhoneCall className='text-[var(--primary-dart)] mr-2' size={20} />
                <p>1-888-817-1234</p>
            </div>
            <button>Get a Free Quaote</button>
        </div>
    </div>
  )
}

export default Topbar