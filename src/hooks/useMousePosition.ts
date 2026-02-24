import { MousePosition } from "@/lib/types";
import { useEffect, useState } from "react";



export const useMousePosition = (normalize = 4) => {
    const [position, setPosition] = useState<MousePosition>({x:0,y:0});

    useEffect(()=> {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({
                x:(e.clientX - window.innerWidth/2) / normalize,
                y:(e.clientY - window.innerHeight/2) / normalize,
            });
        }
        window.addEventListener("mousemove",handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [normalize])

    return position;
}