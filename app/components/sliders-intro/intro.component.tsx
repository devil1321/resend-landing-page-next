import React from 'react'

const Intro:React.FC<{text:string}> = ({text}) => {
  return (
    <div className='sliders-intro mb-5 mx-auto md:w-[300px] text-center'>
      {text}
    </div>
  )
}

export default Intro
