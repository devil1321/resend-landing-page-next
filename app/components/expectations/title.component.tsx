import React from 'react'

interface TitleProps{
    title:string;
    paragraph:string;
}

const Title:React.FC<TitleProps> = ({title,paragraph}) => {
  return (
    <div>
      <h2 className="text-5xl my-5 text-center">{title}</h2>
      <p className="text-sm mx-auto text-center md:w-1/2">{paragraph}</p>
    </div>
  )
}

export default Title
