import MovingText from '../../../MovingText';

const Undertitle = ({ startAnimation }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '60px' }}>
      <MovingText text='CREATIVE THINKING AND PROBLEM SOLVING ' size='h4' startAnimation={startAnimation} />
      <MovingText text='ARE WHERE MY MIND WANDERS' size='h4' startAnimation={startAnimation} />
      <MovingText text='USING MY KNOWLEDGE AND PASSION FOR' size='h4' startAnimation={startAnimation} />
      <MovingText text='DESIGNING AS MY MEDIUM' size='h4' startAnimation={startAnimation} />
    </div>
  );
};

export default Undertitle;
