import React from 'react'
import Details from './details.component'
import dynamic from 'next/dynamic'

const Hero = () => {

  const DynamicCube = dynamic(()=>import('./cube.component'),{ssr:false})

  return (
    <div className='md:flex md:justify-between md:items-center'>
      <Details />
      <DynamicCube />
    </div>
  )
}

export default Hero
