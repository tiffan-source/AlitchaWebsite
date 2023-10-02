import React from 'react';
import eventMock from '../../assets/eventmock.jpg'
import Button from '../Button/Button';

function EventCard({title, date, image, online}) {
  return (
    <div className='max-w-[20rem] rounded-3xl hover:shadow-lg transition-shadow overflow-hidden border border-[#d5e3ec]'>
        <div>
            <img src={eventMock} alt="" srcset="" />
        </div>
        <div className='px-4 py-6 flex flex-col'>
            <h1 className='font-bold text-xl'>{title}</h1>
            <span className='text-sm'>{date} {online && "online"}</span>
            <div className='py-3'>
                <Button secondary>Discover</Button>
            </div>
        </div>
    </div>
  )
}

export default EventCard