import styled from '@emotion/native';
import React, { memo } from 'react';
import {
  StatusBar,
  FlatList,
  Image,
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Easing,
  SafeAreaViewBase,
  SafeAreaView,
} from 'react-native';

import { API_KEY, API_URL } from './src/apiKey';

const { width, height } = Dimensions.get('screen');

const Container = styled.View({
  flex: 1,
  backgroundColor: '#fff',
});

const App = () => {
  return (
    <Container>
      <StatusBar hidden />
    </Container>
  );
};

export default memo(App);
