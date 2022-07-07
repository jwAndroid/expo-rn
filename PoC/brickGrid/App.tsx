import styled from '@emotion/native';
import { StatusBar } from 'expo-status-bar';
import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import {
  Dimensions,
  ScrollView,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from 'react-native';

import { TYPE_DATA } from './src/typeData';

const { width } = Dimensions.get('screen');

const Container = styled.View({
  flex: 1,
  flexDirection: 'row',
  flexWrap: 'wrap',
});

const Header = styled.View({
  width: '100%',
  height: 70,
  paddingLeft: 10,
  justifyContent: 'center',
  position: 'relative',
  backgroundColor: 'orange',
});

const StyledText = styled.Text({
  fontSize: 20,
  color: 'white',
  fontWeight: 'bold',
});

const RowContainer = styled.View({
  flexDirection: 'row',
  marginVertical: 1,
});

const BrickBoxContainer = styled.View({
  height: (width / 3) * 2,
  flexDirection: 'row',
});

interface ISquareBox {
  isMarginHorizontal?: boolean;
  isMarginBottom?: boolean;
}

const SquareBox = styled.Image<ISquareBox>(
  ({ isMarginHorizontal, isMarginBottom }) => ({
    width: width / 3,
    height: width / 3,
    marginHorizontal: isMarginHorizontal ? 1 : undefined,
    marginBottom: isMarginBottom ? 1 : undefined,
  })
);

interface IBrickBox {
  isMarginRight?: boolean;
  isMarginLeft?: boolean;
}

const BrickBox = styled.Image<IBrickBox>(({ isMarginRight, isMarginLeft }) => ({
  width: (width / 3) * 2,
  height: (width / 3) * 2,
  marginRight: isMarginRight ? 1 : undefined,
  marginLeft: isMarginLeft ? 1 : undefined,
}));

interface IImage {
  id: number;
  uri: string;
}
interface Item {
  id: number;
  type: number;
  image: IImage[];
}

const App = () => {
  const [data, setData] = useState<Item[]>([]);

  const contentContainerStyle = useMemo<StyleProp<ViewStyle>>(() => {
    return {
      marginTop: 20,
    };
  }, []);

  useEffect(() => {
    setData(TYPE_DATA);
  }, []);

  return (
    <ScrollView
      contentContainerStyle={contentContainerStyle}
      showsVerticalScrollIndicator={false}
      stickyHeaderIndices={[0, 1]}
    >
      <StatusBar backgroundColor="orange" style="light" />

      <Header>
        <StyledText>Brick Grid View</StyledText>
      </Header>

      <Container>
        {data.map((item) => {
          if (item.type === 1) {
            return (
              <RowContainer key={item.id}>
                {item.image.map((one, index) => {
                  if (index === 1) {
                    return (
                      <SquareBox
                        isMarginHorizontal
                        key={one.id}
                        source={{ uri: one.uri }}
                      />
                    );
                  }
                  return <SquareBox key={one.id} source={{ uri: one.uri }} />;
                })}
              </RowContainer>
            );
          }

          if (item.type === 2) {
            return (
              <BrickBoxContainer key={item.id}>
                <BrickBox
                  isMarginRight
                  key={item.image[0].id}
                  source={{ uri: item.image[0].uri }}
                />

                <View>
                  <SquareBox
                    isMarginBottom
                    key={item.image[1].id}
                    source={{ uri: item.image[1].uri }}
                  />

                  <SquareBox
                    key={item.image[2].id}
                    source={{ uri: item.image[2].uri }}
                  />
                </View>
              </BrickBoxContainer>
            );
          }

          if (item.type === 3) {
            return (
              <BrickBoxContainer key={item.id}>
                <View>
                  <SquareBox
                    key={item.image[1].id}
                    source={{ uri: item.image[1].uri }}
                  />

                  <SquareBox
                    key={item.image[2].id}
                    source={{ uri: item.image[2].uri }}
                  />
                </View>

                <BrickBox
                  isMarginLeft
                  key={item.image[0].id}
                  source={{ uri: item.image[0].uri }}
                />
              </BrickBoxContainer>
            );
          }
        })}
      </Container>
    </ScrollView>
  );
};

export default memo(App);
