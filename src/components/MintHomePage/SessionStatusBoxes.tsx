import { Grid, Box } from "@mui/material";
import usePageData from "hooks/usePageData";
import { useMemo } from "react";
import { useNavigate } from "react-router";
import SessionValueBox from "./SessionValueBox";

export type SessionStatusBoxesPropsType = {};

const SessionStatusBoxes: React.FC<SessionStatusBoxesPropsType> = () => {
  const { pageData: mintMachineData } = usePageData("mint-machine-data");
  const navigate = useNavigate();

  const goToMint = () => {
    navigate("/mint");
  };

  const {
    isWhitelistOn,
    isWhitelistEnded,
    isPresaleOn,
    isPresaleEnded,
    isPublicOn,
    isPublicEnded,
  } = useMemo(() => {
    const isWhitelistOn = mintMachineData?.whitelistOne ?? false;
    const isWhitelistEnded =
      mintMachineData?.mintState === "ended" ||
      mintMachineData?.whitelistTwo ||
      mintMachineData?.publicMint
        ? true
        : false;

    const isPresaleOn = mintMachineData?.whitelistTwo ?? false;
    const isPresaleEnded =
      mintMachineData?.mintState === "ended" || mintMachineData?.publicMint
        ? true
        : false;

    const isPublicOn = mintMachineData?.publicMint ?? false;
    const isPublicEnded = mintMachineData?.mintState === "ended" ?? false;
    return {
      isWhitelistOn,
      isWhitelistEnded,
      isPresaleOn,
      isPresaleEnded,
      isPublicOn,
      isPublicEnded,
    };
  }, [mintMachineData]);

  // *************** RENDER *************** //
  return (
    <Box
      sx={{
        px: [2, 2, 6],
      }}
    >
      <Grid container spacing={[2, 2, 4.5]} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <SessionValueBox
            minted={3}
            total={1500}
            name="WHITELIST"
            variant="purple"
            active={isWhitelistOn}
            ended={isWhitelistEnded}
            clickAction={goToMint}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SessionValueBox
            minted={189}
            total={500}
            name="PRESALE"
            variant="orange"
            active={isPresaleOn}
            ended={isPresaleEnded}
            clickAction={goToMint}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SessionValueBox
            minted={0}
            total={2000}
            name="PUBLIC"
            variant="blue"
            clickAction={goToMint}
            active={isPublicOn}
            ended={isPublicEnded}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SessionStatusBoxes;
