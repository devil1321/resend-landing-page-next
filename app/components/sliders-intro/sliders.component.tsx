import React from 'react'
import Intro from './intro.component'
import Slider from './slider.component'
const Sliders = () => {
  return (
    <div className='sliders mt-[200px] md:my-[100px]'>
      <Intro  text='Companies of all sizes trust Resend to deliver their most important emails.'/>
      <Slider images={['/assets/logo-top-1.png','/assets/logo-top-2.png','/assets/logo-top-3.png','/assets/logo-top-4.png','/assets/logo-top-5.png','/assets/logo-top-6.png']} direction="left" />
      <Slider images={['/assets/logo-bottom-1.png','/assets/logo-bottom-2.png','/assets/logo-bottom-3.png','/assets/logo-bottom-4.png','/assets/logo-bottom-5.png','/assets/logo-bottom-6.png']} direction="right" />
    </div>
  )
}

export default Sliders
