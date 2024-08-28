import React from "react";
import Tag from "@kit/styledComponents/Tag";
import { StatusT } from "@type/characters.type";
import { Typography } from "@mui/material";
import { Cross, QuestionMark, Tick } from "@kit/icons";

function CharacterTag({ type, ...props }: { type: StatusT }) {
  return (
    <Tag
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
