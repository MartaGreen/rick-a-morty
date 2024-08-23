import React, { useEffect } from "react";
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
    <Box sx={{ width: "1084px", maxHeight: "600px", overflow: "auto" }}>
      <Table sx={{ width: "100%" }}>
        <TableHead>
          <TableRow>
            <CustomHeadCell>name</CustomHeadCell>
            <CustomHeadCell>status</CustomHeadCell>
            <CustomHeadCell>genger</CustomHeadCell>
            <CustomHeadCell>species</CustomHeadCell>
            <CustomHeadCell>created</CustomHeadCell>
            <CustomHeadCell>origin</CustomHeadCell>
            <CustomHeadCell></CustomHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.pages.map((pagesCollection) => {
            return (
              <>
                {pagesCollection.map((page: any) => (
                  <TableRow key={page.id}>
                    <TableCell>{page.name}</TableCell>
                    <TableCell>{page.status}</TableCell>
                    <TableCell>{page.gender}</TableCell>
                    <TableCell>{page.species}</TableCell>
                    <TableCell>{page.created}</TableCell>
                    <TableCell>{page.origin.name}</TableCell>
                    <TableCell>{page.url}</TableCell>
                  </TableRow>
                ))}
              </>
            );
          })}
        </TableBody>
      </Table>
      <Button onClick={handleLoadMoreCharacters}>Load more</Button>
    </Box>
  );
};

export default Characters;
