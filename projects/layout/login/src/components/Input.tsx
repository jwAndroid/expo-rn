import styled from '@emotion/native';
import React, { FC, memo, useCallback, useEffect, useState } from 'react';
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
        width: 5,
        height: 5,
      },
      shadowOpacity: 0.1,
      shadowRadius: 8,
    },
    android: {
      elevation: 20,
    },
  }),
});

const ImageStyle = styled.Image({
  height: 20,
  width: 22,
  resizeMode: 'stretch',
  alignItems: 'center',
  marginLeft: 10,
});

const StyledInput = styled.TextInput({
  flex: 1,
  marginLeft: 10,
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
  const [email, setEmail] = useState('');

  useEffect(() => {
    console.log('`Start component`');

    return () => {
      console.log('`Remove component`');
    };
  }, []);

  const onChangeEmail = useCallback((email: string) => {
    setEmail(email);
    console.log(email);
  }, []);

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
          value={email}
          onChangeText={onChangeEmail}
        />
      </SectionStyle>
    </Container>
  );
};

export default memo(Input);
