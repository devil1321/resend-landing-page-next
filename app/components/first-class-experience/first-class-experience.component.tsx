import React from 'react'
import Intro from './intro.component'
import Item from './item.component'

const FirstClassExperience = () => {
  return (
    <div className='p-10 md:flex-wrap md:flex md:justify-center md:items-start'>
      <Intro />
      <Item img='/assets/experience-test.png' icon="/assets/alchemy-icon.png" title='Test Mode' text='Simulate events and experiment with our API without the risk of accidentally sending real emails to real people.' />
      <Item img='/assets/experience-webhooks.png' icon="/assets/webhooks-icon.png" title='Test Mode' text='Simulate events and experiment with our API without the risk of accidentally sending real emails to real people.' />
    </div>
  )
}

export default FirstClassExperience
