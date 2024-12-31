import { type FC, useContext } from "react";

import { TileLayer } from "./TileLayer";
import { TilesContext } from "./TilesContext";
import { TILE_TYPE } from "../types/tile";

export const Terrain: FC = () => {
  const tileMap = useContext(TilesContext);

  return (
    <>
      {(Object.keys(tileMap) as TILE_TYPE[]).map((tileType) => (
        <TileLayer key={tileType} tiles={tileMap[tileType]} type={tileType} />
      ))}
    </>
  );
};
