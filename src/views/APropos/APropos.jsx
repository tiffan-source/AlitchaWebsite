import React from 'react'
import HeaderAPropos from './HeaderAPropos'
import AproposExperience from './AproposExperience'
import AProposValeur from './AProposValeur'
import StatApropos from './StatApropos'
import Newsletter from '../../components/Newsletter/Newsletter'
import AProposDescription from './AProposDescription'

function APropos() {
  return (
    <>
        <HeaderAPropos/>

        <AproposExperience/>

        <AProposDescription/>

        <AProposValeur/>
        
        <StatApropos/>

        <Newsletter/>        
    </>
  )
}

export default APropos