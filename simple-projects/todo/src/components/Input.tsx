import styled from '@emotion/native';
import { useTheme } from '@emotion/react';
import React, { FC, memo } from 'react';
import {
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from 'react-native';

const Container = styled.View({
  width: '100%',
  paddingHorizontal: 10,
  marginVertical: 10,
});

const StyledInput = styled.TextInput(({ theme }) => ({
  backgroundColor: theme.itemBackground,
  borderRadius: 10,
  fontSize: 20,
  color: theme.text,
  paddingVertical: 10,
  paddingHorizontal: 20,
}));

interface IInput {
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  onSubmitEditing: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => void;
}

const Input: FC<IInput> = ({
  value,
  placeholder,
  onChangeText,
  onSubmitEditing,
}) => {
  const theme = useTheme();

  return (
    <Container>
      <StyledInput
        value={value}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="done"
        placeholder={placeholder}
        placeholderTextColor={theme.text}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
      />
    </Container>
  );
};

export default memo(Input);
