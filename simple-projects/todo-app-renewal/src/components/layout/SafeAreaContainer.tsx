import { FC, memo, ReactNode } from 'react';
import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import styled from '@emotion/native';

interface ISafeAreaContainer {
  children: ReactNode;
}

const StyledSafeAreaView = styled.SafeAreaView({
  flex: 1,
  ...(Platform.OS === 'android'
    ? { marginTop: getStatusBarHeight() }
    : undefined),
});

const SafeAreaContainer: FC<ISafeAreaContainer> = ({ children }) => {
  return <StyledSafeAreaView>{children}</StyledSafeAreaView>;
};

export default memo(SafeAreaContainer);
