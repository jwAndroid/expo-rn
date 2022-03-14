import { FC, memo, useCallback, useState } from 'react';
import {
  GestureResponderEvent,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
  TouchableWithoutFeedback,
} from 'react-native';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';

const InputContainer = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 10,
});

interface IInput {
  isFocus: boolean;
}

const Input = styled.TextInput<IInput>(({ theme, isFocus }) => ({
  flex: 1,
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

const CancelIcon = styled.Image(({ theme }) => ({
  width: 24,
  height: 24,
  marginBottom: 2,
  marginHorizontal: 5,
  tintColor: theme.text,
}));

interface IStyledInput {
  value: string;
  placeholder: string;
  onChangeText: ((text: string) => void) | undefined;
  onSubmitEditing: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => void;
  onCancel: ((event: GestureResponderEvent) => void) | undefined;
}

const StyledInput: FC<IStyledInput> = ({
  value,
  placeholder,
  onCancel,
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

      <TouchableWithoutFeedback onPress={onCancel}>
        <CancelIcon source={theme.icon.cancel} />
      </TouchableWithoutFeedback>
    </InputContainer>
  );
};

export default memo(StyledInput);
