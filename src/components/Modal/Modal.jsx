import React from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Modal() {
  return (
    <div className='bg-white p-12 max-w-[25rem] flex flex-col items-center justify-center rounded-3xl border border-[#d5e3ec]'>
        <h2 className='font-bold text-lg'>
        Envoyer un message
        </h2>
        <form action="" method="post">
            <div>
                <Input type={"email"} placeholder={"Votre email"}/>
            </div>
            <div>
                <Input placeholder={"Sujet"}/>
            </div>
            <div>
                <Input textarea placeholder={"Votre message"}/>
            </div>
            <div className='text-right'>
                <Button secondary>Envoyer <FontAwesomeIcon icon={faArrowRight} /> </Button>
            </div>
        </form>
    </div>
  )
}

export default Modal