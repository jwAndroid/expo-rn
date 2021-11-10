import React, { memo, useCallback, useMemo, useState } from 'react';
import { Keyboard, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styled from '@emotion/native';
import axios from 'axios';

import { key } from './src/key';

// doc : https://developers.kakao.com/docs/latest/ko/local/dev-guide#search-by-keyword

const Container = styled.View({
  flex: 1,
});

const InputContainer = styled.View({
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'center',
  marginTop: 60,
});

const StyledTextInput = styled.TextInput({
  width: '80%',
  color: '#303030',
  textAlignVertical: 'center',
});

const ResultContainer = styled.View({
  flex: 1,
  margin: 30,
});

const StyledText = styled.Text({
  color: '#000000',
});

const TextContainer = styled.View({
  width: '100%',
  backgroundColor: '#fff',
  marginTop: 8,
});

const Divider = styled.View({
  width: '100%',
  height: 1,
  marginTop: 10,
  backgroundColor: '#303030',
});

interface IItem {
  address_name: string;
  place_name: string;
}

const App = () => {
  const [listData, setListData] = useState<IItem[]>([]);
  const [value, setValue] = useState('');

  const Url = useMemo(
    () =>
      `https://dapi.kakao.com/v2/local/search/keyword.json?query=${encodeURI(
        value
      )}&size=15&page=1`,
    [value]
  );

  const onChangeText = useCallback((text: string) => {
    setValue(text.trim());
  }, []);

  const onSubmitEditing = useCallback(async () => {
    Keyboard.dismiss();

    const { data } = await axios.get(Url, {
      headers: { Authorization: key },
    });

    const result = data.documents.map(({ address_name, place_name }: IItem) => {
      return { address_name, place_name };
    });

    setListData(result);
  }, [Url]);

  return (
    <Container>
      <StatusBar style="auto" />

      <InputContainer>
        <StyledTextInput
          placeholder="지역 입력"
          value={value}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
        />
        <StyledText onPress={onSubmitEditing}>검색</StyledText>
      </InputContainer>

      <Divider />

      <ScrollView>
        <ResultContainer>
          {listData.map(({ address_name, place_name }) => {
            return (
              <TextContainer>
                <StyledText>{address_name}</StyledText>
                <StyledText>{place_name}</StyledText>
              </TextContainer>
            );
          })}
        </ResultContainer>
      </ScrollView>
    </Container>
  );
};

export default memo(App);
