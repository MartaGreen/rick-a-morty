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
          }}
        >
          {type}
        </Typography>
      }
      icon={
        (type === "Alive" && <Tick />) ||
        (type === "Dead" && <Cross />) || <QuestionMark />
      }
      {...props}
    />
  );
}

export default CharacterTag;
