import React from "react";
import { TableRow, Typography } from "@mui/material";
import CustomCell from "@components/customization/CustomCell";
import { CharacterT } from "./CharacterType";
import StyledChip from "@components/customization/Tag";
import { Cross, Tick, QuestionMark } from "@components/icons";

const CharacterRow = ({ characterData }: { characterData: CharacterT }) => {
  const { id, name, status, gender, species, created, origin, url } =
    characterData;

  return (
    <TableRow key={id}>
      <CustomCell>{name}</CustomCell>
      <CustomCell>
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
      </CustomCell>
      <CustomCell>{gender}</CustomCell>
      <CustomCell>{species}</CustomCell>
      <CustomCell>{created}</CustomCell>
      <CustomCell>{origin.name}</CustomCell>
      <CustomCell>{url}</CustomCell>
    </TableRow>
  );
};

export default CharacterRow;
