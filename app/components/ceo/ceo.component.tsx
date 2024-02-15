import React from 'react'
import Image from 'next/image'

const Ceo = () => {
  return (
    <div className='ceo w-1/3 mx-auto my-12'>
      <Image className='block my-5 mx-auto' src="/assets/play-rotated.png" alt="logo" width={70} height={70} />
      <p className='text-center mx-auto md:w-3/4'>Resend is transforming email for developers. Simple interface, easy integrations, handy templates. What else could we ask for.</p>
      <div className="ceo-profile my-5 flex justify-center items-center">
        <Image className='mr-4 rounded-full' src="/assets/ceo-profile-img.png" alt='ceo' width={30} height={30} />
        <div className="ceo-profile-content">
            <p>Guillermo Rauch</p>
            <p className='text-slate-300'>CEO at Vercel</p>
        </div>
      </div>
    </div>
  )
}

export default Ceo
