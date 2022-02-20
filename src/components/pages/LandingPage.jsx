import React from 'react'
import Carousel from '../layouts/Carousel'
import SelectorBar from '../layouts/SelectorBar'



const LandingPage = () => {
  
  return (
    <div className='container flex-col'>
      <Carousel/>
      <SelectorBar/>
    </div>
  )
}

export default LandingPage