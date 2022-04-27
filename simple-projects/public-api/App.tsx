import { memo, useCallback, useEffect, useState } from 'react';
import styled from '@emotion/native';
import {
  FlatList,
  ImageSourcePropType,
  ListRenderItem,
  Dimensions,
} from 'react-native';
import axios from 'axios';

import { FrameEntitiy } from './src/type';

const deviceWidth = Dimensions.get('window').width;

const Container = styled.View({
  flex: 1,
});

const StyledText = styled.Text({
  fontSize: 17,
});

const StyledImage = styled.Image<ImageSourcePropType>({
  width: deviceWidth,
  height: 250,
});

const App = () => {
  const [data, setData] = useState<FrameEntitiy[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get<FrameEntitiy[]>(
        'https://picsum.photos/v2/list?page=1'
      );

      setData(data);
    })();
  }, []);

  const keyExtractor = useCallback((item: FrameEntitiy) => `${item.id}`, []);

  const renderItem = useCallback<ListRenderItem<FrameEntitiy>>(({ item }) => {
    return (
      <>
        <StyledImage
          source={{
            uri: item.download_url,
          }}
          resizeMode="contain"
        />

        <StyledText>작가:{item.author}</StyledText>
      </>
    );
  }, []);

  return (
    <Container>
      <FlatList
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </Container>
  );
};

export default memo(App);
