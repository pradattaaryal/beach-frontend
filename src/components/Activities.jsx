import React from 'react'

const Activities = () => {
  return (
    <div className='max-w-[1140px] m-auto md:flex mt-[-75px]'>
        <div className='relative p-4 '>
            <h3 className='absolute top-[50%] z-10 left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Resorts</h3>
            <img className='w-full h-full object-cover relative border-4 border-white shadow-lg' src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className='relative p-4 '>
            <h3 className='absolute top-[50%] z-10 left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>cruise</h3>
            <img className='w-full h-full object-cover relative border-4 border-white shadow-lg'src="https://images.unsplash.com/photo-1599640842225-85d111c60e6b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className='relative p-4 '>
            <h3 className='absolute top-[50%] z-10 left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Exercises</h3>
            <img className='w-full h-full object-cover relative border-4 border-white shadow-lg'src="https://images.unsplash.com/photo-1707343846292-56e4c6abf291?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        
    </div>
  )
}

export default Activities