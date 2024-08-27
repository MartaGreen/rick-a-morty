import { CharacterT } from "@components/Characters/CharacterType";
import { Box, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";
import { fetchCharacterDetails } from "@utils/characters.api";

export const Route: any = createFileRoute("/characters/$characterId")({
  component: CharacterDetails,
});

function CharacterDetails() {
  const params = Route.useParams();
  const characterId = params.characterId;

  const { data } = useQuery({
    queryKey: ["character", characterId],
    queryFn: () => fetchCharacterDetails(characterId),
  });

  const info: CharacterT = data[0];

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "dark",
      }}
    >
      <Stack direction="row" sx={{ minWidth: "720px" }}>
        <Link
          style={{
            width: "81px",
            height: "40px",
            textDecoration: "none",
          }}
          to="/characters"
        >
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
        <Box>
          <Stack direction="row">
            <Box>
              <img src={info.image} alt={info.name} />
            </Box>
            <Box>
              <Typography>{info.name}</Typography>
              <Box>
                <Typography>{info.gender}</Typography>
                <Typography>{info.species}</Typography>
                <Typography>{info.origin.name}</Typography>
                <Typography>{info.location.name}</Typography>
              </Box>
            </Box>
          </Stack>

          <Typography>Episodes</Typography>

          <Typography>test</Typography>
        </Box>
      </Stack>
    </Box>
  );
}
