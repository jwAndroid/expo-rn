import { FC, memo, useCallback } from 'react';
import { Keyboard, KeyboardAvoidingView, Modal } from 'react-native';
import styled from '@emotion/native';

import { StyledInput } from '../input';

const Container = styled.Pressable(() => ({
  padding: 10,
  backgroundColor: 'red',
}));

interface IInputModal {
  isOpen: boolean;
  onClose: () => void;
}

const InputModal: FC<IInputModal> = ({ isOpen, onClose }) => {
  const onPress = useCallback(() => {
    Keyboard.dismiss();

    onClose();
  }, [onClose]);

  return (
    <Modal
      transparent
      visible={isOpen}
      onDismiss={onClose}
      animationType="none"
    >
      <Container onPress={onPress}>
        <KeyboardAvoidingView behavior="padding">
          <StyledInput />
        </KeyboardAvoidingView>
      </Container>
    </Modal>
  );
};

export default memo(InputModal);
