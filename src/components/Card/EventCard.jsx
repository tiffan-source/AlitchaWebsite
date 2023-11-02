import React from 'react';
import eventMock from '../../assets/eventmock.jpg'
import Button from '../Button/Button';

function EventCard({event, select}) {
    const {titre: title, date, online} = event
  return (
    <div className='max-w-[20rem] rounded-3xl hover:shadow-lg transition-shadow overflow-hidden border border-[#d5e3ec]'>
        <div>
            <img src={eventMock} alt="" srcset="" />
        </div>
        <div className='px-4 py-6 flex flex-col'>
            <h1 className='font-bold text-xl'>{title}</h1>
            <span className='text-sm mb-8'>{date} {online && "online"}</span>
            <div className='py-3'>
                <Button secondary action={()=>{
                    select(event);
                }}>Discover</Button>
            </div>
        </div>
    </div>
  )
}

export default EventCard