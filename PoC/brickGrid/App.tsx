import styled from '@emotion/native';
import { memo, useEffect, useState } from 'react';
import { Dimensions, ScrollView, View } from 'react-native';

import { TYPE_DATA } from './src/typeData';

const { width } = Dimensions.get('screen');

const Container = styled.View({
  flex: 1,
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 30,
});

const RowContainer = styled.View({
  flexDirection: 'row',
});

const BrickBoxContainer = styled.View({
  height: (width / 3) * 2,
  flexDirection: 'row',
});

const SquareBox = styled.Image(() => ({
  width: width / 3,
  height: width / 3,
}));

const Left = styled.Image({
  width: (width / 3) * 2,
  height: (width / 3) * 2,
});

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
  const randomColor = require('randomcolor');

  const [data, setData] = useState<Item[]>(TYPE_DATA);

  useEffect(() => {}, []);

  return (
    <ScrollView>
      <Container>
        {data.map((item) => {
          if (item.type === 1) {
            return (
              <RowContainer key={item.id}>
                {item.image.map((one) => {
                  return <SquareBox key={one.id} source={{ uri: one.uri }} />;
                })}
              </RowContainer>
            );
          }

          if (item.type === 2) {
            return (
              <BrickBoxContainer key={item.id}>
                <Left
                  key={item.image[0].id}
                  source={{ uri: item.image[0].uri }}
                />

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
              </BrickBoxContainer>
            );
          }
        })}
      </Container>
    </ScrollView>
  );
};

export default memo(App);
