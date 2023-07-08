import { faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Button from '../Button/Button'

function ServiceCard({icon, title, offres, main}) {
  return (
    <div className='w-[20rem] m-6'>
        <img src={icon} alt="card icone" className='w-[5rem]'/>
        <h3 className='text-xl font-bold py-6'>{title}</h3>
        <ul className='text-gray-600 flex flex-col gap-4 mb-6'>
            {offres.map((offre, index)=>{
                return (
                    <li key={index}>
                        <FontAwesomeIcon icon={faCheck}/> {offre}
                    </li>
                )
            })}
        </ul>
        {main ?
            <Button rounded>Demader un devis <span> <FontAwesomeIcon icon={faArrowRight}/> </span> </Button>
            : <span className='font-bold'>Demader un devis <span> <FontAwesomeIcon icon={faArrowRight}/> </span></span> }
    </div>
  )
}

export default ServiceCard