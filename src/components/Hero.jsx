 import React from 'react'
 
 const Hero = () => {
   return (
     <div className='w-full h-[92.8vh]'>
        <img className="w-full h-full object-cover"src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA11NbLD.img" alt="" />
        <div className='max-w-[1140px] m-auto  bg-red-300'>
            <div className=' absolute top-[40%] w-full md:top-[50%] max-w-[600px] h-full flex flex-col text-white p-4' >
                <h1 className=' font-bold text-4xl'>Find Your Special</h1>
                <h2 className=' text-4xl py-4 italic'>With Weekaway</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repellat ut sed ipsam maxime iure repellendus rem modi totam tempora!</p>
            </div>
        </div>    
    </div>
   )
 }
 
 export default Hero