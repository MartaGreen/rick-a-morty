import React from "react";
import { Box, Table, TableBody, TableHead, TableRow } from "@mui/material";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getCharacters, getPagesTotal } from "@utils/characters.api";
import CharacterRow from "./CharacterRow";
import CustomHeadCell from "./CustomHeadCell";

const Characters = () => {
  const { data: pagesTotal } = useQuery({
    queryKey: ["pagesTotal"],
    queryFn: getPagesTotal,
  });

  const {
    data,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isFetchNextPageError,
  } = useInfiniteQuery({
    queryKey: ["characters"],
    queryFn: ({ pageParam }: { pageParam: number }) => getCharacters(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      const nextPage = lastPageParam + 1;
      console.log("Fetching next page... ", nextPage);
      return nextPage === pagesTotal ? undefined : nextPage;
    },
    enabled: !!pagesTotal,
  });

  const [infiniteRef, { rootRef }] = useInfiniteScroll({
    loading: isFetchingNextPage,
    hasNextPage,
    onLoadMore: fetchNextPage,
    disabled: Boolean(isFetchNextPageError),
    rootMargin: "0px 0px 300px 0px",
    delayInMs: 50,
  });

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
