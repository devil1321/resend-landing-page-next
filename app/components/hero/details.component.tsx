'use client'
import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const Details = () => {

  const [isClient,setIsClient] = useState<boolean>(false)

  const headingRef = useRef() as MutableRefObject<HTMLHeadingElement>
  const paragraphRef_1 = useRef() as MutableRefObject<HTMLParagraphElement>
  const paragraphRef_2 = useRef() as MutableRefObject<HTMLParagraphElement>

  const handleMakeLetters = (ref:MutableRefObject<HTMLHeadingElement | HTMLParagraphElement>) =>{
    const stringArr = ref.current.textContent?.split("") as string[]
    ref.current.innerHTML = ''
      stringArr.forEach((l:string)=>{
      if(isClient){
        if(typeof document !== 'undefined'){
          const span = document.createElement('span')
          span.textContent = l
          ref.current.appendChild(span)
        }
      }
    })
  }

  const handleAnimate = (ref:MutableRefObject<HTMLHeadingElement | HTMLParagraphElement>,delay?:number) =>{
    const span = ref.current.querySelectorAll('span')
    const tl = gsap.timeline()
    gsap.to('.hero-details-button-wrapper',{ left:0,opacity:1,duration:1,force3D:true})
    tl.fromTo(span,{ filter:'blur(10px)'},{filter:'blur(0px)',duration:1,delay,stagger:0.1,force3D:true})
    tl.to('.hero-details-button',{ bottom:0,opacity:1,duration:1, delay:3,force3D:true})
  }

  useEffect(()=>{
    setIsClient(true)
    if(isClient){
      handleMakeLetters(headingRef)
      handleMakeLetters(paragraphRef_1)
      handleMakeLetters(paragraphRef_2)
      handleAnimate(headingRef,1)
      handleAnimate(paragraphRef_1,2)
      handleAnimate(paragraphRef_2,2)
    }
  },[isClient])

  return (
    <div className='hero-details md:flex md:flex-col md:justify-center md:items-start md:w-1/2 md:h-screen md:pl-[100px]'>
      <div className='hero-details-button-wrapper my-2 p-[2px] h-fit w-fit rounded-full bg-gradient-to-r from-red-500 to-green-500'>
        <button className="px-2 py-0 bg-gray-900 rounded-full">Introducing Marketing Emails</button>
      </div>
      <h1 ref={headingRef} className='hero-details-h text-white text-5xl my-5 font-bold min-w-fit'>Email For Developers</h1>
      <p ref={paragraphRef_1} className='hero-details-p1 mb-0'>The best way to reach humans instead of spam folders.</p>
      <p ref={paragraphRef_2} className='hero-details-p2 mb-5'>Deliver transactional and marketing emails at scale.</p>
      <div className="flex">
        <button className="hero-details-button bg-rose-100 hover:bg-rose-200 text-black py-2 px-6 rounded-full font-bold">Get Started</button>
      </div>
    </div>
  )
}

export default Details
