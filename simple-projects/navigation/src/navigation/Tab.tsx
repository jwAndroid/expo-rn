import { memo, useMemo } from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import { MailStack, ProfileStack, SettingsStack } from '../screen';

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
      <Screen name="MailStack" component={MailStack} options={mailOptions} />

      <Screen
        name="ProfileStack"
        component={ProfileStack}
        options={prifleOptions}
      />

      <Screen
        name="SettingsStack"
        component={SettingsStack}
        options={settingsOptions}
      />
    </Navigator>
  );
};

export default memo(Tab);
