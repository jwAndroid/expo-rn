import { FC, memo, useMemo } from 'react';
import { GestureResponderEvent, Modal } from 'react-native';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';

import StyledText from './StyledText';
import Divider from './Divider';

const Container = styled.Pressable({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: 30,
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
});

const TextContainer = styled.View(({ theme }) => ({
  width: '100%',
  paddingVertical: 25,
  paddingHorizontal: 30,
  justifyContent: 'center',
  alignItems: 'center',
  borderTopEndRadius: 20,
  borderTopLeftRadius: 20,
  backgroundColor: theme.color.grayWhite,
}));

const ButtonContainer = styled.View(({ theme }) => ({
  width: '100%',
  flexDirection: 'row',
  borderBottomEndRadius: 20,
  borderBottomLeftRadius: 20,
  backgroundColor: theme.color.grayWhite,
}));

const StyledButton = styled.Pressable(() => ({
  flex: 1,
  paddingVertical: 15,
  paddingHorizontal: 25,
  justifyContent: 'center',
  alignItems: 'center',
}));

const ModalText = styled.Text(({ theme }) => ({
  fontFamily: theme.font.YoonGothicRegular,
  includeFontPadding: false,
  textAlign: 'center',
  fontSize: 14,
  color: theme.color.black,
}));

interface ILeaveModal {
  isOpen: boolean;
  onClose: () => void;
  onExit: (event: GestureResponderEvent) => void;
}

const LeaveModal: FC<ILeaveModal> = ({ isOpen, onClose, onExit }) => {
  const theme = useTheme();

  const notification = useMemo(() => {
    return '채팅방에서 나가시겠습니까?\n나가기를 하면 대화내용이 모두 삭제되고\n채팅목록에서도 삭제됩니다.';
  }, []);

  return (
    <Modal
      transparent
      visible={isOpen}
      onDismiss={onClose}
      animationType="fade"
    >
      <Container>
        <TextContainer>
          <ModalText>{notification}</ModalText>
        </TextContainer>

        <Divider />

        <ButtonContainer>
          <StyledButton>
            <StyledText fontSize={17} color={theme.color.systemBlue} isBold>
              아니요
            </StyledText>
          </StyledButton>

          <Divider isVertical />

          <StyledButton>
            <StyledText fontSize={17} color={theme.color.systemBlue} isBold>
              예
            </StyledText>
          </StyledButton>
        </ButtonContainer>
      </Container>
    </Modal>
  );
};

export default memo(LeaveModal);
