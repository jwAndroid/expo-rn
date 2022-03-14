import { FC, memo } from 'react';
import { Modal } from 'react-native';
import styled from '@emotion/native';

import { StyledText } from '../text';

interface IDeleteModal {
  isOpen: boolean;
  onClose: () => void;
}

const Container = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

const DeleteModal: FC<IDeleteModal> = ({ isOpen, onClose }) => {
  return (
    <Modal
      transparent
      visible={isOpen}
      onDismiss={onClose}
      animationType="none"
    >
      <Container>
        <StyledText>y</StyledText>
      </Container>
    </Modal>
  );
};

export default memo(DeleteModal);
