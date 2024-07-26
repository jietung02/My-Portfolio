import Image from 'next/image';
import salonxpert from '../public/assets/salonxpert.png';

const Card = () => {

  const projects = [
    {
      title: 'SalonXpert',
      description: 'A Cloud-Integrated and Customisable Salon Management Solution',
      image: salonxpert,
      technologies: ['React', 'NodeJS', 'MySQL', 'AWS', 'Docker'],
      liveUrl: 'http://salon-xpert.ap-southeast-1.elasticbeanstalk.com/',
      repoUrl: 'https://github.com/jietung02/Salon-Xpert-Frontend',
    },
    {
      title: 'Discord Bot - Romaji Lyrics Finder',
      description: 'A bot that fetches romaji lyrics of the currently playing Japanese song on Spotify when you type `!lyr` in a Discord channel.',
      image: salonxpert,
      technologies: ['NodeJS', 'Puppeteer', 'Spotify API', 'Discord.js'],
      liveUrl: '',
      repoUrl: 'https://github.com/jietung02/Romaji-Lyrics-Finder',
    },
    {
      title: 'My Dev Journey',
      description: 'A dynamic and responsive portfolio website built with Next.js and Tailwind CSS, showcasing my software development projects and skills.',
      image: salonxpert,
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion','tsParticles'],
      liveUrl: '',
      repoUrl: 'https://github.com/jietung02/My-Portfolio',
    },

  ]
  return (
    <>
      {projects && projects.map((project, index) => {

        const { title, description, image, technologies, liveUrl, repoUrl, } = project;
        return (
          <div key={title} className="flex w-full px-20 py-20 xl:p-28 min-h-[80%] items-center justify-center">
            <div className='flex flex-row w-full'>
              {index % 2 === 0 ?
                <>
                  <div className='w-full xl:w-1/2 flex justify-center items-center'>
                    <div className='w-10/12 p-1 bg-gradient-to-tr from-[#4A4A4A] via-[#323232] to-[#161919] -rotate-2 duration-500 transition-all hover:scale-110 hover:shadow-md hover:shadow-cyan-400'>
                      <div className='bg-[#f6e1ff] w-full px-8 py-12 lg:px-14 lg:py-18 2xl:px-16 2xl:py-20'>
                        <Image
                          src={salonxpert}
                          width={900}
                          height={900}
                          quality={100}
                          unoptimized
                          className='justify-center mx-auto '
                        />
                      </div>
                    </div>
                  </div>

                  <div className='flex flex-col w-full xl:w-1/2 justify-center'>
                    <div className='w-full xl:w-5/6 ml-auto px-8 xl:p-0'>
                      <h3 className='text-3xl font-bold'>{title}</h3>
                      <p className='text-lg font-medium my-3 w-full xl:w-[90%]'>{description}</p>
                      <p className='my-3 text-lg font-semibold '>
                        {technologies && technologies.map((tech, index) => {
                          return (
                            <span key={tech} className=' '>
                              {tech} {index < technologies.length - 1 && '• '}
                            </span>)
                        })}
                      </p>
                      <div className='flex flex-row space-x-4'>
                        <a href={liveUrl} className="relative font-medium inline-block after:absolute after:block after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#4A4A4A] after:via-[#323232] after:to-[#161919] after:left-0 after:scale-0 after:transition-transform after:duration-300 hover:after:scale-100">Live Demo</a>
                        <a href={repoUrl} className="relative font-medium inline-block after:absolute after:block after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#4A4A4A] after:via-[#323232] after:to-[#161919] after:left-0 after:scale-0 after:transition-transform after:duration-300 hover:after:scale-100">GitHub Repo</a>
                      </div>
                    </div>
                  </div>
                </> :

                <>
                  <div className='flex flex-col w-full xl:w-1/2 justify-center'>
                    <div className='w-full xl:w-5/6 text-right px-8 xl:p-0'>
                      <h3 className='text-3xl font-bold'>{title}</h3>
                      <p className='text-lg font-medium my-3 w-full xl:w-[70%]  ml-auto'>{description}</p>
                      <p className='my-3 text-lg font-semibold '>
                        {technologies && technologies.map((tech, index) => {
                          return (
                            <span key={tech} className=' '>
                              {tech} {index < technologies.length - 1 && '• '}
                            </span>)
                        })}
                      </p>
                      <div className='flex flex-row justify-end space-x-4'>
                        <a href={liveUrl} className="relative font-medium inline-block after:absolute after:block after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#4A4A4A] after:via-[#323232] after:to-[#161919] after:left-0 after:scale-0 after:transition-transform after:duration-300 hover:after:scale-100">Live Demo</a>
                        <a href={repoUrl} className="relative font-medium inline-block after:absolute after:block after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#4A4A4A] after:via-[#323232] after:to-[#161919] after:left-0 after:scale-0 after:transition-transform after:duration-300 hover:after:scale-100">GitHub Repo</a>
                      </div>
                    </div>
                  </div>

                  <div className='w-full xl:w-1/2 flex justify-center items-center'>
                    <div className='w-10/12 p-1 bg-gradient-to-tr from-[#4A4A4A] via-[#323232] to-[#161919] rotate-2 duration-500 transition-all hover:scale-110 hover:shadow-md hover:shadow-cyan-400'>
                      <div className='bg-[#f6e1ff] w-full px-8 py-12 lg:px-14 lg:py-18 2xl:px-16 2xl:py-20'>
                        <Image
                          src={salonxpert}
                          width={900}
                          height={900}
                          quality={100}
                          unoptimized
                          className='justify-center mx-auto '
                        />
                      </div>
                    </div>
                  </div>
                </>
              }
            </div>


          </div>
        )
      })}
    </>
  )
}

export default Card