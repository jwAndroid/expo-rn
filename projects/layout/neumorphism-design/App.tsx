import React, { FC, memo, ReactNode, useCallback } from 'react';
import {
  SafeAreaView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import styled from '@emotion/native';

const gray = '#91A1BD';

const Container = styled.View({
  flex: 1,
  backgroundColor: '#DEE9FD',
  alignItems: 'center',
});

const TopContainer = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const TopShadow = styled.View({
  shadowOffset: {
    width: -6,
    height: -6,
  },
  shadowOpacity: 1,
  shadowRadius: 6,
  shadowColor: '#FBFFFF',
});

const BottomShadow = styled.View({
  shadowOffset: {
    width: 6,
    height: 6,
  },
  shadowOpacity: 1,
  shadowRadius: 6,
  shadowColor: '#B7C4DD',
});

const SongArtContainer = styled.View({
  marginVertical: 32,
  alignItems: 'center',
});

const SongArtTitleContainer = styled.View({
  alignItems: 'center',
  marginTop: 40,
});

const SongArt = styled.Image({
  width: 220,
  height: 220,
  borderRadius: 150,
  borderColor: '#D7E1F3',
  borderWidth: 10,
  marginTop: 30,
});

const Playing = styled.Text({
  color: gray,
  fontWeight: '800',
});

const Title = styled.Text({
  fontSize: 30,
  color: '#6C7A93',
  fontWeight: '600',
});

const Artist = styled.Text({
  fontSize: 14,
  marginTop: 6,
  color: gray,
  fontWeight: '500',
});

const Time = styled.Text({
  fontSize: 10,
  color: gray,
  fontWeight: '700',
});

const TrackContainer = styled.View({
  marginTop: 32,
  marginBottom: 64,
});

const ControlContainer = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-around',
});

const styles = StyleSheet.create({
  inner: {
    backgroundColor: '#DEE9F7',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#E2ECFD',
    borderWidth: 1,
  },
});

interface IGeneral {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
  size: number;
}

const App = () => {
  const General: FC<IGeneral> = useCallback(({ children, size, style }) => {
    return (
      <TopShadow>
        <BottomShadow>
          <View
            style={[
              styles.inner,
              {
                width: size || 40,
                height: size || 40,
                borderRadius: size / 2 || 40 / 2,
              },
              style,
            ]}
          >
            {children}
          </View>
        </BottomShadow>
      </TopShadow>
    );
  }, []);

  return (
    <Container>
      <SafeAreaView style={{ alignSelf: 'stretch' }}>
        <View style={{ marginHorizontal: 32, marginTop: 32 }}>
          <TopContainer>
            <General size={48}>
              <AntDesign name="left" size={20} color={gray} />
            </General>

            <Playing>PLAYING NOW</Playing>

            <General size={48}>
              <Entypo name="menu" size={24} color={gray} />
            </General>
          </TopContainer>

          <SongArtContainer>
            <General size={150}>
              <SongArt source={require('./assets/flower.jpeg')} />
            </General>
          </SongArtContainer>

          <SongArtTitleContainer>
            <Title>Lost it</Title>
            <Artist>Flume ft. Vic Mensa</Artist>
          </SongArtTitleContainer>

          <TrackContainer>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Time>1:21</Time>
              <Time>3:46</Time>
            </View>

            <Slider
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="#8AAAFF"
              maximumTrackTintColor="#DAE6F4"
              thumbTintColor="#7B9BFF"
            />
          </TrackContainer>

          <ControlContainer>
            <General size={60}>
              <Ionicons name="play-back-outline" size={24} color={gray} />
            </General>

            <General
              size={60}
              style={{ backgroundColor: '#8AAAFF', borderColor: '#8AAAFF' }}
            >
              <Ionicons name="pause-outline" size={24} color="#7B9BFF" />
            </General>

            <General size={60}>
              <Ionicons name="play-forward-outline" size={24} color={gray} />
            </General>
          </ControlContainer>
        </View>
      </SafeAreaView>
    </Container>
  );
};

export default memo(App);
