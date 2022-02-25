import React, { memo, useMemo } from 'react';
import styled from '@emotion/native';

import { useFetch } from '../hook/useFetch';

const Loading = styled.Text({
  fontSize: 18,
  color: '#2ecc71',
});

const StyledImage = styled.Image({
  width: 300,
  height: 300,
  backgroundColor: '#7f8c8d',
});

const Error = styled.Text({
  fontSize: 18,
  color: '#2ecc71',
});

const URL = 'https://dog.ceo/api/breeds/image/random';

const Dog = () => {
  const { data, error, isLoading } = useFetch(URL);

  const source = useMemo(() => {
    if (data?.message) {
      return { uri: data.message };
    }

    return { uri: '' };
  }, [data?.message]);

  return (
    <>
      {isLoading && <Loading>로딩중 ... </Loading>}
      {data && <StyledImage source={source} />}
      {error && <Error>{error.message}</Error>}
    </>
  );
};

export default memo(Dog);
