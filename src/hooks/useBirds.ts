import { createRef } from "react";
import { Vector3, CatmullRomCurve3 } from "three";
import { type PositionMesh } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import { getRandomBetween } from "../helpers/number";

const getRandomHeight = () => getRandomBetween(6, 15);

const getBird = (maxX: number, maxZ: number, reverseDirection: boolean) => {
  const adjustedX = maxX / 2;
  const adjustedZ = maxZ / 2;
  const x = getRandomBetween(2, adjustedX);
  const z = getRandomBetween(2, adjustedZ);
  const ref = createRef<PositionMesh>();
  const speed = getRandomBetween(50, 90);
  const points = [
    new Vector3(x, getRandomHeight(), z),
    new Vector3(-x, getRandomHeight(), z),
    new Vector3(-x, getRandomHeight(), -z),
    new Vector3(x, getRandomHeight(), -z),
  ];
  const scaleValue = getRandomBetween(2, 3);
  const scale = new Vector3(scaleValue, scaleValue, scaleValue);

  if (reverseDirection) {
    points.reverse();
  }

  const path = new CatmullRomCurve3(points, true);

  return { ref, path, points, speed, scale };
};

export const useBirds = (amount: number, maxX: number, maxY: number) => {
  const birds = Array(amount)
    .fill(undefined)
    .map((_, i) => getBird(maxY, maxX, Boolean(i % 2)));

  useFrame(({ clock }) => {
    birds.forEach((bird) => {
      const time =
        (clock.getElapsedTime() % (101 - bird.speed)) / (101 - bird.speed);
      const newPosition = bird.path.getPointAt(time);
      const tangent = bird.path.getTangentAt(time).normalize();

      bird.ref.current?.position.copy(newPosition);
      bird.ref.current?.lookAt(newPosition.clone().sub(tangent));
    });
  });

  return birds;
};
