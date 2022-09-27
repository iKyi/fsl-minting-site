import { Box } from "@mui/material";
import ResponsiveSpace from "components/Reusable/ResponsiveSpace";
import BenefitsBox from "./BenefitsBox";
import HomeAboutUsBox from "./HomeAboutUsBox";
import MintTopBox from "./MintTopBox";
import RoadmapBox from "./RoadmapBox";

export type MintHomePagePropsType = {};

const MintHomePage: React.FC<MintHomePagePropsType> = () => {
  // *************** RENDER *************** //
  return (
    <Box>
      <MintTopBox />
      <HomeAboutUsBox />
      <BenefitsBox />
      <ResponsiveSpace />
      <RoadmapBox />
    </Box>
  );
};

export default MintHomePage;
