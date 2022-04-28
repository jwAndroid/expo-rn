import { FC, memo } from 'react';
import { Image, ImageSourcePropType } from 'react-native';

interface IStyledIcon {
  source: ImageSourcePropType;
}

const StyledIcon: FC<IStyledIcon> = ({ source }) => {
  return <Image source={source} />;
};

export default memo(StyledIcon);
