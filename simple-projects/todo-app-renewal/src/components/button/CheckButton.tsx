import { FC, memo } from 'react';
import { GestureResponderEvent, ImageSourcePropType } from 'react-native';
import styled from '@emotion/native';

const StyledPressable = styled.Pressable(() => ({
  margin: 10,
}));

interface IIcon {
  width: number | undefined;
  height: number | undefined;
}

const Icon = styled.Image<IIcon>(({ theme, width, height }) => ({
  width,
  height,
  tintColor: theme.text,
}));

interface ICheckButton {
  icon: ImageSourcePropType;
  width?: number | undefined;
  height?: number | undefined;
  onPress: ((event: GestureResponderEvent) => void) | null | undefined;
}

const CheckButton: FC<ICheckButton> = ({
  icon,
  onPress,
  width = 26,
  height = 26,
}) => {
  return (
    <StyledPressable onPress={onPress}>
      <Icon source={icon} width={width} height={height} />
    </StyledPressable>
  );
};

export default memo(CheckButton);
