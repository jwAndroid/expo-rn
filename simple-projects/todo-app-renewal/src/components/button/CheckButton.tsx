import { FC, memo } from 'react';
import { GestureResponderEvent, ImageSourcePropType } from 'react-native';
import styled from '@emotion/native';

const StyledPressable = styled.Pressable(() => ({
  margin: 10,
}));

const Icon = styled.Image(({ theme }) => ({
  width: 30,
  height: 30,
  tintColor: theme.text,
}));

interface ICheckButton {
  icon: ImageSourcePropType;
  onPress: ((event: GestureResponderEvent) => void) | null | undefined;
}

const CheckButton: FC<ICheckButton> = ({ icon, onPress }) => {
  return (
    <StyledPressable onPress={onPress}>
      <Icon source={icon} />
    </StyledPressable>
  );
};

export default memo(CheckButton);
