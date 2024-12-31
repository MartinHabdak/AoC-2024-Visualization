import { type FC, type PropsWithChildren, createContext } from "react";

import { DEFAULT_TILE_MAP, getTileMap } from "../helpers/tile";
import { type Coords } from "../types/coords";
import { TILE_TYPE } from "../types/tile";

interface TilesContextProviderProps {
  rows: string[];
}

export const TilesContext =
  createContext<Record<TILE_TYPE, Coords[]>>(DEFAULT_TILE_MAP);

export const TilesProvider: FC<
  PropsWithChildren<TilesContextProviderProps>
> = ({ children, rows }) => (
  <TilesContext.Provider value={getTileMap(rows)}>
    {children}
  </TilesContext.Provider>
);
