import { FC, memo, useCallback, useState } from 'react';
import {
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from 'react-native';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';

const InputContainer = styled.View({
  width: '100%',
  paddingHorizontal: 5,
});

interface IInput {
  isFocus: boolean;
}

const Input = styled.TextInput<IInput>(({ theme, isFocus }) => ({
  width: '100%',
  paddingVertical: 8,
  paddingHorizontal: 16,
  borderRadius: 10,
  borderColor: isFocus ? theme.color.dynamic.focus : theme.color.dynamic.blur,
  borderWidth: 1,
  fontSize: 14,
  color: theme.text,
  includeFontPadding: false,
  fontFamily: theme.font.Cafe24Simplehae,
  backgroundColor: theme.color.white,
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

  const [isFocus, setIsFocus] = useState(false);

  const onFocus = useCallback(() => {
    setIsFocus(true);
  }, []);

  const onBlur = useCallback(() => {
    setIsFocus(false);
  }, []);

  return (
    <InputContainer>
      <Input
        value={value}
        isFocus={isFocus}
        onFocus={onFocus}
        onBlur={onBlur}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="done"
        placeholder={placeholder}
        placeholderTextColor={theme.color.gray}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
      />
    </InputContainer>
  );
};

export default memo(StyledInput);
