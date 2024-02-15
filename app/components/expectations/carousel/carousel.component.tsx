'use client'
import React, { MutableRefObject, useEffect, useState, useRef } from 'react'
import CarouselItem from './carousel-item.component'

const Carousel = () => {

  const [startPos,setStartPos] = useState(0)
  const [actualPos,setActualPos] = useState(0)

  const carouselRef = useRef() as MutableRefObject<HTMLDivElement>

  const handleDragStart = (e:any) =>{
    const rect = carouselRef.current.getBoundingClientRect()
    if(e.touches?.length > 0){
      setStartPos(e.touches[0].pageX - rect.left)
    }else{
      setStartPos(e.pageX - rect.left)
    }
  }

  const handleDragMove = (e:any) =>{
    if(e.touches?.length > 0){
      setActualPos(startPos - e.touches[0].clientX)
    }else{
      setActualPos(startPos - e.clientX)
    }
  }

  const handleDragEnd = () =>{
    setStartPos(0)
  }

  const handleTranslate = () =>{
    if(actualPos > 0 && actualPos < carouselRef.current.clientWidth - 400){
      carouselRef.current.style.transform = `translateX(${actualPos * (-1)}px)`
    }
  }

  useEffect(()=>{
    handleTranslate()
  },[actualPos])

  return (
    <div className='expectations-carousel-wrapper overflow-x-hidden px-2 md:px-5 my-12'>
      <div ref={carouselRef} className='expectations-carousel w-max flex'
        onTouchStart={(e)=>handleDragStart(e)}
        onTouchMove={(e)=>handleDragMove(e)}
        onTouchEnd={(e)=>handleDragEnd()}
        onMouseDown={(e)=>handleDragStart(e)}
        onMouseMove={(e)=>handleDragMove(e)}
        onMouseUp={(e)=>handleDragEnd()}
      >
        <CarouselItem paragraph='"Resend is an amazing product. It was so easy to switch over. I feel confident knowing that our important emails are in good hands with Resend. Everyone should be using this."' profileImg='/assets/profile-1.png' name='Shariar Kabir' company='Founder at Ruby Card'/>
        <CarouselItem paragraph='"All of our customers are located in South America, so having a solution that could send emails from the region closest to our users is very important. Resend`s multi region feature is a game-changer for us."' profileImg='/assets/profile-2.png' name='Giovanni Keppelen' company='CTO & Partner at VOA Hoteis'/>
        <CarouselItem paragraph='"The speed and ease of integrating with the product was incredible, but what really stood out was their intricate knowledge of email and relentless support day or night. Oh and we also ended up winning Product of the week."' profileImg='/assets/profile-1.png' name='Sam Ducker' company='Co-founder of Anyone'/>
        <CarouselItem paragraph='"As a developer I love the approach that the Resend team is taking. Its so refreshing. They are also extremely user- centric and helpful in terms of getting you up and running, sending beautiful emails that deliver."' profileImg='/assets/profile-3.png' name='Hahnbee Lee' company='Co-Founder at Mintlify'/>
        <CarouselItem paragraph='"The Resend team have built a great product in a space that hasn`t seen 10x innovation for years. Engineering peers are raving about Resend - it`s such a smoother dev experience."' profileImg='/assets/profile-2.png' name='Roberto Riccio' company='Head of Product at Alliance'/>
      </div>
    </div>
  )
}

export default Carousel
