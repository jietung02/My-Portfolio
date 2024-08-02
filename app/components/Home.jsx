'use client'
import Link from "next/link";
import { motion } from "framer-motion";

const Home = () => {

  return (
    <section  id="home" className="flex flex-col w-full bg-violet-100 h-screen ">
      <div className="flex flex-col m-auto text-custom-dark-gray">
        <motion.div className="flex flex-col w-full justify-center mx-auto items-center"
          initial={{ opacity: 0, x: -70 }}

          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-semibold ">Hello, I&apos;m <span className="font-extrabold">Tung Jie Min</span>.</h1>
          <h2 className="text-xl font-medium mx-auto py-2 ">A Full Stack Developer</h2>

        </motion.div>
        <motion.div className="flex w-8/12 mx-auto mt-4 h-12 items-center relative hover:ring-custom-dark-gray ring ring-white rounded-xl animate-fade-slide-right"
          initial={{ opacity: 0, scale: 0.6 }}

          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3 }}
        >
          <Link href='#about' className="relative flex w-full justify-center mx-auto text-lg font-semibold">Discover More About Me</Link>

        </motion.div>


      </div>

    </section>
  )
}

export default Home