import React, { memo, useCallback, useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

// './assets/85819-kadokado-heart.json'

const App = () => {
  const animation = useRef<LottieView>(null);
  const [pressed, setPressed] = useState(false);

  const onPress = useCallback(() => {
    animation?.current?.play();
  }, []);

  return (
    <View style={styles.animationContainer}>
      <LottieView
        ref={animation}
        autoPlay
        loop
        source={require('./assets/85819-kadokado-heart.json')}
      />
    </View>
  );
};

export default memo(App);
