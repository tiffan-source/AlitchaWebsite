import React from 'react'
import Modal from '../../components/Modal/Modal'
import map from '../../assets/map.svg'

function ContactMap() {
  return (
    <div className='relative lg:block flex justify-center mb-8'>
        <img className='z-10 relative hidden lg:inline-block' src={map} alt="" srcset="" />
        <div className='lg:absolute lg:z-20 lg:top-1/2 lg:-translate-y-1/2 lg:left-[12rem]'>
            <Modal/>
        </div>
    </div>
  )
}

export default ContactMap