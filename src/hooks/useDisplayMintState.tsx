import { IMintDataType } from "components/MintPageProper/MintPageProper";
import { useMemo } from "react";

const useDisplayMintState = (data: IMintDataType) => {
  const { mintState } = data;
  const displayBoxContent: string = useMemo(() => {
    switch (mintState) {
      case "ended":
        return "ended";
      case "live":
        return "live";
      case "showTba":
        return "TBA";
      case "showTimer":
        return "timer";
      case "soldOut":
        return "sold out";
      default:
        return "ended";
    }
  }, [mintState]);

  return { displayBoxContent, strapiState: mintState };
};
export default useDisplayMintState;
