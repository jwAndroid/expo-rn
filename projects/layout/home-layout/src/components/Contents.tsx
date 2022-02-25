import React, { FC, memo } from 'react';
import styled from '@emotion/native';

const StyledText = styled.Text({
  fontSize: 24,
  paddingHorizontal: 30,
  paddingTop: 30,
  color: '#fff',
});

interface IContents {
  content: string;
}

const Contents: FC<IContents> = ({ content }) => {
  return <StyledText>{content}</StyledText>;
};

export default memo(Contents);
