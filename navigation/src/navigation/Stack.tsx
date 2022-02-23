import { memo } from 'react';
import StyledText from '../components/StyledText';

const Stack = () => {
  return (
    <StyledText color="#303030" fontSize={16}>
      Stack
    </StyledText>
  );
};

export default memo(Stack);
