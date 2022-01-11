import { memo, useCallback, useState } from 'react';
import styled from '@emotion/native';
import { StatusBar } from 'expo-status-bar';

const Container = styled.View({
  flex: 1,
  justifyContent: 'flex-end',
  alignItems: 'center',
  backgroundColor: '#303030',
});

const StyledInput = styled.TextInput({
  width: '100%',
  textAlignVertical: 'center',
  borderColor: '#fff',
  borderWidth: 1,
  color: '#000000',
});

const App = () => {
  const [textValue, setTextValue] = useState('');

  const onChangeText = useCallback((text: string) => {
    setTextValue(text.trim());
  }, []);

  return (
    <Container>
      <StatusBar style="auto" />

      <StyledInput
        value={textValue}
        placeholder="입력창"
        onChangeText={onChangeText}
        multiline
      />
    </Container>
  );
};

export default memo(App);
