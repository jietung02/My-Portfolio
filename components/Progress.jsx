'use client'
import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react'

const Progress = () => {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  return (
    <figure className="fixed w-20 h-20 bottom-4 right-4 m-0 p-0 z-40 bg-transparent -rotate-90">
      <svg id="progress" width="90" height="90" viewBox="0 0 100 100" className="translate-x-[-16]">
        <circle cx="50" cy="50" r="30" pathLength="1" className="opacity-20  stroke-[#55165e] stroke-[8%] fill-none" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="stroke-[#7230af] fill-transparent stroke-[8%]"
          style={{ pathLength: scrollYProgress }}
        />
      </svg>
    </figure>
  )
}

export default Progress