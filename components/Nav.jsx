'use client';
import { SectionContext } from '@/app/SectionContext';
import Link from 'next/link'
import React, { useContext } from 'react'

const Nav = () => {

  const { currentSection } = useContext(SectionContext);
  const { home, about, projects, contact } = currentSection;

  return (

    <nav className='flex w-full h-24 px-10 py-6 gap-8 fixed items-center justify-end z-50'>
      <Link className={`nav-item ${home ? 'nav-active' : ''}`} href='/'>Home</Link>
      <Link className={`nav-item ${about ? 'nav-active' : ''}`} href='#about'>About</Link>
      <Link className={`nav-item ${projects ? 'nav-active' : ''}`} href='#projects'>Projects</Link>
      <Link className={`nav-item ${contact ? 'nav-active' : ''}`} href='#contact'>Contact</Link>
    </nav>


  )
}

export default Nav