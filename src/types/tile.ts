import type { Coords } from "./coords";

export enum TILE_TYPE {
  water = "water",
  sand = "sand",
  dirt = "dirt",
  dirtGrass = "dirtGrass",
  stone = "stone",
  snow = "snow",
}

export type TileMap = Record<TILE_TYPE, Coords[]>;
