import usePageData from "hooks/usePageData";
import { Box, Typography, Tab, Tabs, Stack } from "@mui/material";
import { useState } from "react";
import { getStrapiMedia } from "lib/theme/media";
import { FONTS } from "lib/theme";
import ResponsiveSpace from "components/Reusable/ResponsiveSpace";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`NFT-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

function a11yProps(index: number) {
  return {
    id: `NFT-tab-${index}`,
    "aria-controls": `NFT-tabpanel-${index}`,
  };
}

export type HomeNFTTabsPropsType = {
  children?: any;
};

const HomeNFTTabs: React.FC<HomeNFTTabsPropsType> = ({ children }) => {
  const { pageData: nftTabs } = usePageData("nft-tabs", true);
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(Number(newValue));
  };
  // *************** RENDER *************** //
  if (!nftTabs || nftTabs.length === 0) return null;
  return (
    <Box sx={{ width: "100%" }}>
      {nftTabs.map((item: any, index: number) => {
        const { image, name } = item?.attributes ?? {};
        const imageUrl = getStrapiMedia(image);
        return (
          <TabPanel value={value} index={index} key={index}>
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <img
                style={{ width: 500 }}
                className="respImg"
                src={imageUrl}
                alt={`${name}`}
              />
            </Box>
          </TabPanel>
        );
      })}

      <Box
        sx={{
          border: "1px solid",
          background: `linear-gradient(115.7deg, rgba(176, 72, 253, 0.1) 10.28%, rgba(98, 22, 210, 0.1) 24.23%, rgba(62, 78, 204, 0.1) 38.19%, rgba(62, 117, 213, 0.1) 54.61%)`,
          borderImageSlice: 1,
          borderImageSource:
            "linear-gradient(123.49deg, #B048FD 8.63%, #6216D2 25.73%, #3E4ECC 42.83%, #3E75D5 62.96%)",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Nft Tabs"
          variant="fullWidth"
        >
          {nftTabs.map((item: any, index: number) => {
            const { name, color, rarity } = item?.attributes ?? {};
            return (
              <Tab
                label={
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
                }
                {...a11yProps(index)}
                key={`tab-${index}`}
              />
            );
          })}
        </Tabs>
      </Box>
      <ResponsiveSpace smaller />
    </Box>
  );
};

export default HomeNFTTabs;
