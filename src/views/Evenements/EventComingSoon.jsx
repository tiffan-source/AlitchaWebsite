import React, { useEffect } from 'react'
import EventCard from '../../components/Card/EventCard'

function EventComingSoon({events}) {

    return (
        <>
            <h1 className='text-2xl font-bold text-secondary mt-6 mb-12'>
                Coming Soon
            </h1>
            <div className='flex gap-8 flex-wrap mb-4'>
                {events && events.map(event=>{
                    return <EventCard title={event.titre} date={event.date} online={event.online}/>
                })}
            </div>
        </>
    )
}

export default EventComingSoon