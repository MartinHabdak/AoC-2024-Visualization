import { Canvas } from "@react-three/fiber";
import { ACESFilmicToneMapping, SRGBColorSpace } from "three";

import input from "./assets/input.txt?raw";
import { Scene } from "./components/Scene";
import { TilesProvider } from "./components/TilesContext";
import { FoliageProvider } from "./components/FoliageContext";
import { getMaxDimension } from "./helpers/tile";
import "./App.css";

export const App = () => {
  const rows = input.split("\n");
  const dimension = getMaxDimension(rows);

  return (
    <TilesProvider rows={rows}>
      <FoliageProvider rows={rows}>
        <Canvas
          gl={{
            antialias: true,
            toneMapping: ACESFilmicToneMapping,
            outputColorSpace: SRGBColorSpace,
          }}
          camera={{
            near: 0,
            far: dimension * 10,
            position: [dimension, dimension, dimension],
            zoom: 90 * (1 / 2) ** (dimension / 18),
          }}
          shadows
          orthographic
        >
          <Scene rows={rows} />
        </Canvas>
      </FoliageProvider>
    </TilesProvider>
  );
};
