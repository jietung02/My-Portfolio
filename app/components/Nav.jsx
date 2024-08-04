'use client';
import CIcon from '@coreui/icons-react';
import { cilHamburgerMenu, cilX } from '@coreui/icons';
import { Link, } from 'react-scroll';
import { useState } from 'react';

const Nav = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => {
      return !prev;
    });
  };

  // useEffect(()=> {
  //   Events.scrollEvent.register('begin', (to, element) => {
  //     console.log('begin', to, element);
  //   });

  //   Events.scrollEvent.register('end', (to, element) => {
  //     console.log('end', to, element);
  //   });

  //   scrollSpy.update();

  //   return () => {
  //     Events.scrollEvent.remove('begin');
  //     Events.scrollEvent.remove('end');
  //   };
  // },[])

  return (
    <nav className={`w-full z-50 fixed ${isOpen ? 'bg-[#FFF1FA] opacity-90' : ''} lg:bg-transparent px-4 py-6 items-center`}>
      {/* px-10 py-6 gap-8 fixed items-center md:justify-end */}
      <div className='block lg:hidden'>
        <button
          className='flex items-center ml-auto'
          onClick={toggleDropdown}>
          <CIcon
            icon={cilHamburgerMenu}
            width={30}
            height={30}
            style={{ fill: '#000000' }}
            className={`${isOpen ? 'hidden' : 'block'}`}
          />
          <CIcon
            icon={cilX}
            width={30}
            height={30}
            style={{ fill: '#000000' }}
            className={`${isOpen ? 'block' : 'hidden'}`}
          />

        </button>
      </div>

      <div
        className={`w-full flex flex-col gap-8 lg:flex lg:flex-row lg:items-center lg:justify-end lg:w-auto lg:px-8 lg:py-4 lg:gap-8 ${isOpen ? 'block' : 'hidden'} `}>
        <Link
          activeClass='nav-active'
          to='home'
          spy={true}
          smooth='easeInOutQuart'
          hashSpy={true}
          duration={200}
          delay={0}
          className='nav-item'
        >
          Home
        </Link>

        <Link
          activeClass='nav-active'
          to='about'
          spy={true}
          smooth='easeInOutQuad'
          hashSpy={true}
          duration={200}
          delay={0}
          className='nav-item'
        >
          About
        </Link>

        <Link
          activeClass='nav-active'
          to='projects'
          spy={true}
          smooth='easeInOutQuint'
          hashSpy={true}
          duration={200}
          delay={0}
          className='nav-item'
        >
          Projects
        </Link>

        <Link
          activeClass='nav-active'
          to='contact'
          spy={true}
          smooth='easeInCubic'
          hashSpy={true}
          duration={200}
          delay={0}
          className='nav-item'
        >
          Contact
        </Link>
      </div>
    </nav>




  )
}

export default Nav;