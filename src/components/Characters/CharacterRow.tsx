import React from "react";
import { Box, TableRow, Typography } from "@mui/material";
import CustomCell from "@kit/styledComponents/CustomCell";
import CharacterTag from "./CharacterTag";
import { Link } from "@tanstack/react-router";
import { CharacterT } from "@type/characters.type";

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
    <TableRow
      sx={{
        "&:hover": {
          bgcolor: "black",
          transition: "0.3s",
        },
      }}
      key={id}
    >
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
      <CustomCell>
        {(gender === "unknown" && <CharacterTag type="unknown" />) || gender}
      </CustomCell>
      <CustomCell>
        {(species === "unknown" && <CharacterTag type="unknown" />) || species}
      </CustomCell>
      <CustomCell>
        {today.toLocaleDateString("sk-SK", options).split(" ").join("")}
      </CustomCell>
      <CustomCell>
        {(origin.name === "unknown" && <CharacterTag type={origin.name} />) ||
          origin.name}
      </CustomCell>
      <CustomCell>
        <Link
          to={`/characters/$characterId`}
          params={{ characterId: id }}
          style={{ textDecoration: "none" }}
        >
          <Typography
            sx={{
              color: "lightBlue",
              textDecoration: "underline",
              transition: "0.3s",
              textUnderlineOffset: "2px",
              "&:hover": { textDecoration: "none" },
            }}
          >
            Link
          </Typography>
        </Link>
      </CustomCell>
    </TableRow>
  );
};

export default CharacterRow;
