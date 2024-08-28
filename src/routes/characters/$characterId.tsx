import { Box } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";
import Character from "@components/Character/Character";

export const Route: any = createFileRoute("/characters/$characterId")({
  component: CharacterDetails,
});

function CharacterDetails() {
  const params = Route.useParams();
  const characterId = params.characterId;

  return (
    <Box
      sx={{
        width: "100%",
        minWidth: "320px",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "dark",
        p: "15px",
      }}
    >
      <Character characterId={characterId} />
    </Box>
  );
}
