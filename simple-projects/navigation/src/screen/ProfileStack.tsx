import { memo, useMemo } from 'react';
import { RouteProp } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';

import { Profile } from './components';

type RootStackParamList = {
  Profile: undefined;
};

export type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;
export type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Profile'
>;

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

const ProfileStack = () => {
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
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
};

export default memo(ProfileStack);
