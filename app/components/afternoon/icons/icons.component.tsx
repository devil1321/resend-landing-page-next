import React from 'react'
import Icon from './icon.compoent'
const Icons = () => {
  return (
    <div className='flex flex-wrap lg:flex-nowrap justify-center items-center'>
      <Icon img="/assets/node-js.png" title="Node.js" />
      <Icon img="/assets/thunder.png" title="Serverless" />
      <Icon img="/assets/ruby.png" title="Ruby" />
      <Icon img="/assets/python.png" title="Python" />
      <Icon img="/assets/php.png" title="PHP" />
      <Icon img="/assets/go.png" title="Go" />
      <Icon img="/assets/java.png" title="Java" />
      <Icon img="/assets/elixir.png" title="Elixir" />
      <Icon img="/assets/rest.png" title="REST" />
      <Icon img="/assets/smtp.png" title="SMTP" />
    </div>
  )
}

export default Icons
