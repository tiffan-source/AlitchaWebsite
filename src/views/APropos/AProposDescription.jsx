import React from 'react'
import Button from '../../components/Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import hero from '../../assets/hero.png'
import hero2 from '../../assets/hero2.png'

function AProposDescription() {
  return (
    <div className='text-gray-800'>
        <div>
            <div className='lg:grid grid-cols-2 gap-8 my-8'>
                <div>
                    <h2 className='font-bold'>
                        QU’EST-CE QUE ALITCHA ?
                    </h2>
                    <p className='py-4'>
                        Spécialisée dans la recherche et le développement de technologies, Alitcha est une startup travaillant à la mise en place de solutions susceptibles d’aider les jeunes dans leur développement professionnel. Ce projet s'intitule Alitcha Business Tools et sera constitué de plusieurs déclinaisons dont Kumaa, LivrAI et Ushindi. Elles apporteront aux jeunes les outils qui leur seront nécessaires pour se développer, gagner de l'argent et assurer une croissance que ce soit en tant qu'étudiant, employé, free-lanceur ou entrepreneur. 
                    </p>
                    <p className='py-4'>
                        Persuadé qu'une importante révolution technologique se prépare, nous mettons un point d'honneur en ce qui concerne la recherche par le biais de notre centre de recherche et de développement Alitcha Labs qui vise à développer les technologies des prochaines décennies.
                    </p>
                    <p className='py-4'>
                        Alitcha Labs fonctionne selon le principe de la quête de l'existant et de l’amélioration de ce dernier afin de l'adapter aux besoins des technologies futures. Le Laboratoire s'intéresse en particulier au numérique, à l'IOT et à la mécatronique. 
                    </p>
                    <Button secondary>Nos Realisation <span> <FontAwesomeIcon icon={faArrowRight}/> </span> </Button>
                </div>
                <div>
                    <img src={hero} alt="" srcset="" />
                </div>
            </div>

            <div className='lg:grid grid-cols-2 gap-8 my-8'>
                <div className='flex justify-center items-center'>
                    <img src={hero2} className='inline-block max-w-[30rem]' alt="" srcset="" />
                </div>
                <div>
                    <p className='py-4'>
                        Dans le but de rendre Alitcha Business Tools le plus efficace  possible, le programme Alitcha pour le développement des jeunes a été mis en place.
                    </p>
                    <p className='py-4'>
                        Ce programme favorisera l’inclusion de certains jeunes dans nos équipes en particulier le Labs pour favoriser le gain de compétences et d’expériences. Dans la même optique, notre blog et nos événements favoriseront le partage des informations à travers une kyrielle de publications.
                    </p>
                    <div className='flex gap-8'>
                        <Button secondary>Notre Blog <span><FontAwesomeIcon icon={faArrowRight}/></span> </Button>
                        <Button secondary>Nos evenements <span><FontAwesomeIcon icon={faArrowRight}/></span> </Button>
                    </div>
                    <p className='py-4'>
                        Alitcha Services a pour but principal la mise en place de services technologiques ( développement de logiciels et design numérique)  pour aider les jeunes entreprises dans leur digitalisation.  L'accent est mis sur un suivi et un accompagnement pour assurer une croissance réelle des activités de nos potentiels partenaires.
                    </p>

                    <Button secondary>Decouvrez nos services <span><FontAwesomeIcon icon={faArrowRight}/></span> </Button>

                </div>
            </div>



            <h2 className='font-bold'>
            QUELLE EST NOTRE MISSION ?
            </h2>

            <p className='py-4'>
            L'équipe de Alitcha se donne pour mission d'apporter aux jeunes et aux entreprises  les outils nécessaires à leur développement.  
            </p>
            <p className='py-4'>
            Sa mission se résume donc à participer activement au développement économique et technologique de l'Afrique à travers Alitcha Business Tools et Alitcha Labs.
            </p>
        
            <h2 className='font-bold'>
            QU’EN EST-IL DE NOTRE VISION ?
            </h2>

            <p className='py-4'>
            Notre vision est de changer la vie de millions de jeunes Africains dans les prochaines décennies grâce aux solutions que nous proposons et de participer activement à la recherche et au développement technologique en Afrique afin de favoriser progressivement l'indépendance technologique du continent. 
            </p>

            <h2 className='font-bold'>
            ET POUR 2060 ?
            </h2>

            <p className='py-4'>
            A l'horizon 2060, Alitcha aurait favorisé l’atteinte des objectifs ci-après :
            <ul className='list-inside list-disc'>
                <li>
                créer plus de 15.000 emplois en Afrique et dans le monde ;
                </li>
                <li>
                Être un acteur incontournable dans l'innovation technologique sur le plan mondial ;
                </li>
                <li>
                Favoriser l'éclosion d'un écosystème favorable à l'innovation et au développement grâce à Alitcha program ;
                </li>
                <li>
                Résoudre plusieurs problèmes que traverse le continent grâce à nos solutions, à la recherche et aux développement de technologies.
                </li>
            </ul>
            </p>



        </div>
    </div>
  )
}

export default AProposDescription