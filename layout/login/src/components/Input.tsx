import styled from '@emotion/native';
import React, { FC, memo } from 'react';
import { KeyboardTypeOptions, Platform } from 'react-native';

const Container = styled.View({
  marginTop: 10,
});

const SectionStyle = styled.View({
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#6ca8f0',
  height: 50,
  borderRadius: 8,
  marginTop: 8,
  ...Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOffset: {
        width: 10,
        height: 10,
      },
      shadowOpacity: 0.2,
      shadowRadius: 10,
    },
    android: {
      elevation: 20,
    },
  }),
});

const ImageStyle = styled.Image({
  padding: 5,
  margin: 5,
  height: 20,
  width: 25,
  resizeMode: 'stretch',
  alignItems: 'center',
  marginLeft: 10,
});

const StyledInput = styled.TextInput({
  flex: 1,
  marginLeft: 5,
  color: '#fff',
});

const StyledText = styled.Text({
  fontSize: 16,
  color: '#fff',
});

interface IInput {
  title: string;
  placeholder: string;
  inputIcon: any;
  secureTextEntry: boolean;
  maxLength: number;
  keyboardType: KeyboardTypeOptions;
}

const Input: FC<IInput> = ({
  title,
  placeholder,
  inputIcon,
  secureTextEntry,
  maxLength,
  keyboardType = 'default',
}) => {
  return (
    <Container>
      <StyledText>{title}</StyledText>
      <SectionStyle>
        <ImageStyle source={inputIcon} />

        <StyledInput
          placeholder={placeholder}
          placeholderTextColor="#9abff6"
          underlineColorAndroid="transparent"
          returnKeyType="go"
          secureTextEntry={secureTextEntry}
          autoCorrect={false}
          maxLength={maxLength}
          keyboardType={keyboardType}
        />
      </SectionStyle>
    </Container>
  );
};

export default memo(Input);
