import React from 'react'
import { GlobalComponents } from '../global'
import Item from './item.component'

const Control = () => {
  return (
    <div className='control md:my-12'>
      <GlobalComponents.TitleFeature img='/assets/ball-logo.png' title='Everything in your control' text='All the features you need to manage your email sending, troubleshoot with detailed logs, and protect your domain reputation – without the friction.'/>
      <Item />
    </div>
  )
}

export default Control
