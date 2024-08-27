import { Stack, Typography } from "@mui/material";
import React from "react";

type InfoRowT = {
  sx?: {
    icon?: any;
    typography?: any;
  };
  Icon: React.FunctionComponent<any>;
  name: string;
};

const InfoRow = ({ sx, Icon, name, ...props }: InfoRowT) => {
  return (
    <Stack direction="row" gap="8px">
      <Icon sx={{ width: "24px", height: "24px" }} />
      <Typography
        sx={{
          color: "white",
          fontSize: "14px",
        }}
      >
        {name}
      </Typography>
    </Stack>
  );
};

export default InfoRow;
