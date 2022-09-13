import { Box, Button } from "@mui/material";
import { FONTS } from "lib/theme";
import { useMemo } from "react";
import { centerFlex } from "utils/sxUtils";

const ProgressElement: React.FC<{ active?: boolean; ended?: boolean }> = ({
  active,
  ended,
}) => {
  return (
    <Box
      sx={{
        color: !active ? "common.gray" : undefined,
        fontWeight: 300,
        ...centerFlex,
      }}
    >
      {ended ? (
        <Box
          sx={{
            width: "10px",
            height: "10px",
            backgroundColor: "red",
            borderRadius: "100%",
            mr: 1,
          }}
        />
      ) : active ? (
        <Box
          sx={{
            width: "10px",
            height: "10px",
            backgroundColor: "#3BEA96",
            borderRadius: "100%",
            mr: 1,
          }}
        />
      ) : null}
      {ended ? "ENDED" : active ? "IN PROGRESS" : "COMING SOON"}
    </Box>
  );
};

export type SessionValueBoxPropsType = {
  name: string;
  minted: number;
  total: number;
  variant: "purple" | "orange" | "blue";
  clickAction?: (params: any) => void;
  active?: boolean;
  ended?: boolean;
};

const SessionValueBox: React.FC<SessionValueBoxPropsType> = ({
  name,
  minted,
  total,
  variant,
  clickAction,
  active,
  ended,
}) => {
  const buttonColor =
    variant === "purple"
      ? "primary"
      : variant === "blue"
      ? "secondary"
      : "info";

  const mainColor = () => {
    if (variant === "purple") {
      return "linear-gradient(123.49deg, #c881fe 8.63%, #6216D2 25.73%, #3E4ECC 42.83%, #3E75D5 62.96%)";
    }
    if (variant === "orange") {
      return "linear-gradient(180deg, #FF591E 0%, #FFB629 100%)";
    }
    if (variant === "blue") {
      return "linear-gradient(180deg, #4dfefe 0%, #01f6f6 100%)";
    }
    return "#fff";
  };

  const borderColor = () => {
    if (variant === "purple") {
      return "#c881fe";
    }
    if (variant === "orange") {
      return "#FF591E";
    }
    if (variant === "blue") {
      return "#4dfefe";
    }
    return "#fff";
  };

  const gradientColor = () => {
    if (variant === "purple") {
      return "linear-gradient(123.49deg, #B048FD 8.63%, #6216D2 25.73%, #7302ca 42.83%, #3a0165 62.96%)";
    }
    if (variant === "orange") {
      return "linear-gradient(180deg, #FF591E 0%, #FFB629 100%)";
    }
    if (variant === "blue") {
      return "linear-gradient(123.49deg, #34fefe 8.63%, #01e4e4 25.73%, #01cbcb 42.83%, #004c4c 62.96%)";
    }
    return null;
  };

  const boxWidth = useMemo(() => {
    if (minted && total) {
      return (minted * 100) / total;
    }
    return null;
  }, [minted, total]);

  // *************** RENDER *************** //
  return (
    <Box
      sx={{
        my: [4, 4, 6],
        position: "relative",
        backgroundColor: "rgba(0,0,0,0.75)",
        py: ["15px", "15px", "25px"],
        px: ["25px", "25px", "33px"],
        ...centerFlex,
        border: "1px solid",
        borderImageSlice: 1,
        borderImageSource: gradientColor(),
        backdropFilter: "blur(642.519px)",
        flexWrap: "wrap",
        margin: "2px",
      }}
    >
      <Box
        sx={{
          width: 40,
          height: 40,
          borderLeft: "3px",
          borderTop: "3px",
          borderColor: borderColor(),
          position: "absolute",
          top: "-2px",
          left: "-2px",
          zIndex: 2,
          borderStyle: "solid",
          borderRight: 0,
          borderBottom: 0,
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          mb: [3, 3, 4],
        }}
      >
        <Box
          sx={{
            fontFamily: FONTS.MOKOTOONE,
            fontSize: "1.1rem",
            textShadow: `0px 0px 10px ${borderColor()}`,
          }}
        >
          {name}
        </Box>
        <ProgressElement active={active} ended={ended} />
      </Box>

      <Box
        sx={{
          border: (theme) => `1px solid rgba(255,255,255,0.15)`,
          minWidth: "200px",
          width: "100%",
          display: "flex",
          height: "10px",
          backgroundColor: `common.darkGray`,
          mb: [1, 1, 2],
        }}
      >
        <Box
          sx={{
            background: `${mainColor()}`,
            height: "100%",
            width: `${boxWidth}%`,
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          mb: [3, 3, 4],
        }}
      >
        <Box>NFTs MINTED</Box>
        <Box
          sx={{
            fontSize: "1.1rem",
            fontFamily: FONTS.MOKOTOONE,
          }}
        >
          <Box
            component="span"
            sx={{
              background: gradientColor(),
              backgroundClip: `text`,
              WebkitTextFillColor: "transparent",
            }}
          >
            {minted <= 0 ? "N/A" : minted}
          </Box>
          /{total}
        </Box>
      </Box>
      <Box
        sx={{
          ...centerFlex,
          width: "100%",
        }}
      >
        <Button
          variant="fsl"
          onClick={clickAction ?? (() => null)}
          disabled={!active || ended}
          color={buttonColor}
        >
          {ended ? "ENDED" : active ? "IN PROGRESS" : "COMING SOON"}
        </Button>
      </Box>
    </Box>
  );
};

export default SessionValueBox;
