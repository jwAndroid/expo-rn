import React, { FC, memo } from 'react';
import styled from '@emotion/native';

const StyledText = styled.Text({
  fontSize: 16,
  color: '#0099ff',
  marginLeft: 30,
  marginRight: 30,
});

interface ISubContents {
  content: string;
}

const SubContents: FC<ISubContents> = ({ content }) => {
  return <StyledText>{content}</StyledText>;
};

export default memo(SubContents);
