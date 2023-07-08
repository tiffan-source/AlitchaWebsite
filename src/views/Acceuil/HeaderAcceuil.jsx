import React from 'react';
import chatbot1 from '../../assets/chatbot1.svg';
import Button from '../../components/Button/Button';

function HeaderAcceuil() {
  return (
    <header className='lg:grid grid-cols-2 gap-6 my-8'>
        <div className='flex flex-col justify-center'>
            <h2 className='capitalize text-xl pb-4'>Avec Alitcha Technologies,</h2>
            <h1 className='font-bold text-3xl pb-8'>
                Rien ne vous sera <span className='text-primary'>Impossible.</span>
            </h1>
            <div className='lg:hidden'>
                <img src={chatbot1} alt="Chatbot"/>
            </div>
            <p className='text-gray-600'>
                Nous sommes une startups répondant à des besoins précis, des produits et services technologiques conformément à nos domaines d’expertise. Et ce, que vous soyez une entreprise, une organisation, un entrepreneur, un gouvernement ou un particulier.
            </p>
            <div className='py-4 text-center lg:text-start'>
                <Button rounded secondary>
                    <span className='text-[#C8D6B1] flex items-center gap-2'>
                        Nous rejoindre <span className='font-bold w-[1.5rem] h-[1.5rem] bg-[#C8D6B1] inline-block text-secondary rounded-full'> {">"} </span>
                    </span>
                </Button>
            </div>
        </div>
        <div className='hidden lg:block'>
            <img src={chatbot1} alt="Chatbot"/>
        </div>
    </header>
  )
}

export default HeaderAcceuil