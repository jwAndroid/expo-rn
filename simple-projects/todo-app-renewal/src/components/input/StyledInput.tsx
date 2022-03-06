import { FC, memo } from 'react';
import styled from '@emotion/native';
import {
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from 'react-native';
import { useTheme } from '@emotion/react';

const InputContainer = styled.View({
  width: '100%',
  paddingHorizontal: 5,
});

const Input = styled.TextInput(({ theme }) => ({
  width: '100%',
  height: 50,
  borderRadius: 10,
  fontSize: 16,
  fontWeight: 'bold',
  color: theme.text,
  paddingVertical: 10,
  paddingHorizontal: 20,
  backgroundColor: theme.color.gray,
}));

interface IStyledInput {
  value: string;
  placeholder: string;
  onChangeText: ((text: string) => void) | undefined;
  onSubmitEditing: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => void;
}

const StyledInput: FC<IStyledInput> = ({
  value,
  placeholder,
  onChangeText,
  onSubmitEditing,
}) => {
  const theme = useTheme();

  return (
    <InputContainer>
      <Input
        value={value}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="done"
        placeholder={placeholder}
        placeholderTextColor={theme.text}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
      />
    </InputContainer>
  );
};

export default memo(StyledInput);
