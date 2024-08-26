import { Box, TableCell, Typography } from "@mui/material";
import { charactersSort, SortTypesT } from "@utils/characters.utils";
import { useState } from "react";
import { CharacterT } from "./CharacterType";
import Arrow from "@components/icons/Arrow";

type CustomTableCellT = {
  children?: React.ReactNode;
  name?: string;
  sx?: any;
  characters?: CharacterT[];
  setCharacters?: React.Dispatch<React.SetStateAction<CharacterT[]>>;
  type?: SortTypesT;
  props?: any;
};

const CustomHeadCell = ({
  children,
  name,
  sx,
  characters,
  setCharacters,
  type,
  ...props
}: CustomTableCellT) => {
  const [sortDesc, setSortDesc] = useState(false);

  const handleSort = (sortType: SortTypesT | undefined) => {
    if (!characters || !sortType || !setCharacters) return;
    const sortedCharacters = charactersSort(characters, sortType, sortDesc);
    setSortDesc((prevState) => !prevState);
    setCharacters(sortedCharacters);
  };

  return (
    <TableCell
      sx={{
        textTransform: "uppercase",
        borderColor: "gray",
        backgroundColor: "dark",
        color: "lightGray",
        cursor: "pointer",
        ...sx,
      }}
      onClick={() => handleSort(type)}
      {...props}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
        <Typography variant="h4">{children || name}</Typography>
        {!!type && (
          <Box
            sx={{
              transform: `rotate(${sortDesc ? 180 : 0}deg)`,
            }}
          >
            <Arrow />
          </Box>
        )}
      </Box>
    </TableCell>
  );
};

export default CustomHeadCell;
