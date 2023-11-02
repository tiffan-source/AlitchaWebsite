import React, {useState} from 'react'
import EventCard from '../../components/Card/EventCard'

function EventComingSoon({events, setSelectedEvent}) {

    const types = ['Online', 'All', 'Offline']
    const [selectedType, setSelectedType] = useState('All')

    return (
        <>
            <h1 className='text-2xl font-bold text-secondary mt-6 mb-12'>
                Comming Soon
            </h1>

            <div className='flex gap-8 mb-8 justify-center'>
                {types.map((type, index)=>{
                    return (
                        <span key={index} className='cursor-pointer bg-secondary text-white p-4 rounded-3xl min-w-[4rem] text-center' onClick={()=>{
                            setSelectedType(type)
                        }}>{type}</span>
                    )
                })}
            </div>

            <div className='flex gap-8 flex-wrap items-center justify-center  mb-4'>
                {events && events.map(event=>{
                    if(selectedType === 'All')
                        return <EventCard select={setSelectedEvent} event={event}/>
                    else if(selectedType === 'Online' && event.online)
                        return <EventCard select={setSelectedEvent}/>
                    else if(selectedType === 'Offline' && !event.online)
                        return <EventCard select={setSelectedEvent}/>
                })}
            </div>
        </>
    )
}

export default EventComingSoon