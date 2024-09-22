import { useState } from 'react';
import { Box, Typography, Button, Stack, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AvailableButton from './AvailableButton';

const NavigationBar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        top: '0',
        right: '0',
        height: '10vh',
        width: '100%',
        padding: '4%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        animation: `move-down 1s both`,
        animationDelay: '3s',
        color: '#fff',
        backgroundColor: 'transparent',
      }}>
      <Typography variant='h2'>MEIK G.</Typography>

      {/* Burger menu for small screens */}
      <IconButton
        sx={{
          display: { xs: 'block', lg: 'none' },
          color: 'white',
        }}
        onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>

      {/* Menu items for large screens */}
      <Stack
        spacing={2}
        direction='row'
        sx={{
          display: { xs: 'none', lg: 'flex' },
        }}>
        <Button variant='text' sx={{ color: 'white' }}>
          PROJECTE
        </Button>
        <Button variant='text' sx={{ color: 'white' }}>
          ABOUT
        </Button>
      </Stack>

      {/* "Available for Freelance" Button (hidden on small screens) */}
      <AvailableButton small={false} />

      {/* Drawer for burger menu */}
      <Drawer anchor='right' open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            padding: '16px',
            color: 'black',
          }}
          role='presentation'
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}>
          <List>
            <ListItem button>
              <ListItemText primary='PROJECTE' />
            </ListItem>
            <ListItem button>
              <ListItemText primary='ABOUT' />
            </ListItem>
            <ListItem button>
              <ListItemText primary='AVAILABLE FOR FREELANCE' />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default NavigationBar;
