import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme/theme";
import { CssBaseline } from "@mui/material";
import { Router } from "./router/router";
import GlobalStyle from "./theme/globalStyles";
import { useDarkMode } from "./context/darkMode";

function App() {
  const { state } = useDarkMode();

  return (
    <ThemeProvider theme={state.darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
