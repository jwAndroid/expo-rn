import { FC, memo, ReactNode } from 'react';
import styled from '@emotion/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

interface IContainer {
  paddingHorizontal?: number;
  marginTop: number;
}

const Container = styled.View<IContainer>(
  ({ paddingHorizontal, marginTop, theme }) => ({
    flex: 1,
    paddingHorizontal,
    marginTop,
    backgroundColor: theme.color.white,
  })
);

interface IBaseContainer {
  children: ReactNode;
  paddingHorizontal?: number;
  marginTop?: number;
}

const BaseContainer: FC<IBaseContainer> = ({
  children,
  paddingHorizontal = 0,
  marginTop = getStatusBarHeight(),
}) => {
  return (
    <Container paddingHorizontal={paddingHorizontal} marginTop={marginTop}>
      {children}
    </Container>
  );
};

export default memo(BaseContainer);
