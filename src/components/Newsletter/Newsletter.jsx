import React from 'react'
import Button from '../Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import newsletter from '../../assets/newsletter.svg'

function Newsletter() {
  return (
	<div className='lg:grid grid-cols-2 gap-8'>
		<div>
			<h2 className='text-2xl font-bold mb-8'>Rejoignez notre Newsletter</h2>
			<div className='flex flex-col mb-6'>
				<label className='mb-4 text-gray-600' htmlFor="">Noms et Prenoms</label>
				<input type="text" className='border border-gray-600 rounded p-2 bg-[#F3FBE6]'/>
			</div>
			<div className='flex flex-col mb-6'>
				<label className='mb-4 text-gray-600' htmlFor="">Email</label>
				<input type="text" className='border border-gray-600 rounded p-2 bg-[#F3FBE6]'/>
			</div>
			<div>
				<Button secondary>Soumettre <FontAwesomeIcon icon={faArrowRight}/> </Button>
			</div>
		</div>
		<div className='flex justify-center py-6'>
			<img src={newsletter} alt="Newsletter"/>
		</div>
	</div>
  )
}

export default Newsletter