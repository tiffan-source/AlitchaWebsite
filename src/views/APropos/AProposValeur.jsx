import React from 'react'
import icone from '../../assets/valeuricone.png'

function AProposValeur() {
  return (
    <div className='my-10 grid gap-8 lg:grid-cols-2'>
        <div className='flex flex-col gap-8'>
            <h3 className='font-bold text-primary'>Nos valeurs</h3>
            <h2 className=' text-xl'>Nous sommes nos propres héros</h2>
            <p>Nous encourageons les membres de notre équipe à poursuivre leurs rêves, à créer leur propre business, car rien ne vaut la satisfaction de se battre pour être celui que l'on veut être.</p>
        </div>
        <div className='flex items-end'>
            <div className='rounded-lg border border-[#FFF1EA] flex flex-col gap-4 items-start p-4 '>
                <img src={icone} alt="Icone Valeur"/>
                <h3 className='font-bold text-2xl'>Professional</h3>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, perspiciatis!</p>
            </div>
            <div className='rounded-lg border border-[#FFF1EA] flex flex-col gap-4 items-start p-4 '>
                <h3 className='font-bold text-2xl'>Accesibilite</h3>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
        </div>
    </div>
  )
}

export default AProposValeur