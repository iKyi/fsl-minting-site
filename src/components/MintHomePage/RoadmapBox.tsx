import { useAppSelector } from "app/hooks";
import SectionWrapper from "components/Reusable/SectionWrapper";
import usePageData from "hooks/usePageData";
import CenteredWhitepaperBtn from "./CenteredWhitepaperBtn";
import RoadmapPageListings from "./RoadmapPageListings";

export type RoadmapBoxPropsType = {};

const RoadmapBox: React.FC<RoadmapBoxPropsType> = () => {
  const siteData = useAppSelector((state) => state.global.publicSiteData);
  const { roadmapPretitle, roadmapTitle, roadmapDescription } = siteData ?? {};
  const { pageData: milestonesData } = usePageData("milestones", true);

  // *************** RENDER *************** //
  if (!siteData) return null;
  return (
    <SectionWrapper
      title={roadmapTitle}
      description={roadmapDescription}
      preTitle={roadmapPretitle}
    >
      {milestonesData && <RoadmapPageListings items={milestonesData} />}
      <CenteredWhitepaperBtn />
    </SectionWrapper>
  );
};

export default RoadmapBox;
