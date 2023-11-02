import React from 'react'
import eventMock from '../../assets/eventmock.jpg'
import Button from '../../components/Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import person from '../../assets/exempleparticipant.jpg'


function EventView({main, setSelectedEvent}) {
  return (
    <>
        <header className=''>
            <h1 className='text-3xl text-secondary font-semibold my-8'>{main.titre}</h1>
            <div className='md:flex items-start gap-12'>
                <div>
                    <img src={eventMock} alt="" srcset="" className='rounded-3xl' />
                </div>
                <div className='flex justify-center flex-col'>
                    <div className='flex flex-col'>
                        <span className='font-bold text-sm text-secondary'>{main.date} {main.heure}</span>
                        <span>{main.online && "online"}</span>
                    </div>
                    <div className='flex gap-8 my-8'>
                        <Button rounded>Participer <FontAwesomeIcon icon={faArrowRight}/> </Button>
                        <Button rounded secondary action={()=>{
                            setSelectedEvent(null)
                        }}><FontAwesomeIcon icon={faArrowLeft}/>Retour</Button>
                    </div>
                </div>
            </div>
        </header>
        <p className='py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nesciunt exercitationem dolorem ipsa aut sapiente explicabo earum voluptates dolores animi consequatur, corrupti voluptate tempore dignissimos facere, repudiandae minus! Laudantium nesciunt repellendus, distinctio libero beatae eligendi quidem, quia sit optio itaque minus omnis dolorem quasi doloremque laboriosam reprehenderit placeat temporibus fuga nihil? Perspiciatis repellat odio reprehenderit qui numquam, vel id aliquam nisi nulla voluptates. Sequi debitis sint laborum doloribus, soluta nulla esse autem? Et, consequatur? Vel accusantium magnam placeat sit maiores ad repellendus molestiae dolor, earum porro officiis beatae cumque ullam repudiandae, iste temporibus sed. Sapiente commodi accusantium tenetur consequatur unde.</p>
        {main.participants.length > 0  && <div>
            <h1 className='text-2xl font-bold text-secondary mt-6 mb-12'>
                Participants
            </h1>
            <p className='flex gap-8 mb-8 flex-wrap'>
                {main.participants.map((participant, index)=>{
                    return (
                        <div key={index} className='flex items-center justify-center flex-col max-w-[12rem]'>
                            <div className='inline-block w-[8rem] h-[8rem] rounded-full overflow-hidden'>
                                <img src={person} alt="" srcset="" clas />
                            </div>
                            <span className='text-lg font-bold'>{participant.nom} {participant.prenom}</span>
                            <span>{participant.role}</span>
                        </div>
                    )
                })}
            </p>
        </div>}
    </>
  )
}

export default EventView