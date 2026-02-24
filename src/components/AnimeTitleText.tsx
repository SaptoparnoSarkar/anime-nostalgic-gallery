import { ANIMATION_CONFIG } from '@/lib/constant';
import { AnimeTitleTextProps } from '@/types';
import { motion } from 'framer-motion';
import React from 'react'

export const AnimeTitleText = ({title,onHover,onHoverEnd}:AnimeTitleTextProps) => (
  <motion.span
    data-text={title.id}
    className="transition-colors duration-300 hover:text-amber-100"
    animate={ANIMATION_CONFIG.hover}
    transition={ANIMATION_CONFIG.transition}
    onMouseEnter={(e) => onHover(e.currentTarget.dataset.text!)}
    onMouseMove={(e) => onHover(e.currentTarget.dataset.text!)}
    onMouseLeave={onHoverEnd}
  >
    {title.label}
  </motion.span>
);



