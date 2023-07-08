import React from 'react'
import HeaderAcceuil from './HeaderAcceuil'
import Realisation from './Realisation'
import BlogPreview from './BlogPreview'
import Newsletter from '../../components/Newsletter/Newsletter'

function Acceuil() {
  return (
    <>
        <HeaderAcceuil/>

        <Realisation/>

        <BlogPreview/>

		<Newsletter/>
    </>
  )
}

export default Acceuil