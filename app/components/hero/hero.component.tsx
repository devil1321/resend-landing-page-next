import React from 'react'
import Details from './details.component'
import Cube from './cube.component'
const Hero = () => {
  return (
    <div className='md:flex md:justify-between md:items-center'>
      <Details />
      <Cube />
    </div>
  )
}

export default Hero
