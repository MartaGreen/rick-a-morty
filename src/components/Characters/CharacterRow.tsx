import React from "react";
import { Box, TableRow, Typography } from "@mui/material";
import CustomCell from "@components/customization/CustomCell";
import { CharacterT } from "./CharacterType";
import CharacterTag from "./CharacterTag";

const CharacterRow = ({ characterData }: { characterData: CharacterT }) => {
  const { id, name, status, gender, species, created, origin, url, image } =
    characterData;

  var options: any = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  var today = new Date(created);

  return (
    <TableRow key={id}>
      <CustomCell
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "left",
          gap: "12px",
        }}
      >
        <Box sx={{ width: "40px", height: "40px" }}>
          <img
            src={image}
            style={{ width: "100%", height: "100%" }}
            alt={id.toString()}
          />
        </Box>
        <Typography>{name}</Typography>
      </CustomCell>
      <CustomCell>
        <CharacterTag type={status} />
      </CustomCell>
      <CustomCell>{gender}</CustomCell>
      <CustomCell>{species}</CustomCell>
      <CustomCell>
        {today.toLocaleDateString("sk-SK", options).split(" ").join("")}
      </CustomCell>
      <CustomCell>
        {(origin.name === "unknown" && <CharacterTag type={origin.name} />) ||
          origin.name}
      </CustomCell>
      <CustomCell>
        <a href={url}>Link</a>
      </CustomCell>
    </TableRow>
  );
};

export default CharacterRow;
