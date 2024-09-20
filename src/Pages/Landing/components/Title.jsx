import Undertitle from './Undertitle';
import MovingText from '../../../MovingText';

const Title = ({ startAnimation }) => {
  return (
    <>
      <MovingText text='MULTI-' size='h1' startAnimation={startAnimation} />
      <MovingText text='DISCIPLINARY' size='h1' startAnimation={startAnimation} />

      <div style={{ display: 'flex' }}>
        <MovingText text='DESIGNNER  ' size='h1' startAnimation={startAnimation} />

        <Undertitle startAnimation={startAnimation} />
      </div>
    </>
  );
};
export default Title;
