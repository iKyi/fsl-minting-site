import { Box } from "@mui/material";
import BenefitsBox from "./BenefitsBox";
import HomeAboutUsBox from "./HomeAboutUsBox";
import MintTopBox from "./MintTopBox";
import RoadmapBox from "./RoadmapBox";

export type MintHomePagePropsType = {};

const MintHomePage: React.FC<MintHomePagePropsType> = () => {
  // *************** RENDER *************** //
  return (
    <Box
      sx={{
        px: [2, 2, 4],
      }}
    >
      <MintTopBox />
      <RoadmapBox />
      <HomeAboutUsBox />
      <BenefitsBox />
    </Box>
  );
};

export default MintHomePage;
