import styled from '@emotion/native';
import { FC, memo } from 'react';
import {
  GestureResponderEvent,
  Dimensions,
  ImageSourcePropType,
} from 'react-native';

const { height } = Dimensions.get('screen');

interface IContainer {
  paddingVertical?: number;
  marginTop?: number;
  isActive: boolean;
}

const Container = styled.Pressable<IContainer>(
  ({ isActive, paddingVertical, marginTop }) => ({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: height / 10,
    paddingVertical,
    marginTop,
    backgroundColor: isActive ? '#303030' : '#101010',
  })
);

const SubjectIcon = styled.Image({
  width: 48,
  height: 48,
  backgroundColor: 'red',
});

interface ITabButton {
  isActive: boolean;
  paddingVertical?: number;
  marginTop?: number;
  source: ImageSourcePropType;
  onPress: (event: GestureResponderEvent) => void;
}

const TabButton: FC<ITabButton> = ({
  isActive,
  paddingVertical,
  marginTop,
  source,
  onPress,
}) => {
  return (
    <Container
      isActive={isActive}
      paddingVertical={paddingVertical}
      marginTop={marginTop}
      onPress={onPress}
    >
      <SubjectIcon source={source} />
    </Container>
  );
};

export default memo(TabButton);
