import React, { memo, useCallback, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import styled from '@emotion/native';
import axios from 'axios';

import { Header } from './src/env';

// doc : https://developers.kakao.com/docs/latest/ko/local/dev-guide#search-by-keyword

const Container = styled.View({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledInput = styled.TextInput({
  width: '94%',
  color: '#303030',
  textAlignVertical: 'center',
  borderWidth: 1,
  padding: 7,
});

const App = () => {
  const [value, setValue] = useState('');

  const onChangeText = useCallback((text: string) => {
    setValue(text.trim());
  }, []);

  const onSubmitEditing = useCallback(async () => {
    const URL = `https://dapi.kakao.com/v2/local/search/keyword.json?query=${encodeURI(
      value
    )}&size=15&page=1`;

    const result = await axios.get(URL, {
      headers: { Authorization: Header },
    });

    console.log(result);
  }, [value]);

  return (
    <Container>
      <StatusBar style="auto" />

      <StyledInput
        value={value}
        placeholder="지역 입력"
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
      />
    </Container>
  );
};

export default memo(App);
