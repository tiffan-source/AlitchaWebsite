import React from 'react'
import eventMock from '../../assets/eventmock.jpg'
import Button from '../../components/Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function EventHeader({main}) {

    return (
        <header className='flex flex-col-reverse md:grid grid-cols-2 gap-4 my-8'>
            <div className='flex justify-center flex-col'>
                <h1 className='text-3xl text-primary font-bold'>{main.titre}</h1>
                <span className='font-bold text-sm text-secondary'>{main.date} {main.heure} {main.online && "online"}</span>
                <p className='py-8'>{main.description}</p>
                <Button rounded>Participer <FontAwesomeIcon icon={faArrowRight}/> </Button>
            </div>
            <div>
                <img src={eventMock} alt="" srcset="" className='rounded-3xl' />
            </div>
        </header>
    )
}

export default EventHeader