import styled from '@emotion/native';
import { FC, memo, useCallback } from 'react';
import { Keyboard, KeyboardAvoidingView, Modal, Platform } from 'react-native';

const Container = styled.Pressable(() => ({
  padding: 10,
  backgroundColor: 'red',
}));

const StyledInput = styled.TextInput(({ theme }) => ({
  width: '100%',
  borderWidth: 1,
  borderColor: theme.color.black,
}));

interface IInputModal {
  isOpen: boolean;
  onClose: () => void;
}

const InputModal: FC<IInputModal> = ({ isOpen = true, onClose }) => {
  const onPress = useCallback(() => {
    Keyboard.dismiss();

    onClose();
  }, [onClose]);

  // const onSubmitEditing = useCallback(() => {
  //   onClose();
  // }, [onClose]);

  // const onChangeText = useCallback((text: string) => {
  //   setValue(text);
  // }, []);

  return (
    <Modal
      transparent
      visible={isOpen}
      onDismiss={onClose}
      animationType="none"
      style={{ width: '100%' }}
    >
      <Container onPress={onPress}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <StyledInput />
        </KeyboardAvoidingView>
      </Container>
    </Modal>
  );
};

export default memo(InputModal);
