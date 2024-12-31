import { type FC, useContext } from "react";

import { FoliageInstances } from "./FoliageInstances";
import { FoliageContext } from "./FoliageContext";
import { FOLIAGE_TYPE } from "../types/foliage";

export const Foliage: FC = () => {
  const foliageMap = useContext(FoliageContext);

  return (
    <>
      {(Object.keys(foliageMap) as FOLIAGE_TYPE[]).map((foliageType) => (
        <FoliageInstances
          key={foliageType}
          positions={foliageMap[foliageType]}
          type={foliageType}
        />
      ))}
    </>
  );
};
