import React from "react";
import { Box } from "@mui/system";
import CharactersTable from "@components/Characters/CharactersTable";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/characters/")({
  component: Characters,
});

function Characters() {
  return (
    <Box
      className="App"
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "dark",
      }}
    >
      <CharactersTable />
    </Box>
  );
}
