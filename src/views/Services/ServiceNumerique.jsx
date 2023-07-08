import React from 'react';
import services from "./ServiceListe";
import ServiceCard from '../../components/Card/ServiceCard';

function ServiceNumerique() {
  return (
    <div className='py-4'>
        <span className='text-lg text-primary'>Ce que nous faisons</span>
        <div className='md:grid grid-cols-2 gap-6 my-4'>
            <h2 className='text-2xl font-bold'>Des solutions pout tou vos cas d'usage</h2>
            <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia tempore, similique blanditiis obcaecati quam nobis deleniti asperiores commodi libero et.</p>
        </div>

        <div className='flex justify-evenly flex-wrap'>
            {services.map((service, index)=>{
                return (
                    <ServiceCard key={index} icon={service.icon} title={service.title} offres={service.offres} main={service.main}/>
                )
            })}
        </div>
    </div>
  )
}

export default ServiceNumerique