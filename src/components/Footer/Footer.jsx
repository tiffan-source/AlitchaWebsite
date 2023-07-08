import React from 'react';
import logofooter from '../../assets/logofooter.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
	<footer className='bg-secondary text-white p-6 absolute left-0 w-full'>
		<div className='md:flex gap-4'>
			<div>
				<img src={logofooter} alt="Logo footer" />
				<p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sunt esse rerum dolor nostrum dolorum quaerat veritatis magni impedit numquam.</p>
			</div>
			<div>
				<h3 className='font-bold'>Nous contacter</h3>
				<p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dolorum eius incidunt esse dignissimos.</p>
				<p className='py-4'>+229 XXXXXXXX</p>
			</div>
			<ul>
				
			</ul>
		</div>
		<div></div>
	</footer>
  )
}

export default Footer