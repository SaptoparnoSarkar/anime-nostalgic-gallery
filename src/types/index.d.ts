import { AnimeSceneEntry } from "@/lib/data";
import { MousePosition } from "@/lib/types";
import { StaticImageData } from "next/image";

export type MousePosition = {
  x: number;
  y: number;
};

export type AnimeTitle = {
  id: string;
  titleImage: StaticImageData;
  label: string;
};

declare interface AnimeTitleTextProps {
    title: AnimeTitle;
    onHover: (text:string) => void;
    onHoverEnd: () => void;
}

declare interface AnimePreviewProps {
    hoveredText: string;
    item: AnimeSceneEntry;
    index: number;
    mousePosition: MousePosition;
}

declare interface AnimeTitleImageProps {
    title: { id: string; titleImage: StaticImageData; label: string};
    onHover: (id:string) => void;
    onHoverEnd: () => void;
}