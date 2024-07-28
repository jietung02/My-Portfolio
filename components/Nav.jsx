import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <nav className='flex w-full h-24 px-10 py-6 gap-8 fixed items-center justify-end z-50'>
      <Link className='nav-item' href='/'>Home</Link>
      <Link className='nav-item' href='#about'>About</Link>
      <Link className='nav-item' href='#projects'>Projects</Link>
      <Link className='nav-item' href='#contact'>Contact</Link>
    </nav>
  )
}

export default Nav