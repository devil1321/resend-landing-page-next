import React from 'react'
import Image from 'next/image';

interface CardProps {
    icon:string;
    title:string;
    paragraph:string;
}

const Card:React.FC<CardProps> = ({icon,title,paragraph}) => {
  return (
    <div className='reach-humans-card md:w-1/4 py-1 px-2'>
      <Image className='my-2 ' src={icon} alt="icon" width={30} height={30} />
      <h3 className="my-2 text-lg">{title}</h3>
      <p className="my-2 text-sm">{paragraph}</p>
    </div>
  )
}

export default Card
