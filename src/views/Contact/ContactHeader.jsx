import React from 'react'

function ContactHeader() {
  return (
    <header className='flex flex-col items-center justify-center py-10'>
        <h1 className='text-4xl font-bold mb-6'>Contact</h1>
        <p className='max-w-[30rem] text-center text-gray-800'>
        Nous sommes disponibles 24h/24 , 7j/7
        </p>
    </header>
  )
}

export default ContactHeader