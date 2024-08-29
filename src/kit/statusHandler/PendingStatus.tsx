import React from "react";
import { CircularProgress, Typography } from "@mui/material";
import WithStatus from "./WithStatus";

const PendingStatus = ({
  children,
  message,
  icon = true,
  sx,
  ...props
}: {
  children?: React.ReactNode;
  icon?: boolean;
  message?: string;
  sx?: any;
}) => {
  return (
    <>
      <Typography sx={{ color: "white", fontSize: "16px", ...sx }} {...props}>
        {children ?? message ?? "Loading data ..."}
      </Typography>
      {icon && <CircularProgress />}
    </>
  );
};
export default WithStatus(PendingStatus);
