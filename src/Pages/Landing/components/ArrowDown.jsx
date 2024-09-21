import { Box } from '@mui/material';
import '../../../style/arrowDown.css';

const ArrowDown = () => {
  // Calculate the center of the circle
  const circleCenterX = 25;
  const circleCenterY = 25;

  const imageSize = 15;
  const imageX = circleCenterX - imageSize / 2;
  const imageY = circleCenterY - imageSize / 2;

  return (
    <Box
      sx={{
        position: 'fixed',
        left: '45%',
        bottom: '10px',
        height: '550px',
      }}>
      <div className='circle'>
        <div className='circle__item'>
          <svg className='circle__spinner' viewBox='0 0 50 50'>
            <circle
              className='path'
              cx={circleCenterX}
              cy={circleCenterY}
              r='19'
              fill='none'
              stroke='#fff'
              strokeWidth='0.3'></circle>
            <image x={imageX} y={imageY} width={imageSize} height={imageSize} xlinkHref='/arrow.png' />
          </svg>
        </div>
      </div>
    </Box>
  );
};

export default ArrowDown;
