import styled from '@emotion/native';
import { FC, memo } from 'react';

const Input = styled.TextInput(({ theme }) => ({
  width: '100%',
  height: 50,
  backgroundColor: '#303030',
}));

interface IStyledInput {}

const StyledInput: FC<IStyledInput> = () => {
  return <Input placeholder="입력해주세요" />;
};

export default memo(StyledInput);
