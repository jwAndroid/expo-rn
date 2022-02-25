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
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 60,
});

const StyledTextInput = styled.TextInput({
  flex: 1,
  paddingHorizontal: 20,
  textAlignVertical: 'center',
  fontSize: 16,
  color: '#303030',
});

const ResultContainer = styled.View({
  flex: 1,
  paddingHorizontal: 20,
  paddingVertical: 10,
});

interface IStyledText {
  isTitle?: boolean;
  isSearch?: boolean;
}

const StyledText = styled.Text<IStyledText>(({ isTitle, isSearch }) => ({
  color: isSearch ? 'blue' : '#303030',
  marginRight: 20,
  fontWeight: isTitle ? 'bold' : undefined,
  fontSize: isTitle ? 18 : 14,
}));

const SearchButton = styled.Text({
  color: '#3399ff',
  marginRight: 20,
  fontWeight: 'bold',
  fontSize: 16,
});

const TextContainer = styled.View({
  width: '100%',
  backgroundColor: '#fff',
  marginVertical: 10,
});

const Divider = styled.View({
  width: '100%',
  height: 1,
  marginTop: 10,
  backgroundColor: '#e0e0e0',
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

        <SearchButton onPress={onSubmitEditing}>검색</SearchButton>
      </InputContainer>

      <Divider />

      <ScrollView>
        <ResultContainer>
          {listData.map(({ address_name, place_name }, index) => {
            return (
              <TextContainer key={index}>
                <StyledText numberOfLines={1} isTitle>
                  {place_name}
                </StyledText>

                <StyledText numberOfLines={1}>{address_name}</StyledText>
              </TextContainer>
            );
          })}
        </ResultContainer>
      </ScrollView>
    </Container>
  );
};

export default memo(App);
