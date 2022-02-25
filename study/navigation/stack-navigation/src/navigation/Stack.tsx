import { memo, useMemo } from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { Home, Chat, List } from '../screen';

type RootStackParamList = {
  Home: undefined;
  Chat: undefined;
  List: undefined;
};

export type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;
export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type ChatScreenRouteProp = RouteProp<RootStackParamList, 'Chat'>;
export type ChatScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Chat'
>;

export type ListScreenRouteProp = RouteProp<RootStackParamList, 'List'>;
export type ListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'List'
>;

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

const Stack = () => {
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

  // 하나의 Stack 에 세개의 화면이 있는거고 , 그 화면들은 여기서 관리한다.
  // 실제 화면에서는 전환만 해주면 된다

  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name="Home" component={Home} />
      <Screen name="Chat" component={Chat} />
      <Screen name="List" component={List} />
    </Navigator>
  );
};

export default memo(Stack);
