import React from "react";
import { Typography } from "@mui/material";
import WithStatus from "./WithStatus";

const ErrorStatus = ({
  children,
  message,
  sx,
  ...props
}: {
  children?: React.ReactNode;
  message?: string;
  sx?: any;
}) => {
  return (
    <>
      <Typography sx={{ color: "red", fontSize: "16px", ...sx }} {...props}>
        {children ?? message ?? "Unable to load data from the server"}
      </Typography>
    </>
  );
};
export default WithStatus(ErrorStatus);
