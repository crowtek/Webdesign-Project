import React from 'react';
import { Button } from '@mui/material';

const AvailableButton = ({ small = false }) => {
  return (
    <Button
      variant='outlined'
      aria-label='Available for freelance work'
      sx={{
        borderRadius: '25px',
        color: 'white',
        borderColor: 'white',
        display: small ? { xs: 'block', lg: 'none' } : { xs: 'none', lg: 'block' },
      }}>
      AVAILABLE FOR FREELANCE
    </Button>
  );
};

export default AvailableButton;
