import React, { memo } from 'react';
import { StatusBar } from 'expo-status-bar';
import styled from '@emotion/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { key } from './src/key';

// doc : https://medium.com/unitechie/react-native-and-google-places-api-7f2d4f8fbb92

const Container = styled.View({
  flex: 1,
  marginTop: 50,
});

const App = () => {
  return (
    <Container>
      <StatusBar style="auto" />

      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: key,
          language: 'ko',
        }}
      />
    </Container>
  );
};

export default memo(App);
