import { memo } from 'react';
import styled from '@emotion/native';

const Container = styled.View(({ theme }) => ({
  width: '100%',
  height: 1,
  backgroundColor: theme.color.thickBlack,
}));

const Divider = () => {
  return <Container />;
};

export default memo(Divider);
