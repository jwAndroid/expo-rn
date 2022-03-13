import { FC, memo } from 'react';
import styled from '@emotion/native';
import { GestureResponderEvent, ImageSourcePropType } from 'react-native';

interface IContainer {
  paddingVertical?: number;
  marginTop?: number;
  isActive: boolean;
}

const Container = styled.Pressable<IContainer>(
  ({ theme, isActive, paddingVertical, marginTop }) => ({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    paddingVertical,
    zIndex: 1,
    marginTop,
    backgroundColor: isActive
      ? theme.color.dynamic.active
      : theme.color.dynamic.inActive,
  })
);

const Icon = styled.Image({
  width: 30,
  height: 30,
});

interface ITabButton {
  source: ImageSourcePropType;
  isActive: boolean;
  marginTop?: number;
  onPress?: (event: GestureResponderEvent) => void;
  paddingVertical?: number;
}

const TabButton: FC<ITabButton> = ({
  source,
  isActive,
  marginTop,
  onPress,
  paddingVertical,
}) => {
  return (
    <Container
      isActive={isActive}
      marginTop={marginTop}
      onPress={onPress}
      paddingVertical={paddingVertical}
    >
      <Icon source={source} />
    </Container>
  );
};

export default memo(TabButton);
