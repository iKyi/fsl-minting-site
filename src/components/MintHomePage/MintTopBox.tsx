import { Box, Button, Link } from "@mui/material";
import { useAppSelector } from "app/hooks";
import SectionWrapper from "components/Reusable/SectionWrapper";
import { getStrapiMedia } from "lib/theme/media";
import shadowTop from "assets/images/backgrounds/shadowTop.png";
import shadowBottom from "assets/images/backgrounds/shadowBottom.png";
import { FC, ReactNode } from "react";
import { FONTS } from "lib/theme";
import SolIcon from "components/Icons/SolIcon";
import { centerFlex } from "utils/sxUtils";
import SessionStatusBoxes from "./SessionStatusBoxes";

const TopValueBox: FC<{ name: string; value: ReactNode }> = ({
  name,
  value,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Box
        sx={{
          fontFamily: FONTS.MOKOTOONE,
        }}
      >
        {name}
      </Box>
      <Box
        sx={{
          fontSize: "1.12rem",
        }}
      >
        {value}
      </Box>
    </Box>
  );
};

export type MintTopBoxPropsType = {};

const MintTopBox: React.FC<MintTopBoxPropsType> = () => {
  const siteData = useAppSelector((state) => state.global.publicSiteData);
  const {
    mintTopTitle,
    mintTopDescription,
    mintTopPretitle,
    mintBoxImage,
    mintPrice,
    totalSupply,
    socialLinks,
  } = siteData ?? {};

  const discordUrl =
    socialLinks?.find((item: any) => item.name === "discord")?.url ?? null;

  const bgUrl = getStrapiMedia(mintBoxImage);
  // *************** RENDER *************** //
  if (!siteData) return null;
  return (
    <SectionWrapper
      description={mintTopDescription}
      title={mintTopTitle}
      preTitle={mintTopPretitle}
      disableHeaderBars
      sx={{
        background: `url('${shadowTop}'), url('${shadowBottom}'), url('${
          bgUrl ?? ""
        }')`,
        backgroundSize: "100% 130px, 100% 130px,cover",
        backgroundPosition: " top center, bottom center,center center",
        backgroundRepeat: "no-repeat, no-repeat, no-repeat",
        pt: [4, 4, 6],
        mb: [3, 3, 5],
        pb: [2, 2, 4],
      }}
      titleStyles={{
        mb: 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 3,
          justifyContent: "center",
        }}
      >
        <TopValueBox
          name="TOTAL SUPPLY"
          value={
            <Box
              sx={{
                fontFamily: FONTS.MOKOTOONE,
                fontSize: "1.1rem",
              }}
            >
              {totalSupply}
            </Box>
          }
        />
        <TopValueBox
          name="MINT PRICE"
          value={
            <Box
              sx={{
                fontFamily: FONTS.MOKOTOONE,
                ...centerFlex,
              }}
            >
              {mintPrice} <SolIcon sx={{ ml: 0.5 }} />
            </Box>
          }
        />
      </Box>
      <Box
        sx={{
          minHeight: [200, 200, 400],
        }}
      />

      {discordUrl && (
        <Box
          sx={{
            ...centerFlex,
          }}
        >
          <Button
            variant="fsl"
            color="primary"
            component={Link}
            target="_blank"
            rel="noopener"
            href={discordUrl}
          >
            JOIN DISCORD
          </Button>
        </Box>
      )}
      <SessionStatusBoxes />
    </SectionWrapper>
  );
};

export default MintTopBox;
