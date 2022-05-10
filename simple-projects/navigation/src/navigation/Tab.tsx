import { memo, useMemo } from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import { MailScreen, Profile, Settings } from '../screen';

const { Navigator, Screen } = createBottomTabNavigator();

const Tab = () => {
  const bottomNavigationOption = useMemo<BottomTabNavigationOptions>(
    () => ({
      headerShown: false,
      tabBarLabelPosition: 'beside-icon',
      tabBarLabelStyle: {
        fontWeight: '700',
        fontSize: 15,
      },
      tabBarIconStyle: { display: 'none' },
      tabBarStyle: {
        height: 56,
        backgroundColor: '#303030',
      },
    }),
    []
  );

  const mailOptions = useMemo<BottomTabNavigationOptions>(
    () => ({
      tabBarLabel: '메일',
    }),
    []
  );

  const prifleOptions = useMemo<BottomTabNavigationOptions>(
    () => ({
      tabBarLabel: '프로필',
    }),
    []
  );

  const settingsOptions = useMemo<BottomTabNavigationOptions>(
    () => ({
      tabBarLabel: '세팅',
    }),
    []
  );

  return (
    <Navigator screenOptions={bottomNavigationOption}>
      <Screen name="MailScreen" component={MailScreen} options={mailOptions} />
      <Screen name="Profile" component={Profile} options={prifleOptions} />
      <Screen name="Settings" component={Settings} options={settingsOptions} />
    </Navigator>
  );
};

export default memo(Tab);
