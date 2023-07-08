import { faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function PackEntreprise() {
  return (
    <div>
        <ul className='text-gray-600 flex flex-col gap-4'>
            <li>
                <span className='mr-2 font-bold'>
                    <FontAwesomeIcon icon={faCheck}/>
                </span>
                Logo et charte graphique
            </li>
            <li>
                <span className='mr-2 font-bold'>
                    <FontAwesomeIcon icon={faCheck}/>
                </span>
                Carte de visite
            </li>
            <li>
                <span className='mr-2 font-bold'>
                    <FontAwesomeIcon icon={faCheck}/>
                </span>
                5 visuels et 2 motions Flyers
            </li>
            <li>
                <span className='mr-2 font-bold'>
                    <FontAwesomeIcon icon={faCheck}/>
                </span>
                Plaquette commerciale
            </li>
            <li>
                <span className='mr-2 font-bold'>
                    <FontAwesomeIcon icon={faCheck}/>
                </span>
                20% de reduction sur la cpnception de site Web
            </li>
        </ul>

        <span className='py-4 inline-block cursor-pointer'>
            Demander un devis
            <FontAwesomeIcon icon={faArrowRight}/>
        </span>
    </div>
  )
}

export default PackEntreprise