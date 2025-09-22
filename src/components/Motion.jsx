import React from 'react'
import {motion} from "motion/react"

export default function Motion() {
  return (
    <div
      className='flex h-screen w-full bg-neutral-950 items-center justify-center'
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(6,182,212,0.2) 1px, transparent 0)`,
        backgroundSize: '8px 8px',
        backgroundRepeat: "repeat"
      }}
    >
      <motion.button 

      initial={{
        opacity:0 
      }}
      animate={{
        opacity:100
      }}

      whileHover={{
        rotateX:25,
        rotateY:-8,
        boxShadow:"0px 20px 50px rgba(8, 112, 184, 0.7)",
        y:-5

      }}
      whileTap={{
        y:0
      }}
      // initial={{
      //   rotate: 20, 
      // }}
      // animate={{
      //   rotate: [0,20,0],   
      // }}
      // transition={{
      //   duration: 2,
      //   ease: "easeInOut"
      // }}
      
      className='group relative text-neutral-500 px-12 py-4 bg-black rounded-lg shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),inset_0_-1px_2px_rgba(255,155,0,0.1)]'>
        Subscribe
        <span className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent'></span>
      </motion.button>
    </div>
  )
}
