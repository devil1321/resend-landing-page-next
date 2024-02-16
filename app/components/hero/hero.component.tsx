import React from 'react'
import Details from './details.component'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { GlobalComponents } from '../global'

const Hero = () => {

  const DynamicCube = dynamic(()=>import('./cube.component'),{ssr:false})

  return (
    <div className="hero-wrapper h-screen relative">
      <div className='lg:flex lg:justify-between lg:items-center'>
        <Details />
        <DynamicCube />
      </div>
      <p className="hero-foot text-sm w-fit mx-auto flex -mt-12">Backed By <Image className='mx-2' src="/assets/combinator-icon.png" alt="icon" width={20} height={20} /> Combinator</p>
      <GlobalComponents.Border />
    </div>
  )
}

export default Hero
