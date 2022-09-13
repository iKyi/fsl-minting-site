import { Box, Button, Link } from "@mui/material";
import { useAppSelector } from "app/hooks";
import { centerFlex } from "utils/sxUtils";

export type CenteredWhitepaperBtnPropsType = {};

const CenteredWhitepaperBtn: React.FC<CenteredWhitepaperBtnPropsType> = () => {
  const siteData = useAppSelector((state) => state.global.publicSiteData);
  const { whitepaperUrl } = siteData ?? {};
  // *************** RENDER *************** //
  if (!whitepaperUrl) return null;
  return (
    <Box
      sx={{
        ...centerFlex,
        py: [5, 5, 8],
      }}
    >
      <Button
        variant="fsl"
        component={Link}
        href={whitepaperUrl}
        target="_blank"
        rel="noopener"
      >
        WHITEPAPER
      </Button>
    </Box>
  );
};

export default CenteredWhitepaperBtn;
