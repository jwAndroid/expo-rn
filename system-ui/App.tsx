import { memo, useCallback, useEffect, useState } from 'react';
import styled from '@emotion/native';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as SystemUI from 'expo-system-ui';

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
  color: '#fff',
  padding: 5,
  marginBottom: 10,
});

const StyledText = styled.Text({
  fontSize: 18,
  color: '#fff',
  marginBottom: 30,
});

const App = () => {
  const [textValue, setTextValue] = useState('');
  // const [rootColor, setRootColor] = useState('');

  // useEffect(() => {
  //   const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
  //     console.log('Keyboard Shown');
  //   });
  //   const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
  //     console.log('Keyboard Hidden');
  //   });

  //   return () => {
  //     showSubscription.remove();
  //     hideSubscription.remove();
  //   };
  // });

  useEffect(() => {
    (async () => {
      const result = await SystemUI.getBackgroundColorAsync();

      console.log(result);
    })();
  }, []);

  const onChangeText = useCallback((text: string) => {
    setTextValue(text.trim());
  }, []);

  const onKeyPress = useCallback(() => {
    console.log(textValue);
  }, [textValue]);

  const onPressOutside = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  const onPress = useCallback(async () => {
    await SystemUI.setBackgroundColorAsync('#303030');

    console.log('설정완료');
  }, []);

  return (
    <TouchableWithoutFeedback onPress={onPressOutside}>
      <Container>
        <StatusBar style="auto" />

        <StyledText onPress={onPress}>SetRootViewColor</StyledText>

        <StyledInput
          value={textValue}
          placeholder="입력창"
          onChangeText={onChangeText}
          onKeyPress={onKeyPress}
          multiline
        />
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default memo(App);
