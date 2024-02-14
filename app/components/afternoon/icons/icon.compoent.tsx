import React from 'react'
import Image from 'next/image'

const Icon:React.FC<{img:string; title:string}> = ({img,title}) => {
  return (
    <div className='afternoon-icon mx-6 p-2 text-center'>
      <div className="afternoon-icon-content mx-auto w-10 h-10 rounded-lg border-[1px] border-slate-100/50 flex justify-center items-center">
        <Image src={img} alt={title} width={30} height={30} />
      </div>
      <h3 className="text-md font-bold mt-2 italic">{title}</h3>
    </div>
  )
}

export default Icon
