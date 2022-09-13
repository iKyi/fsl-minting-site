import { Box, Grid, Stack } from "@mui/material";
import { useAppSelector } from "app/hooks";
import ResponsiveSpace from "components/Reusable/ResponsiveSpace";
import SectionWrapper from "components/Reusable/SectionWrapper";
import usePageData from "hooks/usePageData";
import { FONTS } from "lib/theme";
import { getStrapiMedia } from "lib/theme/media";
import CenteredWhitepaperBtn from "./CenteredWhitepaperBtn";

export type BenefitsBoxPropsType = {};

const BenefitsBox: React.FC<BenefitsBoxPropsType> = () => {
  const { pageData: benefitsData } = usePageData("benefit-entries", true);
  const siteData = useAppSelector((state) => state.global.publicSiteData);
  const {
    benefitsTitle,
    benefitsDescription,
    benefitsPretitle,
    benefitsBackground,
  } = siteData ?? {};

  const bgUrl = getStrapiMedia(benefitsBackground);

  if (!siteData) return null;
  // *************** RENDER *************** //
  return (
    <Box
      sx={{
        background: `url('${bgUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <ResponsiveSpace smaller />
      <SectionWrapper
        title={benefitsTitle}
        description={benefitsDescription}
        preTitle={benefitsPretitle}
      >
        <Grid container spacing={[2, 2, 4]}>
          {benefitsData &&
            benefitsData.map((item: any) => {
              const { attributes } = item;
              const { title, description, image } = attributes ?? {};
              const imageUrl = getStrapiMedia(image);
              return (
                <Grid item xs={12} sm={6} md={4} key={title}>
                  <Stack
                    spacing={2.5}
                    alignItems="center"
                    sx={{
                      width: 300,
                      margin: "0 auto",
                    }}
                  >
                    <img
                      src={imageUrl}
                      alt={`icon for ${title}`}
                      style={{
                        width: 90,
                        maxWidth: "100%",
                      }}
                    />
                    <Box
                      sx={{
                        fontFamily: FONTS.MOKOTOONE,
                        fontSize: "1.15rem",
                      }}
                    >
                      {title}
                    </Box>
                    <Box
                      sx={{
                        fontWeight: 300,
                        textAlign: "center",
                      }}
                    >
                      {description}
                    </Box>
                  </Stack>
                </Grid>
              );
            })}
        </Grid>
        <CenteredWhitepaperBtn />
        <ResponsiveSpace smaller />
      </SectionWrapper>
    </Box>
  );
};

export default BenefitsBox;
