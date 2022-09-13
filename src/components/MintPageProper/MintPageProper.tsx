import { CircularProgress, Container, Box } from "@mui/material";
import { useAppSelector } from "app/hooks";
import usePageData from "hooks/usePageData";
import LuanchpadpageTopPart from "./subcomponents/LuanchpadpageTopPart";

export type IMintDataType = {
  name: string;
  id: string;
  mintId: string;
  description: string;
  supply: number;
  image: string;
  mintPrice: number;
  releaseDate: string | false | null;
  discord?: string;
  twitter?: string;
  siteUrl?: string;
  tags?: any;
  roadMap?: string;
  whitepaperUrl?: string;
  candyMachineId: string;
  whitelistOne: boolean;
  whitelistOneText: string;
  whitelistTwo: boolean;
  whitelistTwoText: string;
  whitelistThree: boolean;
  whitelistThreeText: string;
  publicMint: boolean;
  mintState: "soldOut" | "ended" | "live" | "showTimer" | "showTba";
  whitelistedWallets: Record<any, any>;
};

export type MintPageProperPropsType = {};

const MintPageProper: React.FC<MintPageProperPropsType> = () => {
  const { pageData: mintMachineData } = usePageData("mint-machine-data");
  const publicSiteData = useAppSelector((state) => state.global.publicSiteData);

  const mintData: IMintDataType = {
    ...mintMachineData,
    mintPrice: publicSiteData?.mintPrice,
    supply: publicSiteData?.totalSupply,
    releaseDate: publicSiteData?.mintDate,
    whitepaperUrl: publicSiteData?.whitepaperUrl,
  };
  // *************** RENDER *************** //
  if (!mintMachineData || !publicSiteData) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }
  return (
    <Box
      sx={{
        width: 1440,
        maxWidth: "100%",
        margin: "0 auto",
        py: [3, 3, 5],
      }}
    >
      <Container>
        <Box sx={{ pt: [2, 2, 4] }}>
          <LuanchpadpageTopPart data={mintData} />
        </Box>
      </Container>
    </Box>
  );
};

export default MintPageProper;
