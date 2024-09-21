import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import { Box } from '@mui/material';
import './style/scrollbar.css';
import NavigationBar from './Components/Navigationbar';

import Overlay from './Pages/Overlay/Page';
import LandingPage from './Pages/Landing/Page';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box height={'100vh'} sx={{ overflow: 'hidden' }}>
        <NavigationBar />
        <Overlay />
        <LandingPage />
      </Box>
    </ThemeProvider>
  );
}

export default App;
