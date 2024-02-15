import React from 'react'
import Image from 'next/image';

interface CarouselItemProps{
  paragraph:string;
  name:string;
  company:string;
  profileImg:string;
}

const CarouselItem:React.FC<CarouselItemProps> = ({paragraph,name,company,profileImg}) => {
  return (
    <div className='expectations-carousel-item rounded-lg border-[1px] border-slate-100/10 mx-2 bg-[radial-gradient(200px,rgba(20,20,20),transparent)] pointer-events-none cursor-pointer p-5 max-w-[350px] md:max-w-[420px]'>
      <p className='text-sm select-none'>{paragraph}</p>
      <div className="expectations-carousel-item-profile flex items-center">
        <Image className='rounded-full select-none  mr-2 my-5' src={profileImg} alt="profile-img" width={100} height={100} />
        <div className='min-w-fit select-none '>
          <p className=' select-none text-sm min-w-fit max-w-fit'>{name}</p>
          <p className=' select-none text-sm min-w-fit max-w-fit'>{company}</p>
        </div>
      </div>
    </div>
  )
}

export default CarouselItem
