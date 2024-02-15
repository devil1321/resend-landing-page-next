import React from 'react'
import Image from 'next/image'
const Item = () => {
  return (
    <div className='control-item'>
        <div className="control-item-buttons my-5 md:flex md:justify-center md:items-center md:gap-10">
            <button className='control-item-button overflow-hidden relative top-0 left-0 flex items-center bg-neutral-950 px-6 py-2 rounded-md block w-100 md:w-1/7'>
                <Image className='mr-4' src="/assets/button-logo-1.png" alt="btn-logo" width={20} height={20} />
                <span>Intuitive Analytics</span>
                </button>
            <button className='control-item-button overflow-hidden relative top-0 left-0 flex items-center bg-neutral-950 px-6 py-2 rounded-md block w-100 md:w-1/7'>
                <Image className='mr-4' src="/assets/button-logo-2.png" alt="btn-logo" width={20} height={20} />
                <span>Full Visibility</span>
                </button>
            <button className='control-item-button overflow-hidden relative top-0 left-0 flex items-center bg-neutral-950 px-6 py-2 rounded-md block w-100 md:w-1/7'>
                <Image className='mr-4' src="/assets/button-logo-3.png" alt="btn-logo" width={20} height={20} />
                <span>Domain Authentication</span>
            </button>
        </div>
        <Image className='my-5 mx-auto' src="/assets/chart.png" alt="chart" width={1000} height={1000} />
    </div>
  )
}

export default Item
