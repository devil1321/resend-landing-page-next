import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='footer flex flex-wrap justify-start items-start my-12 px-12'>
      <div className="w-1/1 md:w-1/5 lg:w-2/6">
        <div className="footer-col-content mb-5">
          <p className='text-sm'>2261 Market Street #5039</p>
          <p className='text-sm'>San Francisco, CA 94114</p>
        </div>
        <div className="footer-icons mb-5 w-2/5 flex justify-between items-center">
          <Image src="/assets/footer-icon-1.png" alt="footer-icon" width={30} height={30}/>
          <Image src="/assets/footer-icon-2.png" alt="footer-icon" width={30} height={30}/>
          <Image src="/assets/footer-icon-3.png" alt="footer-icon" width={30} height={30}/>
          <Image src="/assets/footer-icon-4.png" alt="footer-icon" width={30} height={30}/>
        </div>
      </div>
      <div className="w-1/2 md:w-1/5 lg:w-1/6">
        <h3 className='text-sm font-bold mb-5'>Documentation</h3>
        <Link className='block my-3 hover:underline no-underline text-white' href="#">Getting Started</Link>
        <Link className='block my-3 hover:underline no-underline text-white' href="#">API Reference</Link>
        <Link className='block my-3 hover:underline no-underline text-white' href="#">Integrations</Link>
        <Link className='block my-3 hover:underline no-underline text-white' href="#">Examples</Link>
        <Link className='block my-3 hover:underline no-underline text-white' href="#">SDKs</Link>
      </div>
      <div className="w-1/2 md:w-1/5 lg:w-1/6">
        <h3 className='text-sm font-bold'>Resources</h3>
        <Link className='block my-3 hover:underline no-underline text-white' href="#">Changelog</Link>
        <Link className='block my-3 hover:underline no-underline text-white' href="#">Pricing</Link>
        <Link className='block my-3 hover:underline no-underline text-white' href="#">Security</Link>
        <Link className='block my-3 hover:underline no-underline text-white' href="#">Status</Link>
      </div>
      <div className="w-1/2 md:w-1/5 lg:w-1/6">
        <h3 className='text-sm font-bold'>Company</h3>
        <Link className='block my-3 hover:underline no-underline text-white' href="#">Blog</Link>
        <Link className='block my-3 hover:underline no-underline text-white' href="#">Contact</Link>
        <Link className='block my-3 hover:underline no-underline text-white' href="#">Customers</Link>
        <Link className='block my-3 hover:underline no-underline text-white' href="#">Brand</Link>
      </div>
      <div className="w-1/2 md:w-1/5 lg:w-1/6">
        <h3 className='text-sm font-bold'>Legal</h3>
        <Link  className='block my-3 hover:underline no-underline text-white'href="#">Acceptable Use</Link>
        <Link  className='block my-3 hover:underline no-underline text-white'href="#">Privacy Policy</Link>
        <Link  className='block my-3 hover:underline no-underline text-white'href="#"></Link>
        <Link  className='block my-3 hover:underline no-underline text-white'href="#">Terms of Service</Link>
      </div>
    </div>
  )
}

export default Footer
