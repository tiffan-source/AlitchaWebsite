import React from 'react'

function BlogAcceuilCard({theme, date, titre, description}) {
  return (
    <div className='rounded-xl shadow-xl min-w-[20rem] overflow-hidden mx-6'>
        <div className='h-[16rem]'>
            {/* <img src="" alt="" /> */}
			<div className='w-full h-full bg-gray-500'></div>
        </div>
        <div className='p-4 grid grid-rows-[2rem_4.5rem_auto]'>
            <div className='flex justify-between text-gray-400'>
                <span>{theme}</span>
                <span>{date}</span>
            </div>
            <h2 className='text-gray-900 text-lg'>{titre}</h2>
            <p className='text-gray-700'>{description.slice(0, 200)}</p>
        </div>
    </div>
  )
}

export default BlogAcceuilCard