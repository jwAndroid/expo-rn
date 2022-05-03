import { useTheme } from '@emotion/react';
import { FC, memo, ReactNode } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ISafeAreaContainer {
  children: ReactNode;
}

const SafeAreaContainer: FC<ISafeAreaContainer> = ({ children }) => {
  const theme = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.color.white }}>
      {children}
    </SafeAreaView>
  );
};

export default memo(SafeAreaContainer);
