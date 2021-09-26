import React, { memo, useCallback } from 'react';
import styled from '@emotion/native';

import { Alert } from 'react-native';

const Container = styled.View({
  height: '100%',
  marginTop: 20,
});

const StyledText = styled.Text({
  fontSize: 18,
  color: '#fff',
});

interface IStyledButton {
  backgroundColor: string;
}

const StyledButton = styled.Pressable<IStyledButton>(({ backgroundColor }) => ({
  height: '12%',
  flexDirection: 'row',
  marginHorizontal: '10%',
  marginBottom: 10,
  borderRadius: 10,
  backgroundColor,
  justifyContent: 'center',
  alignItems: 'center',
}));

const ChargeButton = () => {
  const consoleStart = useCallback(
    (text: string) => () => {
      console.log(text);
    },
    []
  );

  const onPress = useCallback(() => {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Cancel',
          onPress: consoleStart('Cancel'),
          style: 'cancel',
        },
        { text: 'OK', onPress: consoleStart('Ok') },
      ],
      { cancelable: false }
    );
  }, []);

  return (
    <Container>
      <StyledButton backgroundColor="#404040" onPress={onPress}>
        <StyledText>React</StyledText>
      </StyledButton>

      <StyledButton backgroundColor="#202020" onPress={onPress}>
        <StyledText>Axios</StyledText>
      </StyledButton>

      <StyledButton backgroundColor="#101010" onPress={onPress}>
        <StyledText>Hook</StyledText>
      </StyledButton>
    </Container>
  );
};

export default memo(ChargeButton);
