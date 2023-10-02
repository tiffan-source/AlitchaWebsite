import React from 'react'
import HeaderService from './HeaderService'
import ServiceNumerique from './ServiceNumerique'
import DesignNumerique from './DesignNumerique'
import OffreSuplementaire from './OffreSuplementaire'
import Stats from './Stats'
import AvisService from './AvisService'
import Newsletter from '../../components/Newsletter/Newsletter'

function Services() {
  return (
    <div>
        <HeaderService/>

        <ServiceNumerique/>

        <DesignNumerique/>

        <OffreSuplementaire/>

        {/* <Stats/> */}
    
        <AvisService/>

        <Newsletter/>
    </div>
  )
}

export default Services