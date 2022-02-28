import { FC, memo, ReactNode } from 'react';
import { SafeAreaView } from 'react-native';

interface ISafeAreaContainer {
  children: ReactNode;
}

const SafeAreaContainer: FC<ISafeAreaContainer> = ({ children }) => {
  return <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>;
};

export default memo(SafeAreaContainer);
