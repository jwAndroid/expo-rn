import { memo, useMemo } from 'react';
import { RouteProp } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';

import { Settings } from './components';

type RootStackParamList = {
  Settings: undefined;
};

export type SettingsScreenRouteProp = RouteProp<RootStackParamList, 'Settings'>;
export type SettingsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Settings'
>;

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

const SettingsStack = () => {
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
      <Screen name="Settings" component={Settings} />
    </Navigator>
  );
};

export default memo(SettingsStack);
