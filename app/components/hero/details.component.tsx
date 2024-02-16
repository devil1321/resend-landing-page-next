'use client'
import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const Details = () => {

  const [isClient,setIsClient] = useState<boolean>(false)
  const [isLetters,setIsLetters] = useState<boolean>(false)

  const headingRef = useRef() as MutableRefObject<HTMLHeadingElement>
  const paragraphRef_1 = useRef() as MutableRefObject<HTMLParagraphElement>
  const paragraphRef_2 = useRef() as MutableRefObject<HTMLParagraphElement>

  const handleMakeLetters = (ref:MutableRefObject<HTMLHeadingElement | HTMLParagraphElement>) =>{
    const wordsArr = ref.current.textContent?.split(" ") as string[]
    ref.current.innerHTML = ''
    if(isClient){
      if(typeof document !== 'undefined'){
        wordsArr.forEach((w:string)=>{
          const place = document.createElement('div') as HTMLSpanElement
          place.classList.add("mx-[5px]")
          place.classList.add("flex")
          const lettersArr = w.split('')
          lettersArr.forEach((l:string)=>{
            const span = document.createElement('span') as HTMLSpanElement
            span.classList.add("block")
            span.classList.add("mr-[1px]")
            span.textContent = l
            span.addEventListener('mouseenter',()=>{
              span.classList.add('animate__animated') 
              span.classList.add('animate__rubberBand')
              span.classList.add('animate__fast')
            })
            span.addEventListener('mouseout',()=>{
              span.classList.remove('animate__animated') 
              span.classList.remove('animate__rubberBand')
              span.classList.remove('animate__fast')
            })
            place.appendChild(span)
          })
          ref.current.appendChild(place)
          })
        }
      }
  }
  
  const handleAnimateLG = (ref:MutableRefObject<HTMLHeadingElement | HTMLParagraphElement>,delay?:number) =>{
    const span = ref.current.querySelectorAll('span')
    const tl = gsap.timeline()
    gsap.to('.hero-details-button-wrapper',{ left:0,opacity:1,duration:1,force3D:true})
    tl.fromTo(span,{ filter:'blur(10px)'},{filter:'blur(0px)',duration:1,delay,stagger:0.1,force3D:true})
    tl.to('.hero-details-button',{ bottom:0,opacity:1,duration:1, delay:3,force3D:true})
  }
  const handleAnimateSM = () =>{
    const tl = gsap.timeline()
    gsap.to('.hero-details-button-wrapper',{ left:0,opacity:1,duration:1,force3D:true})
    tl.fromTo('.hero-details-h > div > span',{ x:-800},{x:0,stagger:0.1,force3D:true})
    tl.fromTo('.hero-details-p1 > div > span',{ x:-800},{x:0,stagger:0.1,force3D:true})
    tl.fromTo('.hero-details-p2 > div > span',{ x:-800},{x:0,stagger:0.1,force3D:true})
    tl.to('.hero-details-button',{ bottom:0,opacity:1,duration:1,delay:10,force3D:true})
  }

  
  useEffect(()=>{
    setIsClient(true)
    if(isClient){
      handleMakeLetters(headingRef)
      handleMakeLetters(paragraphRef_1)
      handleMakeLetters(paragraphRef_2)
      setIsLetters(true)
    }
  },[isClient])
  
  useEffect(()=>{
    if(typeof window !== undefined){
      if(window.innerWidth > 1024){
        handleAnimateLG(headingRef,1)
        handleAnimateLG(paragraphRef_1,2)
        handleAnimateLG(paragraphRef_2,2)
      }else{
        handleAnimateSM()
        handleAnimateSM()
        handleAnimateSM()
      }
    }
  },[isLetters])
  return (
    <div className='hero-details p-5 md:p-0 md:flex md:flex-col md:justify-center md:items-start lg:w-1/2 lg:h-screen md:pl-[100px]'>
      <div className='hero-details-button-wrapper my-2 p-[2px] h-fit w-fit rounded-full bg-gradient-to-r from-red-500 to-green-500'>
        <button className="px-2 py-0 bg-gray-900 rounded-full">Introducing Marketing Emails</button>
      </div>
      <h1 ref={headingRef} className='hero-details-h flex flex-wrap text-white text-5xl my-5 font-bold min-w-fit'>Email For Developers</h1>
      <p ref={paragraphRef_1} className='hero-details-p1 flex flex-wrap mb-0'>The best way to reach humans instead of spam folders.</p>
      <p ref={paragraphRef_2} className='hero-details-p2 flex flex-wrap mb-5'>Deliver transactional and marketing emails at scale.</p>
      <div className="flex">
        <button className="hero-details-button bg-rose-100 hover:bg-rose-200 text-black py-2 px-6 rounded-full font-bold">Get Started</button>
      </div>
    </div>
  )
}

export default Details
