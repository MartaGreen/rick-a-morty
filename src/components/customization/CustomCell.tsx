import styled from "@emotion/styled";
import { TableCell, Theme } from "@mui/material";

type StyledT = {
  theme?: Theme;
};

const CustomCell = styled(TableCell)(({ theme }: StyledT) => ({
  borderColor: theme?.palette.lightGray,
  color: theme?.palette.lightGray,
  height: "60px",
  padding: "0 16px",
  lineHeight: "19px",
}));

export default CustomCell;
