import React from 'react'

function StatApropos() {
  return (
    <div className='md:flex justify-center my-8'>
        <div className='flex flex-col max-w-md min-w-[20rem] p-6 border border-[#F3D1BF] mx-auto md:mx-0'>
            <span className='font-bold text-3xl'>42%</span>
            <span> Lorem ipsum dolor sit</span>
        </div>
        <div className='flex flex-col max-w-md min-w-[20rem] p-6 border border-[#F3D1BF] mx-auto md:mx-0 bg-[#F3D1BF]'>
            <span className='font-bold text-3xl'>73+</span>
            <span> Lorem ipsum dolor sit</span>
        </div>
        <div className='flex flex-col max-w-md min-w-[20rem] p-6 border border-[#F3D1BF] mx-auto md:mx-0'>
            <span className='font-bold text-3xl'>5000</span>
            <span> Lorem ipsum dolor sit</span>
        </div>
    </div>
  )
}

export default StatApropos