'use client'
import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

const Slider:React.FC<{images:string[],direction:string}> = ({images,direction}) => {

  const [refactored,setRefactored] = useState<string[]>([])

  const handleSlider = () =>{
    let tmp:string[] = []
    tmp = [...images,...images]
    setRefactored(tmp)
  }

  useEffect(()=>{
    handleSlider()
  },[images])

  return (
    <div className='sliders-slider-wrapper'>
      <div data-direction={direction}  className="sliders-slider h-24 flex flex-nowrap justify-start items-center">
        {refactored.map((src:string,i:number)=> <Image className='mx-[80px] min-w-[100px] max-w-[100px] h-6' key={src + `-${i}`} src={src} alt='slider-logo' width={100} height={20} />)}
      </div>
    </div>
  )
}

export default Slider
