import React from 'react'
import Cube from './cube.component'
import dynamic from 'next/dynamic'
const Hero = () => {

  const DetailsNoSSR = dynamic(()=>import('./details.component'),{ ssr: false})

  return (
    <div className='md:flex md:justify-between md:items-center'>
      <DetailsNoSSR />
      <Cube />
    </div>
  )
}

export default Hero
