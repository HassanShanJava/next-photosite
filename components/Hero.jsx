import React from 'react'

const Hero = ({heading, message}) => {
  return (
    <div className='flex justify-center items-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
      {/* overlay 4 parallax backround */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]'/>

      {/* title */}
      <div className='p-5 text-white z-[2]  mt-[-10rem]'>
        <h2 className='text-5xl font-bold '>{heading}</h2>
        <p className='py-5 texl-xl'>{message}</p>
        <button className='px-8 py-2 border'>Book</button>
      </div>




      
    </div>
  )
}

export default Hero