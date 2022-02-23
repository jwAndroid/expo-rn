import styled from '@emotion/native';
import { FC, memo } from 'react';
import StyledText from './StyledText';

interface IButton {
  paddingVertical: number;
  paddingHorizontal: number;
}

const Button = styled.Pressable<IButton>(
  ({ paddingVertical, paddingHorizontal }) => ({
    width: '100%',
    backgroundColor: '#303030',
    paddingVertical,
    paddingHorizontal,
  })
);

const StyledButton: FC<IButton> = ({ paddingVertical, paddingHorizontal }) => {
  return (
    <Button
      paddingVertical={paddingVertical}
      paddingHorizontal={paddingHorizontal}
    >
      <StyledText fontSize={16} color="#303030">
        Button
      </StyledText>
    </Button>
  );
};

export default memo(StyledButton);
