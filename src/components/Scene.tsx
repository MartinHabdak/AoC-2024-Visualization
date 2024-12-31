import { type FC } from "react";
import { OrbitControls } from "@react-three/drei";

import { Birds } from "./Birds";
import { Foliage } from "./Foliage";
import { Terrain } from "./Terrain";
import { getMaxDimension } from "../helpers/tile";

interface Props {
  rows: string[];
}

export const Scene: FC<Props> = ({ rows }) => {
  const dimension = getMaxDimension(rows);

  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight position={[1, 1, 1]} intensity={0.5} />
      <directionalLight
        position={[dimension, dimension, -dimension]}
        intensity={2}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.0015}
        shadow-camera-left={-dimension}
        shadow-camera-bottom={-dimension}
        shadow-camera-right={dimension}
        shadow-camera-top={dimension}
      />
      <ambientLight intensity={0.5} />
      <Terrain />
      <Foliage />
      <Birds amount={5} maxX={rows[0].length} maxY={rows.length} />
    </>
  );
};
