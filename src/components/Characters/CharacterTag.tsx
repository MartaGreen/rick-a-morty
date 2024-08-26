import React from "react";
import StyledChip from "@components/customization/Tag";
import { StatusT } from "./CharacterType";
import { Typography } from "@mui/material";
import { Cross, QuestionMark, Tick } from "@components/icons";

function CharacterTag({ type, ...props }: { type: StatusT }) {
  return (
    <StyledChip
      type={type}
      label={
        <Typography
          sx={{
            textTransform: "capitalize",
            fontWeight: "bold",
            fontSize: "12px",
            p: 0,
          }}
        >
          {type}
        </Typography>
      }
      icon={
        (type === "Alive" && <Tick />) ||
        (type === "Dead" && <Cross />) || <QuestionMark />
      }
      sx={{
        ".MuiChip-label": {
          p: 0,
        },
        ".MuiChip-icon": {
          margin: 0,
        },
      }}
      {...props}
    />
  );
}

export default CharacterTag;
