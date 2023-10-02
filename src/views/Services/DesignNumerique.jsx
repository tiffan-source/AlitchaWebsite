import React from 'react'
import personalize from '../../assets/personalize.svg'
import illustrationDesign from '../../assets/illustrationDesign.svg'
import Tabs from '../../components/Tabs/Tabs'
import services from './ServiceListeDesign'

function DesignNumerique() {
  return (
    <div className='flex flex-col gap-6 justify-center items-center my-8'>
        <img src={personalize} alt="icone design numerique" />
        <h3 className='text-xl font-bold'>Design Numerique</h3>
        <div className='flex gap-8 flex-col lg:flex-row items-center'>
            <img src={illustrationDesign} alt="Illustration Design" className='max-w-[18rem]'/>
            <Tabs tabs={services.map((service, index)=>{
                return {
                    title: service.title,
                    content: <>
                        <ul className='list-inside list-disc'>
                            {service.offres ? service.offres.map((offre, index)=>{
                                return <li className='my-4' key={index}>{offre}</li>
                            }) : ""}
                        </ul>
                        <p className='my-4'>
                            {service.descriptions}
                        </p>
                    </>
                }
            })}/>
        </div>
    </div>
  )
}

export default DesignNumerique