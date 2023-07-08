import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ServiceAvisCard from '../../components/Card/ServiceAvisCard';

function AvisService() {
    const [datas, setDatas] = useState([
        "Have no fear of perfection. You'll never reach it",
        "Permanent markers aren’t actually permanent.",
        "Every day is another chance to screw everything up again",
        "The best things in life cost the most",
        "If you're ever bored, just see what's in the fridge",
    ]);

    useEffect(()=>{
        (async()=>{

        })();
    }, []);
  return (
    <div className='relative'>
        {/* <div className='absolute w-screen h-full bg-gray-400 opacity-50'></div> */}
        <h3 className='text-xl text-primary mb-4'>Avis</h3>
        <h2 className='text-2xl font-bold'>Ce que disent nos clients</h2>

        <div className='flex gap-8 py-8 overflow-x-hidden'>
            {datas.map((data, index)=>{
                return (
                    <ServiceAvisCard avis={data} key={index} name={"Jonh Doe"} poste={"Devops"} note={5}/>
                )
            })}
        </div>
    </div>
  )
}

export default AvisService