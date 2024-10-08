import React from "react";
import { Box, CircularProgress, Stack, Typography, Grid } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { Link, useRouter } from "@tanstack/react-router";

import { fetchCharacterDetails } from "@utils/characters.api";
import { fetchEpisods } from "@utils/episods.api";
import { CharacterT } from "@type/characters.type";

import CharacterTag from "@components/Characters/CharacterTag";
import { Back, Dna, Gender, Globe, Pin } from "@kit/icons";
import InfoRow from "./InfoRow";
import { ErrorStatus, PendingStatus } from "@kit/statusHandler";

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
  const router = useRouter();

  const { data: characterData, status } = useQuery({
    queryKey: ["character", characterId],
    queryFn: () => fetchCharacterDetails(characterId),
  });

  const {
    data: episods,
    isFetching: isFetchingEpisods,
    isError: isEpisodsError,
    status: episodsStatus,
  } = useQuery({
    queryKey: ["episods"],
    queryFn: () => fetchEpisods(characterData[0].episode),
    enabled: !!characterData,
  });

  const handleBack = () => router.history.back();

  const info: CharacterT = characterData ? characterData[0] : {};

  return (
    <Grid
      container
      justifyContent="right"
      sx={{ maxWidth: "720px", width: "100%", color: "white" }}
      gap="25px"
    >
      <Grid item md={1.2} sm={12} xs={12}>
        <Link
          style={{
            width: "81px",
            height: "40px",
            textDecoration: "none",

            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
          onClick={handleBack}
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
      </Grid>

      {(status === "pending" && (
        <Grid item md sm xs>
          <PendingStatus>Character's data is loading ...</PendingStatus>
        </Grid>
      )) ||
        (status === "error" && (
          <Grid item md sm xs>
            <ErrorStatus />
          </Grid>
        )) || (
          <>
            <Grid item md={5.1} sm={6} xs={12}>
              <Box
                sx={{
                  maxWidth: "300px",
                  maxHeight: "300px",
                  width: "100%",
                  height: "100%",
                  minWidth: "100px",
                }}
              >
                <img
                  style={{ width: "100%", height: "auto" }}
                  src={info.image}
                  alt={info.name}
                />
              </Box>
            </Grid>
            <Grid item md sm={5.2} xs={12}>
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
            </Grid>

            {(episodsStatus === "pending" && (
              <PendingStatus>Loading episods data ...</PendingStatus>
            )) ||
              (episodsStatus === "error" && <ErrorStatus />) || (
                <Grid item md={10.4} sm={12} xs={12}>
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
                </Grid>
              )}
          </>
        )}
    </Grid>
  );
};

export default Character;
