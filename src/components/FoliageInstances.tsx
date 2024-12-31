import { type FC } from "react";
import { Vector3, Euler, type SkinnedMesh } from "three";
import { Instances, Instance, useGLTF } from "@react-three/drei";

import { CUBE_OFFSET, HEIGHT_MODIFIER } from "../helpers/constants";
import { getRandomBetween } from "../helpers/number";
import { type Coords } from "../types/coords";
import { type FOLIAGE_TYPE } from "../types/foliage";

const HEIGHT_OFFSET = 0.33;
const SHIFT = 0.25;
const SHIFT_VECTORS = [
  new Vector3(SHIFT, 0, SHIFT),
  new Vector3(-SHIFT, 0, SHIFT),
  new Vector3(SHIFT, 0, -SHIFT),
  new Vector3(-SHIFT, 0, -SHIFT),
  new Vector3(0, 0, 0),
];

interface Props {
  positions: Coords[];
  type: FOLIAGE_TYPE;
}

export const FoliageInstances: FC<Props> = ({ positions, type }) => {
  const { nodes, materials } = useGLTF(`./foliage/${type}.glb`);
  const rotations = Array.from({ length: positions.length }, () =>
    getRandomBetween(0, 2 * Math.PI),
  );
  const shifts = Array.from({ length: positions.length }, () =>
    getRandomBetween(0, 4),
  );

  return (
    <>
      {Object.keys(materials).map((material) => (
        <Instances
          limit={positions.length}
          geometry={(nodes[material] as SkinnedMesh).geometry}
          material={materials[material]}
          castShadow
          receiveShadow
          key={material}
        >
          {positions.map(({ x, y, z }, i) => (
            <Instance
              key={`${material},${x},${y},${z}`}
              position={new Vector3(
                x + CUBE_OFFSET,
                y / HEIGHT_MODIFIER + HEIGHT_OFFSET,
                z + CUBE_OFFSET,
              ).add(SHIFT_VECTORS[shifts[i]])}
              rotation={new Euler(0, rotations[i], 0)}
            />
          ))}
        </Instances>
      ))}
    </>
  );
};
