import React from "react";
import { TableCell, TableRow, Typography } from "@mui/material";
import { CharacterT } from "./CharacterType";
import StyledChip from "../customization/Tag";
import { Cross, Tick, QuestionMark } from "../icons";

const CharacterRow = ({ characterData }: { characterData: CharacterT }) => {
  const { id, name, status, gender, species, created, origin, url } =
    characterData;

  return (
    <TableRow key={id}>
      <TableCell>{name}</TableCell>
      <TableCell>
        <StyledChip
          type={status}
          label={
            <Typography
              sx={{
                textTransform: "capitalize",
                fontWeight: "bold",
                fontSize: "12px",
              }}
            >
              {status}
            </Typography>
          }
          icon={
            (status === "Alive" && <Tick />) ||
            (status === "Dead" && <Cross />) || <QuestionMark />
          }
        />
      </TableCell>
      <TableCell>{gender}</TableCell>
      <TableCell>{species}</TableCell>
      <TableCell>{created}</TableCell>
      <TableCell>{origin.name}</TableCell>
      <TableCell>{url}</TableCell>
    </TableRow>
  );
};

export default CharacterRow;
