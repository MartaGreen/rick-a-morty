import React, { useMemo } from "react";
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
import useInfiniteScroll from "react-infinite-scroll-hook";

const Characters = ({ ...props }) => {
  const {
    data,
    isSuccess,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isFetchNextPageError,
  } = useInfiniteQuery({
    queryKey: ["characters"],
    queryFn: ({ pageParam }: { pageParam: number }) => getCharacters(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
      console.log("allPageParams", allPageParams);
      return lastPageParam + 1;
    },
  });

  const [infiniteRef, { rootRef }] = useInfiniteScroll({
    loading: isFetchingNextPage,
    hasNextPage,
    onLoadMore: fetchNextPage,
    disabled: Boolean(isFetchNextPageError),
    rootMargin: "0px 0px 450px 0px",
    delayInMs: 50,
  });

  // const pagesTotal = useMemo(() => {
  //   data
  // }, []);

  console.log(data);

  return (
    <Box
      sx={{ width: "1084px", maxHeight: "460px", overflow: "auto" }}
      ref={rootRef}
    >
      <Table sx={{ width: "100%" }} stickyHeader={true}>
        <TableHead>
          <TableRow key="header-row">
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
                <CharacterRow key={page.id} characterData={page} />
              ))}
            </>
          ))}
        </TableBody>
      </Table>
      {hasNextPage && (
        <Box ref={infiniteRef}>
          {isFetchingNextPage ? "Loading more..." : ""}
        </Box>
      )}
    </Box>
  );
};

export default Characters;
