'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap'

const Details = () => {

  const handleMakeLetters = (node:HTMLHeadingElement | HTMLParagraphElement) =>{
    const stringArr = node.textContent?.split("") as string[]
    node.innerHTML = ''
      stringArr.forEach((l:string)=>{
      const span = document.createElement('span')
      span.textContent = l
      node.appendChild(span)
    })
  }

  const handleAnimate = (node:HTMLHeadingElement | HTMLParagraphElement,delay?:number) =>{
    const span = node.querySelectorAll('span')
    const tl = gsap.timeline()
    gsap.to('.hero-details-button-wrapper',{ left:0,opacity:1,duration:1,force3D:true})
    tl.fromTo(span,{ filter:'blur(10px)'},{filter:'blur(0px)',duration:1,delay,stagger:0.1,force3D:true})
    tl.to('.hero-details-button',{ bottom:0,opacity:1,duration:1, delay:3,force3D:true})
  }

  useEffect(()=>{
    handleMakeLetters(document.querySelector('.hero-details-h') as HTMLHeadingElement)
    handleMakeLetters(document.querySelector('.hero-details-p1') as HTMLParagraphElement)
    handleMakeLetters(document.querySelector('.hero-details-p2') as HTMLParagraphElement)
    handleAnimate(document.querySelector('.hero-details-h') as HTMLHeadingElement,1)
    handleAnimate(document.querySelector('.hero-details-p1') as HTMLParagraphElement,2)
    handleAnimate(document.querySelector('.hero-details-p2') as HTMLParagraphElement,2)
  },[])

  return (
    <div className='hero-details md:w-1/2 pl-[100px]'>
      <div className='hero-details-button-wrapper my-2 p-[2px] h-fit w-fit rounded-full bg-gradient-to-r from-red-500 to-green-500'>
        <button className="px-2 py-0 bg-gray-900 rounded-full">Introducing Marketing Emails</button>
      </div>
      <h1 className='hero-details-h text-white text-5xl my-5 font-bold min-w-fit'>Email For Developers</h1>
      <p className='hero-details-p1 mb-0'>The best way to reach humans instead of spam folders.</p>
      <p className='hero-details-p2 mb-5'>Deliver transactional and marketing emails at scale.</p>
      <div className="flex">
        <button className="hero-details-button bg-rose-100 hover:bg-rose-200 text-black py-2 px-6 rounded-full font-bold">Get Started</button>
      </div>
    </div>
  )
}

export default Details
