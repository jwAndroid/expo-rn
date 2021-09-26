import React, { memo } from 'react';
import { StatusBar } from 'expo-status-bar';
import styled from '@emotion/native';

import {
  ChargeButton,
  Contents,
  ImageContent,
  SubContents,
} from './src/components';

const Container = styled.View({
  flex: 1,
});

const TopContainer = styled.View({
  flex: 1,
  width: '100%',
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: '#303030',
});

const TopContainerItem = styled.View({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  borderTopLeftRadius: 350,
  backgroundColor: '#505050',
});

const ContentsContaner = styled.View({
  position: 'absolute',
  top: '25%',
  left: 0,
  right: 0,
  bottom: 0,
  borderTopRightRadius: 30,
  borderTopLeftRadius: 30,
  backgroundColor: '#303050',
});

const ContentsTitle = styled.View({
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  borderTopRightRadius: 30,
  borderTopLeftRadius: 30,
});

const ContentsSubTitle = styled.View({
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

const ContentsMainContent = styled.View({
  width: '100%',
  flexDirection: 'row',
  marginTop: 15,
  marginBottom: 8,
});

const NavigationContainer = styled.View({
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
  borderTopRightRadius: 20,
  borderTopLeftRadius: 20,
  paddingVertical: 15,
  backgroundColor: '#606060',
});

interface ICircle {
  marginTop?: number;
  width: number;
  height: number;
}
const Circle = styled.Image<ICircle>(({ marginTop, width, height }) => ({
  width,
  height,
  borderRadius: width / 2,
  marginTop,
}));

const App = () => {
  return (
    <Container>
      <StatusBar style="auto" />

      <TopContainer>
        <TopContainerItem />

        <Circle
          width={70}
          height={70}
          marginTop={80}
          source={require('./assets/logo.png')}
        />
      </TopContainer>

      <ContentsContaner>
        <ContentsTitle>
          <Contents content="JW React-practice" />
          <Contents content="=" />
        </ContentsTitle>

        <ContentsSubTitle>
          <SubContents content="react-native with expo" />
          <SubContents content="1 hour ago" />
        </ContentsSubTitle>

        <ContentsMainContent>
          <ImageContent />
        </ContentsMainContent>

        <ChargeButton />
      </ContentsContaner>

      <NavigationContainer>
        <Circle width={50} height={50} source={require('./assets/logo.png')} />
        <Circle width={50} height={50} source={require('./assets/axios.png')} />
        <Circle width={50} height={50} source={require('./assets/hooks.png')} />
      </NavigationContainer>
    </Container>
  );
};

export default memo(App);
