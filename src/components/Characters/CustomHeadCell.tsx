import { TableCell } from "@mui/material";

type CustomTableCellT = {
  children?: React.ReactNode;
  name?: string;
  sx?: any;
};

const CustomHeadCell = ({ children, name, sx, ...props }: CustomTableCellT) => {
  return (
    <TableCell
      sx={{
        textTransform: "uppercase",
        borderColor: "lightGray",
        backgroundColor: "dark",
        color: "lightGray",
        ...sx,
      }}
      {...props}
    >
      {children || name}
    </TableCell>
  );
};

export default CustomHeadCell;
