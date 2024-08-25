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
      sx={{
        width: "1084px",
        maxHeight: "460px",
        overflow: "auto",
      }}
      ref={rootRef}
    >
      <Table sx={{ width: "100%", minWidth: "1084px" }} stickyHeader={true}>
        <TableHead>
          <TableRow key="header-row">
            <CustomHeadCell sx={{ maxWidth: "248px", width: "248px" }}>
              name
            </CustomHeadCell>
            <CustomHeadCell sx={{ maxWidth: "175px", width: "175px" }}>
              status
            </CustomHeadCell>
            <CustomHeadCell sx={{ maxWidth: "133px", width: "133px" }}>
              genger
            </CustomHeadCell>
            <CustomHeadCell sx={{ maxWidth: "135px", width: "135px" }}>
              species
            </CustomHeadCell>
            <CustomHeadCell sx={{ maxWidth: "153px", width: "153px" }}>
              created
            </CustomHeadCell>
            <CustomHeadCell sx={{ maxWidth: "175px", width: "175px" }}>
              origin
            </CustomHeadCell>
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
