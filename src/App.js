import { ThemeProvider  } from "@mui/material/styles"
import CssBaseline from '@mui/material/CssBaseline';
import theme from "./theme";
import { Box,Typography  } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box height={"100vh"}>
        <Typography color="textPrimary">Test</Typography>
        </Box>
    </ThemeProvider>
  );
}

export default App;
