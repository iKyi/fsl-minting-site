import usePageData from "hooks/usePageData";
import { Box, Stack, Grid } from "@mui/material";
import { useContext } from "react";
import { getStrapiMedia } from "lib/theme/media";
import { FONTS } from "lib/theme";
import { StrapiContext } from "providers/StrapiPublicProvider";
import nftsBox_bg from "assets/images/backgrounds/nftsBox_bg.png";
import { centerFlex } from "lib/sxUtils";

export type HomeNFTTabsPropsType = {
  children?: any;
};

const HomeNFTTabs: React.FC<HomeNFTTabsPropsType> = ({ children }) => {
  const { pageData: nftTabs } = usePageData("nft-tabs", true);
  const GlobalData = useContext(StrapiContext);
  const { allNftsGifImage } = GlobalData ?? {};

  const gifImageUrl = getStrapiMedia(allNftsGifImage);
  // *************** RENDER *************** //
  if (!nftTabs || nftTabs.length === 0) return null;
  return (
    <Box sx={{ width: "100%" }}>
      {GlobalData && (
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <img src={gifImageUrl} alt="all nfts gif" className="respImg" />
        </Box>
      )}

      <Box
        sx={{
          background: `url('${nftsBox_bg}')`,
          backgroundSize: "100% 100%",
          px: [2, 2, 3],
          py: [2, 2, 3],
        }}
      >
        <Grid container spacing={[3, 3, 3]} justifyContent="center">
          {nftTabs.map((item: any, index: number) => {
            const { name, color, rarity } = item?.attributes ?? {};
            return (
              <Grid
                item
                key={name}
                xs={6}
                md={4}
                sx={{
                  ...centerFlex,
                }}
              >
                <Stack>
                  <Box
                    sx={{
                      fontFamily: FONTS.MOKOTOONE,
                      mb: 1.5,
                      color: color,
                      fontSize: 18,
                    }}
                  >
                    {name}
                  </Box>
                  <Box
                    sx={{
                      color: color,
                    }}
                  >
                    {rarity}% rarity
                  </Box>
                </Stack>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default HomeNFTTabs;
