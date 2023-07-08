import React from 'react'
import personalize from '../../assets/personalize.svg'
import illustrationDesign from '../../assets/illustrationDesign.svg'
import Tabs from '../../components/Tabs/Tabs'
import PackEntreprise from './ComponentDesignNumerique/PackEntreprise'

function DesignNumerique() {
  return (
    <div className='flex flex-col gap-6 justify-center items-center my-8'>
        <img src={personalize} alt="icone design numerique" />
        <h3 className='text-xl font-bold'>Design Numerique</h3>
        <div className='flex gap-8 flex-col lg:flex-row items-center'>
            <img src={illustrationDesign} alt="Illustration Design" className='max-w-[18rem]'/>
            <Tabs tabs={[
                {title : "Pack Entreprise 1", content : <PackEntreprise/>},
                {title : "Pack Entreprise 2", content : "", disabled : true},
                {title : "Pack Personnel", content : "", disabled : true},
                {title : "Offre Premium", content : "", disabled : true },
            ]}/>
        </div>
    </div>
  )
}

export default DesignNumerique