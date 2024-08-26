import React from "react";
import { Box } from "@mui/material";

type IconComponentT = {
  sx?: any;
};

function WidthIcon(IconComponent: React.FunctionComponent) {
  return ({ sx, ...props }: IconComponentT) => {
    return (
      <Box
        sx={{
          width: "16px",
          height: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...sx,
        }}
      >
        <IconComponent {...props} />
      </Box>
    );
  };
}

export default WidthIcon;
