import React from 'react'
import Image from 'next/image'
import Feature from './feature.component'

const MacIde = () => {
  return (
    <div className='mac-ide md:overflow-hidden md:max-h-[620px] ml-2 md:ml-12 lg:ml-16 mx-auto md:flex md:justify-start md:items-start bg-neutral-950'>
      <Image className='md:w-1/5 mac-ide-files' src="/assets/mac-ide-aside.png" alt="mac-ide" width={200} height={500}/>
      <Image className='md:w-2/5' src="/assets/mac-ide.png" alt="mac-ide" width={500} height={500}/>
      <Feature />
    </div>
  )
}

export default MacIde
