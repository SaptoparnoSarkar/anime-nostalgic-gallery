"use client";
import AnimePreview from "@/components/AnimePreview";
import AnimeTitleImage from "@/components/AnimeTitleImage";
import { AnimeTitleText } from "@/components/AnimeTitleText";
import { Toaster } from "@/components/ui/sonner";
import useAnimeAudio from "@/hooks/useAnimeAudio";
import { useMobileWarning } from "@/hooks/useMobileWarning";
import { useMousePosition } from "@/hooks/useMousePosition";
import { ANIME_TITLE } from "@/lib/constant";
import { AnimeSceneEntry, data } from "@/lib/data";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [hoveredText, setHoveredText] = useState<string | null>(null);

  useAnimeAudio(hoveredText);

  const mousePosition = useMousePosition();
  useMobileWarning();

  return (
    <div className=" relative flex w-screen flex-col top-10 items-center justify-center">
      <Toaster />
      <div className="flex flex-col items-center justify-center gap-5 *:cursor-default">
        {ANIME_TITLE.map((title) => (
          // <AnimeTitleText
          //   key={title.id}
          //   title={title}
          //   onHover={setHoveredText}
          //   onHoverEnd={() => setHoveredText(null)}
          // />
          <AnimeTitleImage
            key={title.id}
            title={title}
            onHover={setHoveredText}
            onHoverEnd={() => setHoveredText(null)}
          />
        ))}
      </div>

      <AnimatePresence>
        {hoveredText &&
          data[hoveredText].scenes.map(
            (item: AnimeSceneEntry, index: number) => (
              <AnimePreview
                key={index}
                hoveredText={hoveredText}
                item={item}
                index={index}
                mousePosition={mousePosition}
              />
            ),
          )}
      </AnimatePresence>
    </div>
  );
}
