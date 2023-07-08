import React from 'react'

function Stats() {
  return (
    <div className='hidden md:flex m-10 mx-auto p-8 rounded-xl border border-gray-300 justify-center items-center gap-10 w-fit'>
        <div className='flex flex-col items-center justify-center'>
            <span className='text-3xl font-bold'>100+</span>
            <span className='text-gray-400'>Lorem ipsum</span>
        </div>

        <span className='w-4 h-4 inline-block rounded-full bg-[#FF9A9A]'></span>

        <div className='flex flex-col items-center justify-center'>
            <span className='text-3xl font-bold'>100+</span>
            <span className='text-gray-400'>Lorem ipsum</span>
        </div>
        
        <span className='w-4 h-4 inline-block rounded-full bg-[#9AFFC2]'></span>
        
        <div className='flex flex-col items-center justify-center'>
            <span className='text-3xl font-bold'>100+</span>
            <span className='text-gray-400'>Lorem ipsum</span>
        </div>
        
        <span className='w-4 h-4 inline-block rounded-full bg-[#E59AFF]'></span>
        
        <div className='flex flex-col items-center justify-center'>
            <span className='text-3xl font-bold'>100+</span>
            <span className='text-gray-400'>Lorem ipsum</span>
        </div>
    </div>
  )
}

export default Stats