import { type FC } from "react";
import { Instances, useGLTF, Instance, Outlines } from "@react-three/drei";
import { type SkinnedMesh, Vector3 } from "three";

import { CUBE_OFFSET, HEIGHT_MODIFIER } from "../helpers/constants";
import { type Coords } from "../types/coords";
import { type TILE_TYPE } from "../types/tile";

interface Props {
  tiles: Coords[];
  type: TILE_TYPE;
}

export const TileLayer: FC<Props> = ({ tiles, type }) => {
  const { nodes, materials } = useGLTF(`./tiles/${type}.glb`);

  return (
    <Instances
      limit={tiles.length}
      geometry={(nodes.Cube as SkinnedMesh).geometry}
      material={materials.Material}
      castShadow
      receiveShadow
    >
      {tiles.map(({ x, y, z }) => (
        <Instance
          key={[x, y, z].join(",")}
          position={
            new Vector3(
              x + CUBE_OFFSET,
              y / HEIGHT_MODIFIER + CUBE_OFFSET,
              z + CUBE_OFFSET,
            )
          }
        />
      ))}
      <Outlines thickness={1} color="black" />
    </Instances>
  );
};
