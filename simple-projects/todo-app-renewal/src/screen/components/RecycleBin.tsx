import { memo } from 'react';
import { View } from 'react-native';

import { StyledText } from '../../components/text';

const RecycleBin = () => {
  return (
    <View>
      <StyledText>RecycleBin screen</StyledText>
    </View>
  );
};

export default memo(RecycleBin);
