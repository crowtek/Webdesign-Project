import Undertitle from './Undertitle';
import MovingText from '../../../util/MovingText';
import { Box } from '@mui/material'; // Import Box for responsive layout

const Title = ({ startAnimation }) => {
  return (
    <>
      <MovingText text='MULTI-' size='h1' startAnimation={startAnimation} />
      <MovingText text='DISCIPLINARY' size='h1' startAnimation={startAnimation} />

      <Box sx={{ flexDirection: { xs: 'column', lg: 'row' }, backgroundColor: 'red' }}>
        <MovingText text='DESIGNNER  ' size='h1' startAnimation={startAnimation} />
        <Undertitle startAnimation={startAnimation} />
      </Box>
    </>
  );
};

export default Title;
