import { memo, useEffect, useMemo, useState } from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import { MailStack, ProfileStack, SettingsStack } from '../screen';

const { Navigator, Screen } = createBottomTabNavigator();

const Tab = () => {
  const [isTabPress, setIsTabPress] = useState(false);

  const screenOptions = useMemo<BottomTabNavigationOptions>(
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
      tabBarHideOnKeyboard: true,
    }),
    []
  );

  useEffect(() => {
    if (isTabPress) {
      const timeout = setTimeout(() => {
        setIsTabPress(false);
      }, 500);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isTabPress]);

  return (
    <Navigator screenOptions={screenOptions}>
      <Screen
        name="MailStack"
        component={MailStack}
        options={({ route }) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? 'Mail';

          return {
            tabBarStyle: {
              display: routeName === 'Mail' ? 'flex' : 'none',
              height: 60,
              backgroundColor: '#303030',
            },
            tabBarIconStyle: {
              display: 'none',
            },
            tabBarLabel: '메일',
          };
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
          },
        }}
      />

      <Screen
        name="ProfileStack"
        component={ProfileStack}
        options={({ route }) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? 'Profile';

          return {
            tabBarStyle: {
              display: routeName === 'Profile' ? 'flex' : 'none',
              height: 60,
              backgroundColor: '#303030',
            },
            tabBarIconStyle: {
              display: 'none',
            },
            tabBarLabel: '프로필',
          };
        }}
      />

      <Screen
        name="SettingsStack"
        component={SettingsStack}
        options={({ route }) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? 'Settings';

          return {
            tabBarStyle: {
              display: routeName === 'Settings' ? 'flex' : 'none',
              height: 60,
              backgroundColor: '#303030',
            },
            tabBarIconStyle: {
              display: 'none',
            },
            tabBarLabel: '세팅',
          };
        }}
      />
    </Navigator>
  );
};

export default memo(Tab);
