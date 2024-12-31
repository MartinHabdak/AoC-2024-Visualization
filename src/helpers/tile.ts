import { TILE_TYPE, TileMap } from "../types/tile";

export const DEFAULT_TILE_MAP: TileMap = {
  [TILE_TYPE.water]: [],
  [TILE_TYPE.sand]: [],
  [TILE_TYPE.dirt]: [],
  [TILE_TYPE.dirtGrass]: [],
  [TILE_TYPE.stone]: [],
  [TILE_TYPE.snow]: [],
};

export const getTileType = (height: number, maxHeight: number): TILE_TYPE => {
  if (maxHeight > 6) {
    if (height === 9) {
      return TILE_TYPE.snow;
    }

    return TILE_TYPE.stone;
  }

  if (maxHeight > 2) {
    if (height < maxHeight) {
      return TILE_TYPE.dirt;
    }

    return TILE_TYPE.dirtGrass;
  }

  if (maxHeight > 0) {
    return TILE_TYPE.sand;
  }

  return TILE_TYPE.water;
};

export const getTileMap = (rows: string[]): TileMap => {
  const tileMap = structuredClone(DEFAULT_TILE_MAP);

  rows.forEach((row, y) => {
    [...row].forEach((stringHeight, x) => {
      const height = Number(stringHeight);

      for (let i = 0; i <= height; i++) {
        tileMap[getTileType(i, height)].push({
          x: y - rows.length / 2,
          y: i,
          z: x - row.length / 2,
        });
      }
    });
  });

  return tileMap;
};

export const getMaxDimension = (rows: string[]): number =>
  Math.max(rows.length, rows[0].length);
