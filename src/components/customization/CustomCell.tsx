import styled from "@emotion/styled";
import { TableCell, Theme } from "@mui/material";

type StyledT = {
  theme?: Theme;
};

const CustomCell = styled(TableCell)(({ theme }: StyledT) => ({
  borderBottom: theme?.palette.lightGray,
  color: theme?.palette.lightGray,
}));

export default CustomCell;
