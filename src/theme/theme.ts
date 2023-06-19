import { createTheme } from "@mui/material";
import typography from "./Typograghy";

const baseTheme = {
  palette: {
    primary: {
      main: "#3F8AE0",
    },
    secondary: {
      main: "#326eb3",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          // backgroundColor: bg.main,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxHeight: "100vh",
          paddingLeft: 0,
          paddingRight: 0,
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        item: {
          borderRadius: "50px",
        },
      },
    },
  },
  ...typography,
};

const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    ...baseTheme.palette,
    mode: "light",
  },
  bg: {
    main: "#f8f8f8",
    light: "#ffffff",
  },
  text: {
    main: "#000000",
    light: "rgba(0, 0, 0, 0.4)",
  },
});

const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    ...baseTheme.palette,
    mode: "dark",
  },
  bg: {
    main: "#141414",
    light: "#0d0d0d",
  },
  text: {
    main: "#FFFFFF",
    light: "rgba(255, 255, 255, 0.4)",
  },
});

export { lightTheme, darkTheme };
