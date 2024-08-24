import { TableCell, TableRow } from "@mui/material";
import React from "react";
import { CharacterT } from "./CharacterType";

const CharacterRow = ({ characterData }: { characterData: CharacterT }) => {
  const { id, name, status, gender, species, created, origin, url } =
    characterData;

  return (
    <TableRow key={id}>
      <TableCell>{name}</TableCell>
      <TableCell>{status}</TableCell>
      <TableCell>{gender}</TableCell>
      <TableCell>{species}</TableCell>
      <TableCell>{created}</TableCell>
      <TableCell>{origin.name}</TableCell>
      <TableCell>{url}</TableCell>
    </TableRow>
  );
};

export default CharacterRow;
