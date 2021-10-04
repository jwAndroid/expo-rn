import React, { memo, useCallback } from 'react';
import styled from '@emotion/native';
import {
  FlexAlignType,
  Keyboard,
  StyleSheet,
  TextStyle,
  TouchableWithoutFeedback,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

import { Input, SignupButton } from './src/components';
import { icon } from './src/theme';

const Container = styled.View({
  flex: 1,
  backgroundColor: '#1f76ed',
});

const TitleContainer = styled.View({
  flex: 1,
  justifyContent: 'flex-end',
  alignItems: 'center',
});

const MainContainer = styled.View({
  flex: 2.5,
  paddingHorizontal: 40,
});

const SignupContainer = styled.View({
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'flex-end',
});

const SocialLoginContainer = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  alignSelf: 'center',
  marginTop: 20,
});

interface IText {
  fontSize: number;
  color: string;
  marginBottom?: number;
  marginTop?: number;
  alignSelf?: FlexAlignType;
  fontWeight?: TextStyle['fontWeight'];
}

const StyledText = styled.Text<IText>(
  ({ fontSize, color, marginBottom, marginTop, alignSelf, fontWeight }) => ({
    fontSize,
    color,
    marginBottom,
    marginTop,
    alignSelf,
    fontWeight,
  })
);

const MiddleContainer = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 12,
  margin: 5,
});

interface ICircle {
  marginTop?: number;
  size: number;
}
const Circle = styled.Image<ICircle>(({ marginTop, size }) => ({
  width: size,
  height: size,
  borderRadius: size / 2,
  marginTop,
  margin: 10,
}));

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 400,
  },
});

const App = () => {
  const onPressFindPassword = useCallback(() => {
    console.log('findpassword!');
  }, []);

  const onPress = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Container>
        <StatusBar style="auto" />
        <LinearGradient
          colors={['#69a9f3', 'transparent']}
          style={styles.background}
        />
        <TitleContainer>
          <StyledText
            marginBottom={20}
            color="#fff"
            fontSize={30}
            fontWeight="bold"
          >
            Sign In
          </StyledText>
        </TitleContainer>

        <MainContainer>
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

          <MiddleContainer>
            <StyledText
              onPress={onPressFindPassword}
              color="#fff"
              fontSize={13}
            >
              Auto Login
            </StyledText>

            <StyledText
              onPress={onPressFindPassword}
              color="#fff"
              fontSize={13}
            >
              Forgot Password?
            </StyledText>
          </MiddleContainer>

          <SignupButton>로그인</SignupButton>

          <StyledText
            color="#fff"
            fontSize={13}
            alignSelf="center"
            marginTop={20}
          >
            - OR -
          </StyledText>

          <StyledText
            color="#fff"
            fontSize={13}
            alignSelf="center"
            marginTop={20}
          >
            Sign in with
          </StyledText>

          <SocialLoginContainer>
            <Circle size={45} source={icon.facebook} />
            <Circle size={45} source={icon.google} />
          </SocialLoginContainer>
        </MainContainer>

        <SignupContainer>
          <StyledText color="#fff" fontSize={16} marginBottom={35}>
            Dont have an Account?
          </StyledText>
          <StyledText
            color="#fff"
            fontSize={16}
            marginBottom={35}
            fontWeight="bold"
          >
            {' '}
            Sign up
          </StyledText>
        </SignupContainer>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default memo(App);
