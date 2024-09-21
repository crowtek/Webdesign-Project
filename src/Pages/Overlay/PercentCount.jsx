import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import MovingLetter from '../../util/MovingLetter';

const PercentCount = ({ setStartAnimation }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const interval = 10;
    const maxCount = 100;

    const timer = setInterval(() => {
      if (count < maxCount) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(timer);
        setStartAnimation(true);
      }
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [count, setStartAnimation]);

  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: '0',
        right: '0',
        padding: '20px',
      }}>
      <MovingLetter size={'h1'} time={0.7} letter={`${count}%`} startAnimation={count === 100 && true}>
        %
      </MovingLetter>
    </Box>
  );
};

export default PercentCount;
