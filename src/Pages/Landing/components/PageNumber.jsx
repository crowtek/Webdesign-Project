import { Box, useTheme } from '@mui/material';
import SouthOutlinedIcon from '@mui/icons-material/SouthOutlined';
import MovingLetter from '../../../util/MovingLetter';

const PageNumer = ({ startAnimation }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: 'absolute',
        left: '8vh',
        bottom: '8vh',
        display: 'flex',
        alignItems: 'center',
        // Hide on screens smaller than lg
        [theme.breakpoints.down('lg')]: {
          display: 'none',
        },
      }}>
      <MovingLetter
        newLetter={'01 / 04 - SCROLL'}
        size={'h3'}
        time={1.2}
        double={true}
        startAnimation={startAnimation}
      />
      <SouthOutlinedIcon sx={{ height: '20px', animation: `move-down 1s both` }} />
    </Box>
  );
};

export default PageNumer;
