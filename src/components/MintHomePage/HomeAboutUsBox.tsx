import SectionHeader from "components/Reusable/SectionHeader";
import { Box, Grid, Typography, Container } from "@mui/material";
import MarkdownParser from "components/Reusable/MarkdownParser";
import { FONTS } from "lib/theme";
import usePageData from "hooks/usePageData";
import aboutUsDetailsBg from "assets/images/backgrounds/aboutUsDetailsBg.png";
import HomeNFTTabs from "./HomeNFTTabs";
import { useAppSelector } from "app/hooks";
export type HomeAboutUsBoxPropsType = {
  whitepaperBoxButton?: Record<string, string>;
  whitepaperBoxTitle?: string;
  whitepapaerBoxText?: string;
  whitepaperBoxImage?: any;
};

const HomeAboutUsBox: React.FC<HomeAboutUsBoxPropsType> = ({
  whitepaperBoxButton,
  whitepaperBoxTitle,
  whitepapaerBoxText,
  whitepaperBoxImage,
}) => {
  const siteData = useAppSelector((state) => state.global.publicSiteData);
  const { nftsTitle, nftsPretitle, nftsSubtitle } = siteData ?? {};
  const { pageData: aboutUsInfos } = usePageData("about-us-infos", true);
  // *************** RENDER *************** //
  return (
    <Box>
      <SectionHeader
        preTitle={nftsPretitle}
        description={nftsSubtitle}
        title={nftsTitle}
      />

      <Container
        disableGutters
        maxWidth={false}
        sx={{
          overflow: "hidden",
          background: `url('${aboutUsDetailsBg}')`,
          backgroundPosition: "center left",
          backgroundRepeat: "no-repeat",
          backgroundSize: "500px",
        }}
      >
        <Box
          sx={{
            width: 1480,
            margin: "0 auto",
            maxWidth: "100%",
          }}
        >
          <Grid
            sx={{
              mb: [2, 2, 4],
            }}
            container
            spacing={[2, 2, 4]}
            justifyContent="center"
            alignItems="center"
          >
            {aboutUsInfos && (
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    px: [2, 2, 6],
                  }}
                >
                  {aboutUsInfos.map((item: any) => {
                    const { text, title } = item?.attributes ?? {};
                    return (
                      <Box
                        key={item?.id}
                        sx={{
                          mb: 2,
                          pb: 2,
                          "&:not(last-of-type)": {
                            position: "relative",
                            "&:after": {
                              content: "''",
                              position: "absolute",
                              bottom: 0,
                              width: "100%",
                              background: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 110%)`,
                              height: "1px",
                              opacity: 0.33,
                            },
                          },
                        }}
                      >
                        {title && (
                          <Typography
                            sx={{
                              fontFamily: FONTS.MOKOTOONE,
                              mb: 1,
                              fontWeight: 300,
                              fontSize: 18,
                            }}
                          >
                            {title}
                          </Typography>
                        )}
                        {text && (
                          <Box
                            sx={{
                              color: "common.lightGray",
                              mt: 2,
                              fontWeight: 300,
                            }}
                          >
                            <MarkdownParser>{text}</MarkdownParser>
                          </Box>
                        )}
                      </Box>
                    );
                  })}
                </Box>
              </Grid>
            )}
            <Grid item xs={12} md={6}>
              <HomeNFTTabs />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeAboutUsBox;
