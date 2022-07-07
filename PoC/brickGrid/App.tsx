import styled from '@emotion/native';
import { memo, useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

import { TYPE_DATA } from './src/typeData';

const { width, height } = Dimensions.get('screen');

const Container = styled.View({
  flex: 1,
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 30,
});

interface BoxColor {
  backgroundColor: string;
}

const OneTypeContainer = styled.View({
  width: '100%',
  height: width / 3,
  backgroundColor: 'gray',
});

const TowTypeContainer = styled.View({
  width: '100%',
  height: (width / 3) * 2,
  flexDirection: 'row',
  backgroundColor: 'orange',
});

const TypeLeftContainer = styled.View({
  width: (width / 3) * 2,
  height: (width / 3) * 2,
  backgroundColor: 'blue',
});

const TypeRightContainer = styled.View({
  width: width / 3,
  height: (width / 3) * 2,
  backgroundColor: 'green',
});

const SquareBox = styled.View<BoxColor>(({ backgroundColor }) => ({
  width: width / 3,
  height: width / 3,
  backgroundColor,
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
  const randomColor = require('randomcolor');

  const [data, setData] = useState<Item[]>(TYPE_DATA);

  useEffect(() => {}, []);

  return (
    <Container>
      <OneTypeContainer>
        <SquareBox backgroundColor={randomColor()} />
      </OneTypeContainer>

      <TowTypeContainer>
        <TypeLeftContainer />

        <TypeRightContainer />
      </TowTypeContainer>
    </Container>
  );
};

export default memo(App);
