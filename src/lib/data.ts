import { StaticImageData } from "next/image";
import attackOnTitan1 from 'public/assets/aot-1.gif'
import attackOnTitan2 from 'public/assets/aot-2.gif'
import attackOnTitan3 from "public/assets/aot-3.gif"
import jujutsuKaisen1 from "@assets/jjk-4.gif"
import jujutsuKaisen2 from "@assets/jjk-2.gif"
import jujutsuKaisen3 from "@assets/jjk-3.gif"
import chainsawMan1 from "@assets/csm-1.gif"
import chainsawMan2 from "@assets/csm-2.gif";
import chainsawMan3 from "@assets/csm-3.gif";
import demonSlayer1 from "@assets/ds-1.gif"
import demonSlayer2 from "@assets/ds-2.gif";
import demonSlayer3 from "@assets/ds-3.gif";



export type AnimeSceneEntry = {
    src: StaticImageData;
    offsetX: number;
    offsetY: number;
    rotate: number;
}

export const data: Record<string, { scenes: AnimeSceneEntry[]; audio: string }> = {
  attackOnTitan: {
    audio: "./assets/aot-theme.mp3",
    scenes: [
      {
        src: attackOnTitan1,
        offsetX: -420,
        offsetY: -110,
        rotate: -12,
      },
      {
        src: attackOnTitan2,
        offsetX: 450,
        offsetY: -260,
        rotate: 4,
      },
      {
        src: attackOnTitan3,
        offsetX: 400,
        offsetY: 80,
        rotate: -6,
      },
    ],
  },
  jujutsuKaisen: {
    audio: "./assets/jjk-theme.mp3",
    scenes: [
      {
        src: jujutsuKaisen2,
        offsetX: -500,
        offsetY: -10,
        rotate: -5,
      },
      {
        src: jujutsuKaisen1,
        offsetX: -10,
        offsetY: -330,
        rotate: 3,
      },
      {
        src: jujutsuKaisen3,
        offsetX: 470,
        offsetY: 10,
        rotate: 1,
      },
    ],
  },
  chainsawMan: {
    audio: "./assets/csm-theme.mp3",
    scenes: [
      {
        src: chainsawMan1,
        offsetX: -430,
        offsetY: 120,
        rotate: 6,
      },
      {
        src: chainsawMan2,
        offsetX: -420,
        offsetY: -230,
        rotate: -6,
      },
      {
        src: chainsawMan3,
        offsetX: 520,
        offsetY: -170,
        rotate: -4,
      },
    ],
  },
  demonSlayer: {
    audio: "./assets/ds-theme.mp3",
    scenes: [
      {
        src: demonSlayer1,
        offsetX: -530,
        offsetY: 90,
        rotate: -4,
      },
      {
        src: demonSlayer2,
        offsetX: 30,
        offsetY: -150,
        rotate: 6,
      },
      {
        src: demonSlayer3,
        offsetX: 520,
        offsetY: 100,
        rotate: -4,
      },
    ],
  },
};