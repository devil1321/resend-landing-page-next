'use client'
import React from 'react'
import Link from 'next/link'
import gsap from 'gsap'
const Nav = () => {

  const handleNav = () =>{
    if(typeof window !== undefined){
      if(typeof document !== undefined){
        const nav_menu = document.querySelector('.nav-menu') as HTMLDivElement
        if(nav_menu.classList.contains('--open')){
          gsap.fromTo('a',{ opacity:1 },{ opacity:0,duration:1,stagger:0.2,delay:1,onComplete:()=>{}})
          const timeOut = setTimeout(() => {
            nav_menu.classList.remove('--open')
          }, 2000);
        }else{
          nav_menu.classList.add('--open')
          gsap.fromTo('a',{ opacity:0 },{ opacity:1,duration:1,stagger:0.2,delay:1 })
        }
      }
    }
  }

  return (
    <div className='nav relative z-10 top-0 left-0 py-5 pl-12 pr-0 flex justify-between items-center'>
      <h2 className='nav-logo text-lg font-bold'>RESEND</h2>
      <div className="nav-menu overflow-hidden border-0 w-[300px] md:w-[700px] lg:w-100 rounded-lg lg:rounded-none border-slate-300/50 mx-2 bg-[radial-gradient(200px,rgba(40,40,40),black)] lg:bg-transparent lg:border-0 md:text-center lg:text-left absolute top-[80px] lg:top-0 left-10 md:left-5 lg:left-0 lg:relative md:ml-10">
        <div className="nav-links-conntent p-2 lg:p-0">
          <Link className='text-center lg:text-left my-2 lg:my-0 mx-4 block hover:underline hover:text-slate-400 lg:inline-block' href="#">About</Link>
          <Link className='text-center lg:text-left my-2 lg:my-0 mx-4 block hover:underline hover:text-slate-400 lg:inline-block' href="#">Blog</Link>
          <Link className='text-center lg:text-left my-2 lg:my-0 mx-4 block hover:underline hover:text-slate-400 lg:inline-block' href="#">Customers</Link>
          <Link className='text-center lg:text-left my-2 lg:my-0 mx-4 block hover:underline hover:text-slate-400 lg:inline-block' href="#">Pricing</Link>
          <Link className='text-center lg:text-left my-2 lg:my-0 mx-4 block hover:underline hover:text-slate-400 lg:inline-block' href="#">Enterprise</Link>
          <Link className='text-center lg:text-left my-2 lg:my-0 mx-4 block hover:underline hover:text-slate-400 lg:inline-block' href="#">Changelog</Link>
          <Link className='text-center lg:text-left my-2 lg:my-0 mx-4 block hover:underline hover:text-slate-400 lg:inline-block' href="#">Docs</Link>
        </div>
      </div>
      <div className="nav-buttons">
        <button className='px-5 py-2 rounded-full font-bold mx-2'>Sign In</button>
        <button  onClick={()=>handleNav()} className='px-5 py-2 rounded-full font-bold mx-2 bg-white text-black'>Get Started</button>
      </div>
    </div>
  )
}

export default Nav
