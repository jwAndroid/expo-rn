import { FC, memo, ReactNode } from 'react';
import styled from '@emotion/native';

interface IContainer {
  paddingHorizontal?: number;
  marginTop: number;
}

const Container = styled.View<IContainer>(
  ({ paddingHorizontal, marginTop, theme }) => ({
    flex: 1,
    paddingHorizontal,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop,
    backgroundColor: theme.color.gray,
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
  marginTop = 0,
}) => {
  return (
    <Container paddingHorizontal={paddingHorizontal} marginTop={marginTop}>
      {children}
    </Container>
  );
};

export default memo(BaseContainer);
