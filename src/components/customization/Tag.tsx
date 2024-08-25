import styled from "@emotion/styled";
import { Chip, Theme } from "@mui/material";
import { StatusT } from "../Characters/CharacterType";

type ChipStyledT = {
  theme?: Theme;
  type: StatusT;
};

const StyledChip = styled(Chip)(({ theme, type }: ChipStyledT) => ({
  color:
    ((type === "Alive" || type === "Dead") && "#000") ||
    theme?.palette.lightGray,
  backgroundColor:
    (type === "Alive" && theme?.palette.green) ||
    (type === "Dead" && theme?.palette.red) ||
    theme?.palette.gray,
  padding: "4px 6px",
  borderRadius: "4px",
}));

export default StyledChip;
