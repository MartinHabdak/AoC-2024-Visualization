import { type FC } from "react";
import { Instance, Instances, Outlines, useGLTF } from "@react-three/drei";
import { type SkinnedMesh } from "three";

import { useBirds } from "../hooks/useBirds";

interface Props {
  amount: number;
  maxX: number;
  maxY: number;
}

export const Birds: FC<Props> = ({ amount, maxX, maxY }) => {
  const { nodes, materials } = useGLTF("./animals/seagull.glb");
  const birds = useBirds(amount, maxX, maxY);

  return (
    <Instances
      limit={amount}
      geometry={(nodes.Seagull as SkinnedMesh).geometry}
      material={materials["Seagull.TN"]}
      castShadow
      receiveShadow
    >
      {birds.map((bird) => (
        <Instance
          position={bird.points[0]}
          ref={bird.ref}
          scale={bird.scale}
          key={bird.points
            .map((point) => `${point.x},${point.y},${point.z}`)
            .join(",")}
        />
      ))}
      <Outlines thickness={2} color="black" />
    </Instances>
  );
};
