import { Box } from '@mui/material';
import SouthOutlinedIcon from '@mui/icons-material/SouthOutlined';
import MovingLetter from './MovingLetter';
import '../style/animation.css';

const PageNumer = ({ startAnimation }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        left: '8vh',
        top: '27vh',
        display: 'flex',
        alignItems: 'center',
      }}>
      <MovingLetter
        newLetter={'01//04 - SCROLL'}
        size={'h4'}
        time={1.2}
        double={true}
        startAnimation={startAnimation}
      />
      <SouthOutlinedIcon sx={{ height: '20px', animation: `move-down 1s both`, animationDelay: '3s' }} />
    </Box>
  );
};

export default PageNumer;
