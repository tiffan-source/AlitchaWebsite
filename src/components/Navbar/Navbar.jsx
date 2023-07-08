import React, { useState } from 'react'
import Button from '../Button/Button';
import logo from '../../assets/logo.png'
import menu from '../../assets/menu.png'
import close from '../../assets/cross.png'
import { Link } from 'react-router-dom';

function Navbar() {
    const [hideNav, setHideNav] = useState(false)

    return (
    <>
        <nav className='py-4 flex items-center justify-between'>
            <span>
                <img src={logo} alt="Logo Alitcha"/>
            </span>
            <ul className='hidden lg:flex gap-6'>
                <li className=''>
                    <a className='cursor-pointer hover:text-primary font-thin' href="/home">Acceuil</a>
                </li>
                <li className=''>
                    <a className='cursor-pointer hover:text-primary font-thin' href="/services">Services</a>
                </li>
                <li className=''>
                    <a className='cursor-pointer hover:text-primary font-thin' href="/apropos">A Propos</a>
                </li>
                <li className=''>
                    <a className='cursor-pointer hover:text-primary font-thin' href="/realisations">Realisations</a>
                </li>
                <li className=''>
                    <a className='cursor-pointer hover:text-primary font-thin' href="/blog">Blog</a>
                </li>
                <li className=''>
                    <a className='cursor-pointer hover:text-primary font-thin' href="/event">Evenements</a>
                </li>
            </ul>
            <div className='flex items-center gap-4'>
                <Button rounded>Demander un devis</Button>
                <span className='max-w-[2rem] cursor-pointer lg:hidden' onClick={()=>{setHideNav(!hideNav)}}>
                    <img src={menu} alt="icone menu"/>
                </span>
            </div>
        </nav>

        {hideNav && <div className='bg-[#000a] absolute w-screen h-screen top-0 left-0 flex items-center justify-center lg:hidden'>
            <div className='w-[80%] bg-white p-6 flex flex-col gap-4 rounded-xl'>
                <div className='flex justify-end'>
                    <img className='max-w-[1.5rem] cursor-pointer' src={close} alt="close icone" onClick={()=>{setHideNav(!hideNav)}}/>
                </div>
                <ul className='grow flex flex-col justify-between'>
                    <li className='border-b border-gray-300 text-center text-lg py-4'>
                        <a className='cursor-pointer hover:text-primary' href="/home">Acceuil</a>
                    </li>
                    <li className='border-b border-gray-300 text-center text-lg py-4'>
                        <a className='cursor-pointer hover:text-primary' href="/services">Services</a>
                    </li>
                    <li className='border-b border-gray-300 text-center text-lg py-4'>
                        <a className='cursor-pointer hover:text-primary' href="/apropos">A Propos</a>
                    </li>
                    <li className='border-b border-gray-300 text-center text-lg py-4'>
                        <a className='cursor-pointer hover:text-primary' href="/realisations">Realisations</a>
                    </li>
                    <li className='border-b border-gray-300 text-center text-lg py-4'>
                        <a className='cursor-pointer hover:text-primary' href="/blog">Blog</a>
                    </li>
                    <li className='border-b border-gray-300 text-center text-lg py-4'>
                        <a className='cursor-pointer hover:text-primary' href="/event">Evenements</a>
                    </li>
                </ul>
                <div className='text-center'>
                    <Button rounded>Demander un devis</Button>
                </div>
            </div>
        </div>}
    </>
    )
}

export default Navbar