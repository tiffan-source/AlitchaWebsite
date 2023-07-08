import React from 'react'
import Button from '../../components/Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import whychoose from '../../assets/whychoose.svg'

function OffreSuplementaire() {
  return (
    <div className=''>
        <h2 className='text-lg text-primary mb-4'>Offres supplementaire</h2>
        <h2 className='text-2xl font-bold mb-10'>Vous pouvez souscrire a plusieurs autres services</h2>

        <div className='lg:grid grid-cols-2 gap-4'>
            <div className='flex flex-col gap-6'>
                <h3 className='text-xl font-bold'>Pourquoi nous <span className='text-primary'>choisir</span></h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt necessitatibus in nulla temporibus deleniti officia sit vitae natus repudiandae? Nihil laborum veritatis iste magni ipsam, eveniet consectetur sapiente ex reprehenderit.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt necessitatibus in nulla temporibus deleniti officia sit vitae natus repudiandae? Nihil laborum veritatis iste magni ipsam, eveniet consectetur sapiente ex reprehenderit.</p>
                <div>
                    <Button secondary>
                        Demander un devis <span> <FontAwesomeIcon icon={faArrowRight}/> </span>
                    </Button>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <img src={whychoose} alt="Pourquoi nous choisir" />
            </div>
        </div>
    </div>
  )
}

export default OffreSuplementaire