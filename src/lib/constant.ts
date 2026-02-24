
import { AnimeTitle } from '@/types';
import aotLogo from '@assets/aot-logo.png'
import jjkLogo from '@assets/jjk-logo.png'
import csmLogo from '@assets/csm-logo.png'
import dsLogo from '@assets/ds-logo.png'

export const ANIMATION_CONFIG = {
    intial: {
        scaleY: 1.15,
    },
    hover : {
        scaleY: 1.5,
    },
    transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
        mass: 0.8,
    },
} as const;

export const ANIME_TITLE: AnimeTitle[] = [
  { id: "attackOnTitan", titleImage: aotLogo, label: "Attack on Titan" },
  { id: "jujutsuKaisen", titleImage: jjkLogo, label: "Jujutsu Kaisen" },
  { id: "chainsawMan", titleImage: csmLogo, label: "Chainsaw Man" },
  { id: "demonSlayer", titleImage: dsLogo, label: "Demon Slayer" },
];

