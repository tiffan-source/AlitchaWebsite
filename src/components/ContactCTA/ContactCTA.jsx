import React from 'react'
import personImage from '../../assets/pic.png'
import Button from '../Button/Button'

function ContactCTA() {
  return (
    <div className='bg-primary p-6 my-6 md:flex max-w-[50rem] items-center gap-6 mx-auto'>
        <div className='flex flex-col items-start gap-6'>
            <h3 className='text-white text-4xl font-bold'>
                Nous aidons a realiser vos projet
            </h3>
            <p className='text-gray-800'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure aperiam veniam illum eligendi impedit unde hic porro, ea eos? Tenetur.
            </p>
            <Button secondary>Contacter</Button>
        </div>
        <div className='hidden md:block'>
            <img src={personImage} alt="" srcset="" />
        </div>
    </div>
  )
}

export default ContactCTA