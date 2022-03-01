import { FC, memo } from 'react';
import { Modal } from 'react-native';
import { StyledText } from '../text';

// 디자인 수정

// const Container = styled.Pressable(() => ({
//   padding: 10,
//   backgroundColor: '',
// }));

// const StyledInput = styled.TextInput(({ theme }) => ({
//   width: '100%',
//   borderWidth: 1,
//   borderColor: theme.color.black,
// }));

interface IInputModal {
  isOpen: boolean;
  onClose: () => void;
}

const InputModal: FC<IInputModal> = ({ isOpen, onClose }) => {
  // const [value, setValue] = useState('');

  // const onPress = useCallback(() => {
  //   Keyboard.dismiss();

  //   onClose();
  // }, [onClose]);

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
    >
      <StyledText>Modal</StyledText>
    </Modal>
  );
};

export default memo(InputModal);
