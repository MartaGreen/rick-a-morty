import React from "react";
import { Box } from "@mui/system";
import Characters from "../components/Characters/Characters";

function App() {
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
      <Characters />
    </Box>
  );
}

export default App;
