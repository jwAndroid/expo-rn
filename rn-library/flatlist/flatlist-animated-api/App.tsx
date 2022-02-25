import styled from '@emotion/native';
import React, { memo } from 'react';
import {
  StatusBar,
  Animated,
  View,
  Dimensions,
  StyleSheet,
} from 'react-native';

import { data } from './src/data';

const { width } = Dimensions.get('screen');
const imageW = width * 0.7;
const imageH = imageW * 1.54;

const Container = styled.View({
  flex: 1,
});

const FlatListContainer = styled.View({
  width,
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor: '#000',
  shadowOpacity: 1,
  shadowOffset: {
    width: 0,
    height: 0,
  },
  shadowRadius: 20,
});

const FlatImage = styled.Image({
  width: imageW,
  height: imageH,
  resizeMode: 'cover',
  borderRadius: 16,
});

const App = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <Container>
      <StatusBar hidden />

      <View style={StyleSheet.absoluteFillObject}>
        {data.map((image, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0],
          });

          return (
            <Animated.Image
              key={`image-${index}`}
              source={{ uri: image }}
              style={[StyleSheet.absoluteFillObject, { opacity }]}
              blurRadius={20}
            />
          );
        })}
      </View>

      <Animated.FlatList
        data={data}
        onScroll={Animated.event(
          [
            {
              nativeEvent: { contentOffset: { x: scrollX } },
            },
          ],
          { useNativeDriver: true }
        )}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        renderItem={({ item }) => {
          return (
            <FlatListContainer>
              <FlatImage source={{ uri: item }} />
            </FlatListContainer>
          );
        }}
      />
    </Container>
  );
};

export default memo(App);
