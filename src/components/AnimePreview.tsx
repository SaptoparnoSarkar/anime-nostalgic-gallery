import { AnimePreviewProps } from '@/types'
import { motion } from 'framer-motion'
import Image from 'next/image'

const AnimePreview = ({hoveredText,item,index,mousePosition}:AnimePreviewProps) => (
    <motion.div
        key={index}
        className='absolute flex aspect-3/2 items-center justify-center overflow-hidden rounded-xl shadow-xl'
        initial={{
            scale:0,
            opacity: 0,
            x: item.offsetX,
            y: item.offsetY,
            rotate: item.rotate,
            height: 300,
            width: 300
        }}

        animate={{
            scale:1,
            opacity:1,
            x: item.offsetX + (index === 1 ? mousePosition.x : mousePosition.x/2),
            y: item.offsetY + mousePosition.y,
            rotate: item.rotate,
        }}

        exit = {{
            scale: 0, opacity: 0
        }}

        transition={{
            type: "spring",
            stiffness: 200,
            damping: 10,
            mass: 0.6,
        }}
    >
    <Image 
        src={item.src}
        alt={hoveredText}
        className='h-full w-full object-cover'
    />
    </motion.div>
);


export default AnimePreview;