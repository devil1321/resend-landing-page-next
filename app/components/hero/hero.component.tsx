import React from 'react'
import Details from './details.component'
import dynamic from 'next/dynamic'
import Image from 'next/image'

const Hero = () => {

  const DynamicCube = dynamic(()=>import('./cube.component'),{ssr:false})

  return (
    <div className="hero-wrapper h-screen relative">
      <div className='md:flex md:justify-between md:items-center'>
        <Details />
        <DynamicCube />
      </div>
      <p className="hero-foot text-sm w-fit mx-auto flex -mt-12">Backed By <Image className='mx-2' src="/assets/combinator-icon.png" alt="icon" width={20} height={20} /> Combinator</p>
      <div className="hero-border-feature relative top-0 left-0 h-36 w-100 bg-[radial-gradient(120px,rgba(255,255,255,0.1),transparent)]"></div>
    </div>
  )
}

export default Hero
