import React from 'react'
import HeaderBlog from './HeaderBlog'
import Newsletter from '../../components/Newsletter/Newsletter'
import ContactCTA from '../../components/ContactCTA/ContactCTA'

function Blog() {
  return (
    <div>
        <HeaderBlog/>

        <ContactCTA/>

        <Newsletter/>
    </div>
  )
}

export default Blog