import React from 'react'
import emplowerment from '../../assets/empowerment.png'

function HeaderService() {
  return (
    <div className='flex flex-col items-center justify-center my-4'>
        <img src={emplowerment} alt='Icon Service'/>
        <h1 className='py-6 text-3xl font-bold text-center'>
            Créez avec confiance, grâce à <span className='text-primary'>Alitcha</span>
        </h1>
    </div>
  )
}

export default HeaderService