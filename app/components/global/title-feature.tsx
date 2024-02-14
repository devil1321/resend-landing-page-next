import React from 'react'
import Image from 'next/image'

interface TitleFeatureProps{
  img:string;
  title:string;
  text:string;
  isButtons?:boolean;
}

const TitleFeature:React.FC<TitleFeatureProps> = ({img,title,text,isButtons}) => {
  return (
    <div className='title-feature flex flex-col items-center justify-start text-center'>
       <Image src={img} alt="feature-logo" width={100} height={100} />
       <h2 className="text-5xl mt-2 mb-5 font-bold" dangerouslySetInnerHTML={{__html:title}}></h2>
       <p className={`md:w-2/5 mx-auto ${!isButtons && 'mb-12'}`}>{text}</p>
       {isButtons &&
         <div className='buttons flex my-12'>
          <button className='hover:opacity-70 rounded-full mx-1 px-6 py-2 bg-white text-black font-bold'>Get Started</button>
          <button className='hover:opacity-70 rounded-full mx-1 px-6 py-2 bg-slate-900 text-white font-bold'>Check the docs</button>
        </div>}
    </div>
  )
}

export default TitleFeature
