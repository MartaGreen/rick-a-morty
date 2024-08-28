import React from "react";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";

import { fetchCharacterDetails } from "@utils/characters.api";
import { fetchEpisods } from "@utils/episods.api";
import { CharacterT } from "@type/characters.type";

import CharacterTag from "@components/Characters/CharacterTag";
import { Back, Dna, Gender, Globe, Pin } from "@kit/icons";
import InfoRow from "./InfoRow";

type EpisodT = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};

const Character = ({ characterId, ...props }: { characterId: number }) => {
  const {
    data: characterData,
    isFetching,
    isError,
  } = useQuery({
    queryKey: ["character", characterId],
    queryFn: () => fetchCharacterDetails(characterId),
  });

  const {
    data: episods,
    isFetching: isFetchingEpisods,
    isError: isEpisodsError,
  } = useQuery({
    queryKey: ["episods"],
    queryFn: () => fetchEpisods(characterData[0].episode),
    enabled: !!characterData,
  });

  // If loading return Loading bar
  if (isFetching)
    return (
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "dark",
        }}
      >
        <Typography sx={{ color: "white", fontSize: "16px" }}>
          Character's data is loading ...
        </Typography>
        <CircularProgress />
      </Box>
    );

  if (isError)
    return (
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "dark",
        }}
      >
        <Typography sx={{ color: "white", fontSize: "16px" }}>
          Error while loading data!
        </Typography>
      </Box>
    );

  const info: CharacterT = characterData[0];

  return (
    <Stack direction="row" gap="18px" sx={{ width: "720px", color: "white" }}>
      <Link
        style={{
          width: "81px",
          height: "40px",
          textDecoration: "none",

          display: "flex",
          alignItems: "center",
          gap: "4px",
        }}
        to="/characters"
      >
        <Back sx={{ width: "24px", height: "24px" }} />
        <Typography
          variant="h4"
          sx={{
            color: "white",
            textTransform: "uppercase",
            letterSpacing: "1.4px",
          }}
        >
          Back
        </Typography>
      </Link>
      <Stack gap="24px" sx={{ width: "611px" }}>
        <Stack direction="row" sx={{ gap: "30px" }}>
          <Box sx={{ width: "300px", height: "300px" }}>
            <img src={info.image} alt={info.name} />
          </Box>
          <Stack gap="26px">
            <Stack direction="row" alignItems="center" gap="28px">
              <Typography
                variant="h4"
                sx={{
                  fontSize: "32px",
                  lineHeight: "40px",
                  letterSpacing: "-0.64px",
                }}
              >
                {info.name}
              </Typography>
              <CharacterTag type={info.status} />
            </Stack>

            <Stack gap="16px">
              <InfoRow name={info.gender} Icon={Gender} />
              <InfoRow name={info.species} Icon={Dna} />
              <InfoRow name={info.origin.name} Icon={Globe} />
              <InfoRow name={info.location.name} Icon={Pin} />
            </Stack>
          </Stack>
        </Stack>

        {!isFetchingEpisods && !isEpisodsError && (
          <Stack gap="12px">
            <Stack direction="row" gap="8px" alignItems="center">
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  letterSpacing: "1.2px",
                }}
              >
                Episodes
              </Typography>
              <Box
                sx={{
                  width: "23px",
                  height: "23px",
                  backgroundColor: "#0D8CD2",
                  padding: "5px",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: "11px",
                }}
              >
                {episods.length}
              </Box>
            </Stack>

            <Typography sx={{ fontSize: "14px", lineHeight: "19px" }}>
              {episods.map((episod: EpisodT) => episod.name).join(", ")}
            </Typography>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export default Character;
