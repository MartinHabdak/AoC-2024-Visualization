import type { Coords } from "./coords";

export enum FOLIAGE_TYPE {
  flowerYellow = "flowerYellow",
  log = "log",
  mushroomRed = "mushroomRed",
  plantBush = "plantBush",
  rock = "rock",
  rockSmall = "rockSmall",
  stumpRound = "stumpRound",
  treeBlocks = "treeBlocks",
  treeDetailed = "treeDetailed",
  treePine = "treePine",
  treePineRound = "treePineRound",
  reeds = "reeds",
}

export type FoliageMap = Record<FOLIAGE_TYPE, Coords[]>;

export type FoliageProbabilityMap = Record<string, FOLIAGE_TYPE[]>;
