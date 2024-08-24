import React from "react";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import CustomHeadCell from "./CustomHeadCell";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getCharacters } from "../../utils/characters.api";
import CharacterRow from "./CharacterRow";

const Characters = ({ ...props }) => {
  const { data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["characters"],
      queryFn: ({ pageParam }: { pageParam: number }) =>
        getCharacters(pageParam),
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
        return lastPageParam + 1;
      },
    });

  const handleLoadMoreCharacters = () => {
    fetchNextPage();
  };

  return (
    <Box sx={{ width: "1084px", maxHeight: "460px", overflow: "auto" }}>
      <Table sx={{ width: "100%" }} stickyHeader={true}>
        <TableHead>
          <TableRow>
            <CustomHeadCell>name</CustomHeadCell>
            <CustomHeadCell>status</CustomHeadCell>
            <CustomHeadCell>genger</CustomHeadCell>
            <CustomHeadCell>species</CustomHeadCell>
            <CustomHeadCell>created</CustomHeadCell>
            <CustomHeadCell>origin</CustomHeadCell>
            <CustomHeadCell>url</CustomHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.pages.map((pagesCollection) => (
            <>
              {pagesCollection.map((page: any) => (
                <CharacterRow characterData={page} />
              ))}
            </>
          ))}
        </TableBody>
      </Table>
      <Button onClick={handleLoadMoreCharacters}>Load more</Button>
    </Box>
  );
};

export default Characters;
