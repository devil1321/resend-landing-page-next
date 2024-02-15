import React from 'react'
import Icons from './icons/icons.component'
import Ide from './ide.component'
import { GlobalComponents } from '../global'

const Afternoon = () => {
  return (
    <div className='my-12'>
      <GlobalComponents.TitleFeature img="/assets/message-logo.png" title='Integrate this afternoon' text="A simple, elegant interface so you can start sending emails in minutes. It fits right into your code with SDKs for your favorite programming languages." />
      <Icons />
      <Ide />
    </div>
  )
}

export default Afternoon
