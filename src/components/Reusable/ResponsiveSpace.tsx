import { Box } from "@mui/material";

export type ResponsiveSpacePropsType = {
  smaller?: boolean;
};

const ResponsiveSpace: React.FC<ResponsiveSpacePropsType> = ({ smaller }) => {
  // *************** RENDER *************** //
  return (
    <Box
      sx={{
        height: !smaller ? [60, 60, 120] : [40, 40, 80],
      }}
    />
  );
};

export default ResponsiveSpace;
