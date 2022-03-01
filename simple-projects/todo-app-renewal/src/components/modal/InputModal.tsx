import { FC, memo, useCallback } from 'react';
import styled from '@emotion/native';
import { Keyboard, Modal } from 'react-native';

const Container = styled.Pressable(() => ({
  flex: 1,
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: 10,
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
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
      hardwareAccelerated
      animationType="fade"
    >
      <Container onPress={onPress}>
        <StyledInput onSubmitEditing={onPress} />
      </Container>
    </Modal>
  );
};

export default memo(InputModal);
