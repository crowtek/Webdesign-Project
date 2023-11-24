import { ThemeProvider  } from "@mui/material/styles"
import CssBaseline from '@mui/material/CssBaseline';
import theme from "./theme";
import { Box  } from "@mui/material";
import "./style/scrollbar.css";

import Overlay from "./Pages/Overlay";
import Landing from "./Pages/Landing";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box height={"100vh"}>
        <Overlay />
        <Landing />
      </Box>
    </ThemeProvider>
  );
}

export default App;
