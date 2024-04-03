import React from 'react'

const Gallery = () => {
  return (
    <div className='max-w-[1140px] m-auto w-full   px-4 py-16'> 
        <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
        <div className='grid sm:grid-col-5 grid-row-4 gap-4'>
            
                <div className='sm:col-span-3 col-span-2 row-span-2'><img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1707343843344-011332037abb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8dmFjYXRpb258ZW58MHx8MHx8fDA%3D" alt="" /> </div> 
                <div className='sm:row-span-2'><img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1566371486490-560ded23b5e4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dmFjYXRpb258ZW58MHx8MHx8fDA%3D" alt="" />  </div> 
                <div><img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZhY2F0aW9ufGVufDB8fDB8fHww" alt="" /></div> 
                <div className='sm:row-span-2'><img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1502784444187-359ac186c5bb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZhY2F0aW9ufGVufDB8fDB8fHww" alt="" /></div> 
                <div><img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1611043714658-af3e56bc5299?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHZhY2F0aW9ufGVufDB8fDB8fHww" alt="" /></div> 
              
        </div>
    </div>
  )
}

export default Gallery