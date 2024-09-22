import { Box, Typography, useTheme } from '@mui/material';

const MovingLetter = ({ letter, time = 0.5, size, double, startAnimation, newLetter }) => {
  const theme = useTheme(); // Access the MUI theme object

  // Calculate the default height based on the size prop
  const defaultHeight = size === 'h4' ? '25px' : size === 'h3' ? '25px' : '130px';
  const smallScreenHeight = size === 'h4' ? '15px' : '6vh';

  return (
    <Box
      sx={{
        height: defaultHeight, // Set default height
        overflow: 'hidden',
        // Responsive height adjustment using theme breakpoints
        [theme.breakpoints.down('lg')]: {
          height: smallScreenHeight,
        },
      }}>
      <Typography
        variant={size}
        sx={{
          animation: startAnimation ? `move-up ${time}s both, lose-width-complete 1s 0.5s both` : 'none',
        }}>
        {letter === ' ' || newLetter ? <Typography p={theme.spacing(0.5)} height='24px'></Typography> : letter}
      </Typography>

      {double && (
        <Typography
          variant={size}
          sx={{
            animation: startAnimation ? `move-up-from-down ${time}s both` : 'none',
          }}>
          {newLetter ? newLetter : letter === ' ' ? <Typography p={theme.spacing(0.5)}></Typography> : letter}
        </Typography>
      )}
    </Box>
  );
};

export default MovingLetter;
