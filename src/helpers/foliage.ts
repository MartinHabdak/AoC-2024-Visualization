import { getRandomBetween } from "./number";
import {
  FOLIAGE_TYPE,
  FoliageMap,
  FoliageProbabilityMap,
} from "../types/foliage";

const FOLIAGE_PROBABILITIES: FoliageProbabilityMap = {
  0: [],
  1: [
    FOLIAGE_TYPE.rockSmall,
    FOLIAGE_TYPE.rockSmall,
    FOLIAGE_TYPE.reeds,
    FOLIAGE_TYPE.reeds,
  ],
  2: [
    FOLIAGE_TYPE.rockSmall,
    FOLIAGE_TYPE.rock,
    FOLIAGE_TYPE.plantBush,
    FOLIAGE_TYPE.plantBush,
  ],
  3: [
    FOLIAGE_TYPE.rock,
    FOLIAGE_TYPE.stumpRound,
    FOLIAGE_TYPE.treeDetailed,
    FOLIAGE_TYPE.treeBlocks,
    FOLIAGE_TYPE.mushroomRed,
    FOLIAGE_TYPE.plantBush,
    FOLIAGE_TYPE.flowerYellow,
    FOLIAGE_TYPE.treeDetailed,
  ],
  4: [
    FOLIAGE_TYPE.rock,
    FOLIAGE_TYPE.stumpRound,
    FOLIAGE_TYPE.treeDetailed,
    FOLIAGE_TYPE.treeBlocks,
    FOLIAGE_TYPE.mushroomRed,
    FOLIAGE_TYPE.plantBush,
    FOLIAGE_TYPE.flowerYellow,
    FOLIAGE_TYPE.treeDetailed,
  ],
  5: [
    FOLIAGE_TYPE.rock,
    FOLIAGE_TYPE.treePineRound,
    FOLIAGE_TYPE.treePine,
    FOLIAGE_TYPE.treeDetailed,
    FOLIAGE_TYPE.treeBlocks,
    FOLIAGE_TYPE.stumpRound,
  ],
  6: [
    FOLIAGE_TYPE.rock,
    FOLIAGE_TYPE.treePineRound,
    FOLIAGE_TYPE.treePineRound,
    FOLIAGE_TYPE.stumpRound,
    FOLIAGE_TYPE.log,
    FOLIAGE_TYPE.treePine,
    FOLIAGE_TYPE.treePine,
  ],
  7: [
    FOLIAGE_TYPE.rock,
    FOLIAGE_TYPE.plantBush,
    FOLIAGE_TYPE.log,
    FOLIAGE_TYPE.rockSmall,
  ],
  8: [FOLIAGE_TYPE.rock, FOLIAGE_TYPE.rockSmall],
  9: [FOLIAGE_TYPE.rockSmall],
};

export const DEFAULT_FOLIAGE_MAP: FoliageMap = {
  [FOLIAGE_TYPE.flowerYellow]: [],
  [FOLIAGE_TYPE.log]: [],
  [FOLIAGE_TYPE.mushroomRed]: [],
  [FOLIAGE_TYPE.plantBush]: [],
  [FOLIAGE_TYPE.rock]: [],
  [FOLIAGE_TYPE.rockSmall]: [],
  [FOLIAGE_TYPE.stumpRound]: [],
  [FOLIAGE_TYPE.treeBlocks]: [],
  [FOLIAGE_TYPE.treeDetailed]: [],
  [FOLIAGE_TYPE.treePine]: [],
  [FOLIAGE_TYPE.treePineRound]: [],
  [FOLIAGE_TYPE.reeds]: [],
};

export const getFoliageMap = (rows: string[]): FoliageMap => {
  const foliageMap = structuredClone(DEFAULT_FOLIAGE_MAP);

  rows.forEach((row, y) => {
    [...row].forEach((stringHeight, x) => {
      const height = Number(stringHeight);
      const object = FOLIAGE_PROBABILITIES[height][getRandomBetween(0, 9)];

      if (object) {
        foliageMap[object].push({
          x: y - rows.length / 2,
          y: height + 1,
          z: x - row.length / 2,
        });
      }
    });
  });

  return foliageMap;
};
