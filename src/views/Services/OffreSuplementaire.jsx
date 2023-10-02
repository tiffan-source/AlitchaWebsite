import React from 'react'
import Button from '../../components/Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import whychoose from '../../assets/whychoose.svg'
import offres from './OffreSupList'

function OffreSuplementaire() {
  return (
    <div className=''>
        <h2 className='text-lg text-primary mb-4'>Offres supplementaire</h2>
        <h2 className='text-2xl font-bold mb-5'>Vous pouvez souscrire a plusieurs autres services</h2>

        <div className='flex justify-evenly flex-wrap'>
        {
            offres.map((offre, index)=>{
                return <span key={index} className='text-sm m-2 py-2 px-4 bg-gray-300 rounded-3xl'>{offre}</span>
            })
        }
        </div>

        <div className='lg:grid grid-cols-2 gap-4'>
            <div className='flex flex-col gap-6'>
                <h3 className='text-xl font-bold'>Pourquoi nous <span className='text-primary'>choisir</span></h3>

                <div>
                    <p>
                    Composé d'une communauté de jeunes passionnés et expérimentés, nous avons des valeurs qui font de nous vos meilleurs alliés pour atteindre le sommet.
                    </p>
                    <h2 className='font-bold my-4'>Rapidité et efficacité</h2>
                    <p>
                    Nous nous engageons à être excellents dans les choses que nous faisons et à les faire rapidement, sans sacrifier l’un pour l’autre.
                    </p>
                    <h2 className='font-bold my-4'>Voir grand tous les jours</h2>
                    <p>
                    Jamais nous ne nous contentons de rien dans tout ce que nous faisons. Nous remettons en question nos idées sur ce qui est possible afin de mieux répondre aux besoins de nos clients.
                    </p>
                    <h2 className='font-bold my-4'>Vous satisfaire</h2>
                    <p>
                    Sans clients satisfaits, nous sommes condamnés. Vous, clients, êtes notre source de vie. C’est pourquoi la perspective de combler tous nos clients et non pas seulement une poignée est primordiale.
                    </p>
                </div>

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