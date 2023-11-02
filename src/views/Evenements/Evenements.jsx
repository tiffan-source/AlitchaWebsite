import React, { useEffect, useState } from 'react'
import EventHeader from './EventHeader'
import EventComingSoon from './EventComingSoon'
import axios from 'axios'
import EventView from './EventView'

function Evenements() {

    const [data, setData] = useState([])
    const [selectedEvent, setSelectedEvent] = useState(null)

    useEffect(() => {
        (async()=>{
            try {
                let {data} = await axios.get("https://api.mockfly.dev/mocks/23f5448c-be68-4a78-bc33-255b98b4348b/events")                
                setData(data)
            } catch (error) {

            }

        })()
    }, [])


    return (
        <>
            {
                selectedEvent ? 
                <EventView setSelectedEvent={setSelectedEvent} main={selectedEvent}/>
                :
                <div>
                    {data.length && <EventHeader main={data.find(event=>event.main)}/>}

                    <EventComingSoon setSelectedEvent={setSelectedEvent} events={data.filter((event=>{
                        return new Date(event.date) > new Date()
                    }))}/>
                </div>
            }
        </>
    )
}

export default Evenements