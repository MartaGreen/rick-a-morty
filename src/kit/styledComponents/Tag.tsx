import styled from "@emotion/styled";
import { Chip, Theme } from "@mui/material";
import { StatusT } from "@type/characters.type";

type ChipStyledT = {
  theme?: Theme;
  type: StatusT;
};

const Tag = styled(Chip)(({ theme, type }: ChipStyledT) => ({
  color:
    ((type === "Alive" || type === "Dead") && "#000") ||
    theme?.palette.lightGray,
  backgroundColor:
    (type === "Alive" && theme?.palette.green) ||
    (type === "Dead" && theme?.palette.red) ||
    theme?.palette.gray,
  padding: "4px 6px",
  borderRadius: "4px",
  gap: "4px",
  height: "max-content",
}));

export default Tag;
