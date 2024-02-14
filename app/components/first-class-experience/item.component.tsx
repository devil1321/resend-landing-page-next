import React from 'react'
import Image from 'next/image';

interface TestModeProps{
    img:string;
    icon:string;
    title:string;
    text:string;
}

const Item:React.FC<TestModeProps> = ({img,icon,title,text}) => {
  return (
    <div className='first-class-item md:w-1/2'>
      <Image src={img} alt='item-img' width={500} height={500} />
      <div className="md:mt-10 mx-auto first-class-item-details md:w-2/3">
        <Image src={icon}  alt='icon' width={25} height={25} />
        <h2 className="text-xl text-white">{title}</h2>
        <p className="text-sm text-white">{text}</p>
      </div>
    </div>
  )
}

export default Item
