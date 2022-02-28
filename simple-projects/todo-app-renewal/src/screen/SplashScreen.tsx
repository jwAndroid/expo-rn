import { memo } from 'react';
import { Text, View } from 'react-native';

// import { BaseContainer } from '../components/layout';
// import { StyledText } from '../components/text';

const SplashScreen = () => {
  return (
    <View
      style={{
        backgroundColor: 'blue',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>스플래시 스크린</Text>
    </View>
  );
};

export default memo(SplashScreen);
