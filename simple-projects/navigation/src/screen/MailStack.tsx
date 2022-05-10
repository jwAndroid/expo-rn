import { memo, useMemo } from 'react';
import { RouteProp } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';
import { Mail, Search } from './components';

type RootStackParamList = {
  Mail: undefined;
  Search: undefined;
};

export type MailScreenRouteProp = RouteProp<RootStackParamList, 'Mail'>;
export type MailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Mail'
>;

export type SearchScreenRouteProp = RouteProp<RootStackParamList, 'Search'>;
export type SearchScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Search'
>;

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

const MailStack = () => {
  const screenOptions = useMemo<StackNavigationOptions>(
    () => ({
      headerShown: false,
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
      <Screen name="Search" component={Search} />
    </Navigator>
  );
};

export default memo(MailStack);
