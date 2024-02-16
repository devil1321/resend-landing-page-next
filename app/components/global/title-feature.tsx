'use client'
import React, { MutableRefObject, useRef,useEffect, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface TitleFeatureProps{
  img?:string;
  title:string;
  text?:string;
  isButtons?:boolean;
}

const TitleFeature:React.FC<TitleFeatureProps> = ({img,title,text,isButtons}) => {

  const [isLoad,setIsLoad] = useState<boolean>(false)
  const [isSet,setIsSet] = useState<boolean>(false)
  const mainRef = useRef() as MutableRefObject<HTMLDivElement>
  const imageRef = useRef() as MutableRefObject<HTMLImageElement>
  const headingRef = useRef() as MutableRefObject<HTMLHeadingElement>

  const handleMakeLetters = () =>{
    // @ts-ignore
    if(typeof window !== 'undefined'){
      if(typeof document !== 'undefined'){
        // @ts-ignore
        const words = headingRef.current.textContent.split(' ') 
        headingRef.current.innerHTML = ''
        words.forEach((w:string)=>{
          const place = document.createElement('div') as HTMLDivElement
          place.classList.add('flex')
          place.classList.add('mr-[5px]')
          w.split('').forEach((l:string)=>{
            const span = document.createElement('span')
            span.classList.add('block')
            if(window.innerWidth > 767){
              span.classList.add('text-5xl')
            }else{
              span.classList.add('text-3xl')
            }
            span.classList.add('font-bold')
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
          headingRef.current.appendChild(place)
        })
      }
    }    
  }

  const handleAnimate = () =>{
    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline()
    if(img){
      tl.fromTo(imageRef.current,{ y:-100,opacity:0 },{
        y:0,
        opacity:1,
        scrollTrigger:{
          trigger:mainRef.current,
        start:'-=500px',
        end:'-=400px',
        scrub:3
      }
    })
    tl.fromTo(headingRef.current.querySelectorAll('span'),{ y:-100,opacity:0 },{
      y:0,
      opacity:1,
      stagger:1.5,
      scrollTrigger:{
        trigger:mainRef.current,
        start:'-=450px',
        end:'-=400px',
        scrub:5
        }
      })
    }
  }


  useEffect(()=>{
    if(isLoad && !isSet){
      handleMakeLetters()    
      setIsSet(true)
    }
    if(isSet){
      handleAnimate()
    }
    setIsLoad(true)
  },[isLoad,isSet])

  return (
    <div ref={mainRef} className='title-feature flex flex-col items-center justify-start text-center'>
       {img && <Image ref={imageRef} className="title-feature-img" src={img} alt="feature-logo" width={100} height={100} />}
       <h2 ref={headingRef} className="text-5xl mt-2 mb-5 font-bold flex">{title}</h2>
       {text && <p className={`md:w-2/5 mx-auto ${!isButtons && 'mb-12'}`}>{text}</p>}
       {isButtons &&
         <div className='buttons flex my-12'>
          <button className='hover:opacity-70 rounded-full mx-1 px-6 py-2 bg-white text-black font-bold'>Get Started</button>
          <button className='hover:opacity-70 rounded-full mx-1 px-6 py-2 bg-slate-900 text-white font-bold'>Check the docs</button>
        </div>}
    </div>
  )
}

export default TitleFeature
