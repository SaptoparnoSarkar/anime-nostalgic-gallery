"use client"

import { AnimeTitleImageProps } from '@/types'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const AnimeTitleImage = ({title,onHover,onHoverEnd}:AnimeTitleImageProps) => {
  return (
    <motion.div 
        onMouseEnter={()=> onHover(title.id)}
        onMouseLeave={onHoverEnd}
        whileHover={{scale: 1.1}}
        transition={{type: "spring", stiffness: 300}}
        className='relative cursor-pointer'
    >
        <Image 
            src={title.titleImage}
            alt={title.label}
            width={480}
            height={400}
            className='object-contain transition-all duration-300 ease-in-out hover:brightness-45'
        />
    </motion.div>
  )
}

export default AnimeTitleImage
