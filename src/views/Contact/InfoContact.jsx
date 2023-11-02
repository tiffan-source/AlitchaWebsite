import { faAddressCard, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function InfoContact() {
  return (
    <div className='text-lg flex font-thin flex-wrap'>
        <div className='flex-grow p-6 border border-[#d5e3ec]'>
            <div className='flex items-center gap-6'>
                <span className='w-[4rem] h-[4rem] inline-flex items-center justify-center text-white text-2xl bg-secondary rounded-full'>
                    <FontAwesomeIcon icon={faPhone}/>
                </span>
                <span>Phone</span>
            </div>
            <p className='my-4'>+229 69737231</p>
        </div>
        <div className='flex-grow bg-primary text-white p-6 border border-[#d5e3ec] border-l-0 border-r-0'>
            <div className='flex items-center gap-6'>
                <span className='w-[4rem] h-[4rem] inline-flex items-center justify-center text-white text-2xl bg-secondary rounded-full'>
                    <FontAwesomeIcon icon={faMailBulk}/>
                </span>
                <span>Mail</span>
            </div>
            <p className='my-4'>info@alitchateam.com</p>
        </div>
        <div className='flex-grow p-6 border border-[#d5e3ec]'>
            <div className='flex items-center gap-6'>
                <span className='w-[4rem] h-[4rem] inline-flex items-center justify-center text-white text-2xl bg-secondary rounded-full'>
                    <FontAwesomeIcon icon={faAddressCard}/>
                </span>
                <span>Adresse</span>
            </div>
            <p className='my-4'>216 Rue du Marechale</p>
        </div>
    </div>
  )
}

export default InfoContact