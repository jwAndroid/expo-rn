import { FC, memo } from 'react';
import styled from '@emotion/native';
import {
  GestureResponderEvent,
  ImageSourcePropType,
  TouchableWithoutFeedback,
} from 'react-native';

const BannerImage = styled.Image({
  width: '100%',
  height: 70,
  borderRadius: 5,
});

interface IBanner {
  source: ImageSourcePropType;
  status: boolean;
  onPress?: (event: GestureResponderEvent) => void;
}

const Banner: FC<IBanner> = ({ source, status, onPress }) => {
  return status ? (
    <TouchableWithoutFeedback onPress={onPress}>
      <BannerImage source={source} />
    </TouchableWithoutFeedback>
  ) : (
    <></>
  );
};

export default memo(Banner);
