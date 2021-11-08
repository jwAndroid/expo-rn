import React, { memo, useCallback, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import styled from '@emotion/native';
import axios from 'axios';

import { Header } from './src/env';

const Container = styled.View({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledInput = styled.TextInput({
  width: '94%',
  color: '#fff',
  textAlignVertical: 'center',
  backgroundColor: '#fff',
  borderWidth: 1,
});

const URL = `https://dapi.kakao.com/v2/local/search/keyword.json?query=${encodeURI(
  '수원'
)}&size=15&page=1`;

const App = () => {
  const [url, setUrl] = useState(URL);
  const [textValue, setTextValue] = useState('');

  const onChangeText = useCallback((text: string) => {
    setTextValue(text.trim());
  }, []);

  const onSubmitEditing = useCallback(async () => {
    // const result = await axios.get(URL, {
    //   headers: { Authorization: Header },
    // });

    console.log(url);
  }, []);

  return (
    <Container>
      <StatusBar style="auto" />

      <StyledInput
        value={textValue}
        placeholder="입력창"
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
      />
    </Container>
  );
};

export default memo(App);
