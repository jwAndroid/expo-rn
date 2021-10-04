import React, { memo } from 'react';
import styled from '@emotion/native';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

import { Input } from './src/components';
import { icon } from './src/theme';

const Container = styled.View({
  flex: 1,
  backgroundColor: '#1a6ac7',
});

const TitleContainer = styled.View({
  flex: 1,
  justifyContent: 'flex-end',
  alignItems: 'center',
});

const InputContainer = styled.View({
  flex: 2.5,
});

const Title3 = styled.View({
  flex: 1,
});

interface IText {
  fontSize: number;
  color: string;
  marginBottom?: number;
  marginTop?: number;
}

const StyledText = styled.Text<IText>(
  ({ fontSize, color, marginBottom, marginTop }) => ({
    fontSize,
    color,
    marginBottom,
    marginTop,
    alignSelf: 'center',
  })
);

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 800,
  },
});

const App = () => {
  return (
    <Container>
      <StatusBar style="auto" />
      <LinearGradient
        colors={['#69a9f3', 'transparent']}
        style={styles.background}
      />
      <TitleContainer>
        <StyledText marginBottom={20} color="#fff" fontSize={30}>
          Sign In
        </StyledText>
      </TitleContainer>

      <InputContainer>
        <Input
          title="Email"
          placeholder="Enter your Email"
          inputIcon={icon.email}
          secureTextEntry={false}
          maxLength={30}
          keyboardType="email-address"
        />

        <Input
          title="Password"
          placeholder="Enter your Password"
          inputIcon={icon.password}
          secureTextEntry
          maxLength={16}
          keyboardType="default"
        />
      </InputContainer>
      <Title3 />
    </Container>
  );
};

export default memo(App);
