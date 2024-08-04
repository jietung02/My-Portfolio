'use client'
import Image from 'next/image';
import profileicon from "../../public/assets/imageicon.png";
import { CIcon, CIconSvg } from '@coreui/icons-react';
import { cibAmazonAws, cibCss3Shiled, cibDocker, cibGit, cibHtml5Shield, cibJavascript, cibMongodb, cibMysql, cibNextJs, cibNodeJs, cibReact, } from '@coreui/icons';
import { motion, } from "framer-motion";
import useScreenSize from '../hooks/useScreenSize';


const About = () => {

  const { width } = useScreenSize();

  return (
    <section id='about'
      className=" flex flex-col w-full bg-[#f3e5f5] shadow-xl shadow-[#e7c9d7] min-h-screen items-center"
    >
      <h1 className='justify-center pt-40 text-3xl md:text-4xl font-extrabold tracking-wide'>
        About Me
      </h1>
      <div className='flex flex-col xl:flex-row xl:items-center xl:justify-center h-full min-h-screen w-full px-10 py-14 md:p-20 2xl:px-44 2xl:py-16'>
        <motion.div className='w-full xl:w-1/2 xl:p-12 2xl:p-4'
          initial={{ opacity: 0, x: width < 1280 ? 0 : '-50px' }} // Initial scale and rotation
          whileInView={{ opacity: 1, x: 0 }} // Final scale and rotation
          transition={{ ease: "easeOut", duration: 1.2 }}
          viewport={{ amount: 0.3 }} // Trigger when 30% in view
        >
          <div className='text-custom-dark-gray '>
            <div className='relative w-72 h-72 mx-auto ring-cyan-300'>
              <Image
                src={profileicon}
                alt='myPic'
                style={{ objectFit: 'cover' }}
                fill
                unoptimized
                className='rounded-full mx-auto ring-2 '
              />
            </div>

            <div className='text-base md:text-lg font-medium text-justify mt-12'>
              <p className='leading-loose md:p-8' >I am a passionate full-stack developer dedicated to continuous learning and personal growth. Committed to long-term development, I thrive on acquiring new skills and enhancing my knowledge. My collaborative and energetic nature drives me to explore new technologies and uncover innovative solutions, finding satisfaction in each discovery. Outside of my professional life, I have a keen interest in understanding human behavior and exploring diverse perspectives. I enjoy listening to music, gaming, and reading books, all of which fuel my curiosity and enthusiasm for learning.</p>
            </div>

            <div className='flex w-full justify-center text-base md:text-lg mt-6'>
              <a
                href='/myresume.pdf'
                target='_blank'
                rel='noreferrer'
                className='font-medium bg-[#22095e] text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-[#673AB7] hover:text-white hover:ring-2 hover:ring-white'
              >
                View My Resume
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div className='w-full xl:flex-row xl:w-1/2 mt-2 py-20 '
          initial={{ opacity: 0, x: width < 1280 ? 0 : '50px' }} // Initial scale and rotation
          whileInView={{ opacity: 1, x: 0 }} // Final scale and rotation
          transition={{ ease: "easeOut", duration: 1.2 }}
          viewport={{ amount: 0.3 }} // Trigger when 30% in view
        >
          <div className='flex flex-wrap gap-2 justify-center '>

            <div className='md:flex md:justify-end md:w-5/12 md:px-4'>
              <div className="w-32 p-1 bg-gradient-to-r from-rose-200 via-fuchsia-200 to-indigo-200 rounded-full">
                <div className="flex flex-col justify-center w-full h-28 p-4 bg-white rounded-full">
                  <CIcon icon={cibReact} className="text-primary mx-auto" />
                  <p className="pt-2 mx-auto">React</p>
                </div>
              </div>
            </div>

            <div className='md:flex md:justify-start md:w-5/12 md:px-4'>
              <div className="w-32 p-1 bg-gradient-to-r from-rose-200 via-fuchsia-200 to-indigo-200 rounded-full">
                <div className="flex flex-col justify-center w-full h-28 p-4 bg-white rounded-full">
                  <CIcon icon={cibNodeJs} className="text-primary mx-auto" />
                  <p className="pt-2 mx-auto">NodeJS</p>
                </div>
              </div>
            </div>

            <div className='md:flex md:justify-end md:w-[35%]'>
              <div className=" w-32 p-1 bg-gradient-to-r from-rose-200 via-fuchsia-200 to-indigo-200 rounded-full ">
                <div className="flex flex-col justify-center w-full h-28 p-4 bg-white rounded-full">
                  <CIcon icon={cibAmazonAws} className="text-primary mx-auto" />
                  <p className="pt-2 mx-auto">AWS</p>
                </div>
              </div>
            </div>

            <div className='md:flex md:justify-center md:w-[20%]'>
              <div className=" w-32 p-1 bg-gradient-to-r from-rose-200 via-fuchsia-200 to-indigo-200 rounded-full">
                <div className="flex flex-col justify-center w-full h-28 p-4 bg-white rounded-full">
                  <CIcon icon={cibCss3Shiled} className="text-primary mx-auto" />
                  <p className="pt-2 mx-auto">CSS</p>
                </div>
              </div>
            </div>

            <div className='md:flex md:justify-start md:w-[35%]'>
              <div className=" w-32 p-1 bg-gradient-to-r from-rose-200 via-fuchsia-200 to-indigo-200 rounded-full">
                <div className="flex flex-col justify-center w-full h-28 p-4 bg-white rounded-full">
                  <CIcon icon={cibDocker} className="text-primary mx-auto" />
                  <p className="pt-2 mx-auto">Docker</p>
                </div>
              </div>
            </div>

            <div className='md:flex md:justify-end md:w-[25%]'>
              <div className=" w-32 p-1 bg-gradient-to-r from-rose-200 via-fuchsia-200 to-indigo-200 rounded-full">
                <div className="flex flex-col justify-center w-full h-28 p-4 bg-white rounded-full">
                  <CIconSvg size="4xl" className='mx-auto'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="64" height="64"><path d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z" /></svg>
                  </CIconSvg>
                  <p className="pt-2 mx-auto">ExpressJS</p>
                </div>
              </div>
            </div>

            <div className='md:flex md:justify-center md:w-[20%]'>
              <div className=" w-32 p-1 bg-gradient-to-r from-rose-200 via-fuchsia-200 to-indigo-200 rounded-full">
                <div className="flex flex-col justify-center w-full h-28 p-4 bg-white rounded-full">
                  <CIcon icon={cibGit} className="text-primary mx-auto" />
                  <p className="pt-2 mx-auto">Git</p>
                </div>
              </div>
            </div>


            <div className='md:flex md:justify-center md:w-[20%]'>
              <div className=" w-32 p-1 bg-gradient-to-r from-rose-200 via-fuchsia-200 to-indigo-200 rounded-full">
                <div className="flex flex-col justify-center w-full h-28 p-4 bg-white rounded-full">
                  <CIcon icon={cibHtml5Shield} className="text-primary mx-auto" />
                  <p className="pt-2 mx-auto">HTML</p>
                </div>
              </div>
            </div>



            <div className='md:flex md:justify-start md:w-[25%]'>
              <div className=" w-32 p-1 bg-gradient-to-r from-rose-200 via-fuchsia-200 to-indigo-200 rounded-full">
                <div className="flex flex-col justify-center w-full h-28 p-4 bg-white rounded-full">
                  <CIcon icon={cibJavascript} className="text-info mx-auto" />
                  <p className="pt-2 mx-auto">JavaScript</p>
                </div>
              </div>
            </div>

            <div className='md:flex md:justify-end md:w-[35%]'>
              <div className=" w-32 p-1 bg-gradient-to-r from-rose-200 via-fuchsia-200 to-indigo-200 rounded-full">
                <div className="flex flex-col justify-center w-full h-28 p-4 bg-white rounded-full">
                  <CIcon icon={cibMongodb} className="text-primary mx-auto" />
                  <p className="pt-2 mx-auto">MongoDB</p>
                </div>
              </div>
            </div>

            <div className='md:flex md:justify-center md:w-[20%]'>
              <div className=" w-32 p-1 bg-gradient-to-r from-rose-200 via-fuchsia-200 to-indigo-200 rounded-full">
                <div className="flex flex-col justify-center w-full h-28 p-4 bg-white rounded-full">
                  <CIcon icon={cibMysql} className="text-primary mx-auto" />
                  <p className="pt-2 mx-auto">MySQL</p>
                </div>
              </div>
            </div>

            <div className='md:flex md:justify-start md:w-[35%]'>
              <div className=" w-32 p-1 bg-gradient-to-r from-rose-200 via-fuchsia-200 to-indigo-200 rounded-full">
                <div className="flex flex-col justify-center w-full h-28 p-4 bg-white rounded-full">
                  <CIcon icon={cibNextJs} className="text-primary mx-auto" />
                  <p className="pt-2 mx-auto">Next.js</p>
                </div>
              </div>
            </div>


          </div>
        </motion.div>
      </div >
    </section >
  )
}

export default About