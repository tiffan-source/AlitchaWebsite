import React from 'react'
import Tabs from '../../components/Tabs/Tabs'
import Kumaa from './ComponentRealisation/Kumaa'
import Framework from './ComponentRealisation/Framework'
import Nyota from './ComponentRealisation/Nyota'

function Realisation() {
  return (
    <div className='my-8'>
        <h2 className='text-xl pb-4 text-center text-primary'>Realisations</h2>
        <h1 className='text-3xl pb-8 text-center text-secondary font-bold'>Qu'avons nous fait ?</h1>

        <Tabs tabs={[
            {title : "Kumaa", content : <Kumaa/>},
            {title : "Alitcha Framework", content : <Framework/>},
            {title : "Nyota", content : <Nyota/>},
        ]}/>
    </div>
  )
}

export default Realisation