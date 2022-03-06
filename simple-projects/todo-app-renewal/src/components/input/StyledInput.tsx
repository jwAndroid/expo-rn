import { FC, memo } from 'react';
import styled from '@emotion/native';

const Input = styled.TextInput(({ theme }) => ({
  width: '100%',
  height: 50,
  backgroundColor: theme.color.gray,
}));

interface IStyledInput {}

const StyledInput: FC<IStyledInput> = () => {
  return <Input placeholder="입력해주세요" />;
};

export default memo(StyledInput);
