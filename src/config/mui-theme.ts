import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    dark: string;
    green: string;
    red: string;
    gray: string;
    lightGray: string;
  }
  interface PaletteOptions {
    dark: string;
    green: string;
    red: string;
    gray: string;
    lightGray: string;
  }
}

const theme = createTheme({
  palette: {
    dark: "#1E1E1E",
    green: "#67EF7B",
    red: "#FB6F6D",
    gray: "#424345",
    lightGray: "#BCBDBD",
  },
});

export default theme;
