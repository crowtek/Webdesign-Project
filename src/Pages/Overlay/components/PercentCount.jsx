import { Box,Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

const PercentCount = ({setStartAnimation}) => {
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
  }, [count,setStartAnimation]);

  return (
    <Box sx={{
        position:"absolute",
        bottom:"0",
        right:"0",
        padding:"20px",
    }}>
      <Typography variant='h1' mt={"20px"}>{count}%</Typography>
    </Box>
  );
};

export default PercentCount;
