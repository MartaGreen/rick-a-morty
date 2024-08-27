import React, { useEffect, useState } from "react";
import { Box, Table, TableBody, TableHead, TableRow } from "@mui/material";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getCharacters, getPagesTotal } from "@utils/characters.api";
import CharacterRow from "./CharacterRow";
import CustomHeadCell from "./CustomHeadCell";
import { CharacterT } from "./CharacterType";

const CharactersTable = () => {
  const [characters, setCharacters] = useState<CharacterT[]>(
    [] as CharacterT[]
  );

  // Fetch characters' total pages amount
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
    enabled: !!pagesTotal, // Wait until total pages data is fetched
  });

  useEffect(() => {
    if (!data) return;

    const lastPage: number = data.pageParams.length - 1;
    const freshAddedCharacters = data.pages[lastPage];
    setCharacters((prevState) => prevState.concat(freshAddedCharacters));
  }, [data]);

  const [infiniteRef, { rootRef }] = useInfiniteScroll({
    loading: isFetchingNextPage,
    hasNextPage,
    onLoadMore: fetchNextPage,
    disabled: Boolean(isFetchNextPageError),
    rootMargin: "0px 0px 300px 0px",
    delayInMs: 50,
  });

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
            <CustomHeadCell
              sx={{ minWidth: "250px", width: "248px" }}
              type="name"
              characters={characters}
              setCharacters={setCharacters}
            >
              name
            </CustomHeadCell>
            <CustomHeadCell
              sx={{ minWidth: "174px", width: "174px" }}
              type="status"
              characters={characters}
              setCharacters={setCharacters}
            >
              status
            </CustomHeadCell>
            <CustomHeadCell
              type="gender"
              characters={characters}
              setCharacters={setCharacters}
              sx={{ minWidth: "133px", width: "133px" }}
            >
              genger
            </CustomHeadCell>
            <CustomHeadCell
              sx={{ minWidth: "135px", width: "135px" }}
              type="species"
              characters={characters}
              setCharacters={setCharacters}
            >
              species
            </CustomHeadCell>
            <CustomHeadCell
              sx={{ minWidth: "153px", width: "153px" }}
              type="created"
              characters={characters}
              setCharacters={setCharacters}
            >
              created
            </CustomHeadCell>
            <CustomHeadCell
              sx={{ minWidth: "175px", width: "175px" }}
              type="origin"
              characters={characters}
              setCharacters={setCharacters}
            >
              origin
            </CustomHeadCell>
            <CustomHeadCell>detail</CustomHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {characters.map((character: any) => (
            <CharacterRow key={character.id} characterData={character} />
          ))}
        </TableBody>
      </Table>
      {hasNextPage && (
        <Box ref={infiniteRef}>
          {isFetchingNextPage ? "Loading more..." : ""}
          {isFetchNextPageError ? "Fetching next page error" : ""}
        </Box>
      )}
    </Box>
  );
};

export default CharactersTable;
