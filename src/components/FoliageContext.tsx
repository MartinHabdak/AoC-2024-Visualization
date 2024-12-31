import { type FC, type PropsWithChildren, createContext } from "react";

import { DEFAULT_FOLIAGE_MAP, getFoliageMap } from "../helpers/foliage";
import { type Coords } from "../types/coords";
import { FOLIAGE_TYPE } from "../types/foliage";

interface FoliageContextProviderProps {
  rows: string[];
}

export const FoliageContext =
  createContext<Record<FOLIAGE_TYPE, Coords[]>>(DEFAULT_FOLIAGE_MAP);

export const FoliageProvider: FC<
  PropsWithChildren<FoliageContextProviderProps>
> = ({ children, rows }) => (
  <FoliageContext.Provider value={getFoliageMap(rows)}>
    {children}
  </FoliageContext.Provider>
);
