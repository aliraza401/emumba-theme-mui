import { createTheme } from "@mui/material";
import typography from "./Typograghy";

const additionalAttributes = {
  dark: {
    bg: {
      main: "#141414",
      light: "#0d0d0d",
    },
    text: {
      main: "#FFFFFF",
      light: "rgba(255, 255, 255, 0.4)",
    },
  },
  light: {
    bg: {
      main: "#f8f8f8",
      light: "#ffffff",
    },
    text: {
      main: "#000000",
      light: "rgba(0, 0, 0, 0.4)",
    },
  },
};

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
  typography: {
    ...typography,
  },
};

const lightTheme = createTheme({
  ...baseTheme,
  ...additionalAttributes.light,
  palette: {
    ...baseTheme.palette,
    mode: "light",
  },
  components: {
    ...baseTheme.components,
    MuiTypography: {
      styleOverrides: {
        subtitle1: {
          color: additionalAttributes.light.text.light,
        },
      },
    },
  },
});

const darkTheme = createTheme({
  ...baseTheme,
  ...additionalAttributes.dark,
  palette: {
    ...baseTheme.palette,
    mode: "dark",
  },
  components: {
    ...baseTheme.components,
    MuiTypography: {
      styleOverrides: {
        subtitle1: {
          color: additionalAttributes.dark.text.light,
        },
      },
    },
  },
});

export { lightTheme, darkTheme };
