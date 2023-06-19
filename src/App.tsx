import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme/theme";
import { CssBaseline } from "@mui/material";
import { Router } from "./router/router";
import GlobalStyle from "./theme/globalStyles";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
