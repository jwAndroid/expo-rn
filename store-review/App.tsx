import React, { memo, useCallback } from 'react';
import styled from '@emotion/native';
import { StatusBar } from 'expo-status-bar';
import { Linking, Platform } from 'react-native';

const Container = styled.View({
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledText = styled.Text({
  fontSize: 16,
  color: '#303030',
});

const App = () => {
  const onPress = useCallback(() => {
    if (Platform.OS === 'ios') {
      Linking.openURL(
        'https://apps.apple.com/kr/app/%EC%9C%84%ED%8A%B8%EB%A6%BD-wetrip/id1525511072?action=write-review'
      );
    } else {
      Linking.openURL(
        'https://play.google.com/store/apps/details?id=net.mintpot.tripmate&showAllReviews=true'
      );
    }
  }, []);

  return (
    <Container>
      <StatusBar style="auto" />
      <StyledText onPress={onPress}>스토어 리뷰</StyledText>
    </Container>
  );
};

export default memo(App);
