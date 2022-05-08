import React from 'react'
import  CV from '../../assets/Sufiyan Ahmad rsm .pdf'
function CTA() {
  return (
    <div className='CTA'>
        <a href= {CV} download className='btn'>Download CV</a>
        <a href='#Contact' className='btn btn-primary'>Lets Talk</a>
        
    </div>
  )
  }
  
export default CTA