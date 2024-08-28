import React from "react";
import { Box } from "@mui/system";
import CharactersTable from "@components/Characters/CharactersTable";
import { createFileRoute, ScrollRestoration } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Characters,
});

function Characters() {
  return (
    <>
      <Box
        className="App"
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: { xs: "baseline", md: "center" },
          justifyContent: "center",
          backgroundColor: "dark",
        }}
      >
        <CharactersTable />
      </Box>
      <ScrollRestoration />
    </>
  );
}
