import React from "react";
import { Box } from "@mui/material";

const WithStatus = (StatusComponent: React.FunctionComponent) => {
  return ({ ...props }) => (
    <Box
      sx={{
        width: "100%",
        height: "50%",
        minHeight: "150px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "dark",
      }}
    >
      <StatusComponent {...props} />
    </Box>
  );
};

export default WithStatus;
