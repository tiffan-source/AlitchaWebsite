import React from 'react';
import quote from '../../assets/quote.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function ServiceAvisCard({avis, profil, name, poste, note}) {
    const starts = [1, 2, 3, 4, 5]
  return (
    <div className='min-w-[28rem] p-8 rounded-xl shadow'>
        <img src={quote} alt="Quote" />
        <p className='my-4 text-gray-800'>{avis}</p>
        <div className='flex justify-between items-center'>
            <div className='flex gap-4'>
                <span className='inline-block w-[3rem] h-[3rem] bg-gray-900 rounded-full'></span>
                <div className='flex flex-col'>
                    <span className='text-lg'>{name}</span>
                    <span className='text-gray-600'>{poste}</span>
                </div>
            </div>
            <div>
                {starts.map((start, index)=>{
                    return (
                        <span key={index} className={start <= note ? 'text-yellow-400' : 'text-gray-600'}>
                            <FontAwesomeIcon icon={faStar}/>
                        </span>
                    )
                })}
                {note}.0
            </div>
        </div>
    </div>
  )
}

export default ServiceAvisCard