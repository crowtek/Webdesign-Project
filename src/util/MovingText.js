import { Box } from '@mui/material';
import MovingLetter from './MovingLetter';

const MovingText = ({ text, size, startAnimation, double = true, newLetter }) => {
  const letters = text.split('');

  return (
    <Box sx={{ display: 'flex' }}>
      {letters.map((letter, index) => (
        <MovingLetter
          key={index}
          letter={letter}
          size={size}
          time={1.2 + Math.random()}
          double={double}
          newLetter={newLetter}
          startAnimation={startAnimation}
        />
      ))}
    </Box>
  );
};

export default MovingText;
