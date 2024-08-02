'use client';
import { Link, } from 'react-scroll';

const Nav = () => {


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

    <nav className='flex w-full h-24 px-10 py-6 gap-8 fixed items-center justify-end z-50 '>
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

    </nav>


  )
}

export default Nav