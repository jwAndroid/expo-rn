import { RouteProp } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';
import { memo, useMemo } from 'react';

import Mail from './components/Mail';

// 탭을 배치 했으니까
// 이 화면에 들어갈 스택 네비게이션을 배치

type RootStackParamList = {
  Mail: undefined;
};

export type MailScreenRouteProp = RouteProp<RootStackParamList, 'Mail'>;
export type MailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Mail'
>;

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

const MailScreen = () => {
  const screenOptions = useMemo<StackNavigationOptions>(
    () => ({
      headerStyle: {
        height: 50,
        backgroundColor: '#303030',
      },
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 16,
        justifyContent: 'center',
        alignItems: 'center',
      },
      headerTintColor: '#fff',
    }),
    []
  );

  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name="Mail" component={Mail} />
    </Navigator>
  );
};

export default memo(MailScreen);
