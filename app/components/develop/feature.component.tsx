import React from 'react'
import Image from 'next/image'

const Feature = () => {
  return (
    <div className='mac-ide-feature p-10 md:w-2/5 md:h-[500px] flex flex-col justify-center items-center bg-[radial-gradient(200px,rgba(50,50,255,0.1),transparent)]'>
      <Image className='my-5' src="/assets/mac-ide-logo.png" alt="mac-ide-logo" width={50} height={50} />
      <div className='mac-ide-feature-details'>
        <h2 className="text-3xl text-center">Welcome to <span className='font-bold'>ACME</span>, user</h2>
        <p className='text-sm my-2'>Hello newuser,</p>
        <p className='text-sm my-2'>We`re excited to have you onboard at ACME. We hope you enjoy your journey with us. If you have any questions or need assistance, feel free to reach out.</p>
        <button className='block rounded-md bg-sky-600 px-3 py-1 my-10 mx-auto'>Get Started</button>
        <p className='text-sm mt-2'>Cheers</p>
        <p className='text-sm'>The ACME Team</p>
      </div>
    </div>
  )
}

export default Feature
