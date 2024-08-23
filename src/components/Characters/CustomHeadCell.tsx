import { TableCell } from "@mui/material";
import React from "react";

type CustomTableCellT = {
  children?: React.ReactNode;
  name?: string;
  sx?: any;
};

const CustomHeadCell = ({ children, name, sx, ...props }: CustomTableCellT) => {
  return (
    <TableCell sx={{ textTransform: "uppercase", ...sx }} {...props}>
      {children || name}
    </TableCell>
  );
};

export default CustomHeadCell;
