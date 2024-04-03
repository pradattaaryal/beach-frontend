import React from 'react';

const Booking = () => {
  return (
    <div className='max-w-[1140px] m-auto w-full p-4 '>
      <form className='lg:flex lg:justify-between w-full items-center'>
        <div className='flex flex-col my-2  py-2'>
          <label htmlFor="Destination">Destination</label>
          <select id="Destination" className='lg:w-[300px] md:w-full border-2 border-black rounded-md p-2'>
            <option value="Nepal">Nepal</option>
            <option value="Nepal">Nepal</option>
            <option value="Nepal">Nepal</option>
            <option value="Nepal">Nepal</option>
            <option value="Nepal">Nepal</option>
          </select>
        </div>
        <div className='flex justify-between items-center '>
          <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
            <label htmlFor="CheckIn">Check-In</label>
            <input className=' border-2 rounded-md border-black' type="date" id='CheckIn'/>
          </div>
          <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'> 
            <label htmlFor="CheckOut">Check-Out</label>
            <input className=' border-2 rounded-md border-black'  type="date" id='CheckOut' />
          </div>
        </div>
       <div className='flex flex-col'>
        <label htmlFor="Search">Search</label>
        <button>Rates and Availabilities</button>
        </div>
      </form>
    </div>
  );
}

export default Booking;
