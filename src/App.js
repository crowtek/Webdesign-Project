import { ThemeProvider  } from "@mui/material/styles"
import CssBaseline from '@mui/material/CssBaseline';
import theme from "./theme";
import { Box  } from "@mui/material";

import Overlay from "./Pages/Overlay";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box height={"100vh"}>
        <Overlay />
      </Box>
    </ThemeProvider>
  );
}

export default App;
