import { useState } from 'react';
import { Box } from '@mui/material';
import Title from './components/Title';
import PageNumer from './components/PageNumber';
import ArrowDown from './components/ScrollArrow/ArrowDown';
import AvailableButton from '../../Components/AvailableButton';

const LandingPage = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  setTimeout(() => {
    setStartAnimation(true);
  }, 3300);

  return (
    <Box
      sx={{
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: { xs: 'start', lg: 'center' },
        flexDirection: 'column',
        height: '100vh',
      }}>
      <Title startAnimation={startAnimation} />
      <PageNumer startAnimation={startAnimation} />
      <ArrowDown />

      <AvailableButton />
    </Box>
  );
};

export default LandingPage;
