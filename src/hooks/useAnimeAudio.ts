import { data } from '@/lib/data';
import React, { useEffect, useRef } from 'react'

const useAnimeAudio = (hoveredText: string | null) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (hoveredText && data[hoveredText]?.audio) {
            if(audioRef.current) {
                audioRef.current.pause();
            }

            audioRef.current = new Audio(data[hoveredText].audio);
            audioRef.current.volume = 0.2;
            audioRef.current.loop = true;

            const playPromise = audioRef.current.play();

            if(playPromise !== undefined) {
                playPromise.catch((error) => {
                    console.warn("Audio Playback Failed. User interaction required",error);
                })
            }
            else{
                if (audioRef.current){
                    audioRef.current.pause();
                    audioRef.current.currentTime = 0;
                    audioRef.current = null;
                }
            }
            return () => {
                if(audioRef.current) {
                    audioRef.current.pause();
                    audioRef.current = null;
                }
            }
        }
    }, [hoveredText])
}

export default useAnimeAudio
