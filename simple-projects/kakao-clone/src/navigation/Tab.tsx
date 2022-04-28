import { memo, useMemo } from 'react';
import { Image, Dimensions } from 'react-native';
import { useTheme } from '@emotion/react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import { Settings, Users, ChatList, Shopping, View } from '../screen';

const DEVICE_HEIGHT = Dimensions.get('window').height;

const { Navigator, Screen } = createBottomTabNavigator();

const Tab = () => {
  const theme = useTheme();

  const bottomNavigationOption = useMemo<BottomTabNavigationOptions>(
    () => ({
      tabBarShowLabel: false,
      tabBarStyle: {
        height: DEVICE_HEIGHT / 14,
        backgroundColor: theme.color.thickWhite,
      },
      tabBarActiveTintColor: theme.color.dynamic.active,
      tabBarInactiveTintColor: theme.color.black,
      headerShown: false,
    }),
    [theme]
  );

  const usersOptions = useMemo<BottomTabNavigationOptions>(
    () => ({
      tabBarItemStyle: {
        justifyContent: 'center',
      },
      tabBarIcon: ({ color, size, focused }) => {
        return (
          <Image
            source={!focused ? theme.icon.users : theme.icon.usersfill}
            style={{ width: size, height: size, tintColor: color }}
          />
        );
      },
    }),
    [theme]
  );

  const chatListOptions = useMemo<BottomTabNavigationOptions>(
    () => ({
      tabBarItemStyle: {
        justifyContent: 'center',
      },
      tabBarIcon: ({ color, size, focused }) => {
        return (
          <Image
            source={!focused ? theme.icon.chat : theme.icon.chatfill}
            style={{ width: size, height: size, tintColor: color }}
          />
        );
      },
    }),
    [theme]
  );

  const viewOptions = useMemo<BottomTabNavigationOptions>(
    () => ({
      tabBarItemStyle: {
        justifyContent: 'center',
      },
      tabBarIcon: ({ color, size, focused }) => {
        return (
          <Image
            source={!focused ? theme.icon.view : theme.icon.viewfill}
            style={{ width: size, height: size, tintColor: color }}
          />
        );
      },
    }),
    [theme]
  );

  const shoppingOptions = useMemo<BottomTabNavigationOptions>(
    () => ({
      tabBarItemStyle: {
        justifyContent: 'center',
      },
      tabBarIcon: ({ color, size, focused }) => {
        return (
          <Image
            source={!focused ? theme.icon.shopping : theme.icon.shoppingfill}
            style={{ width: size, height: size, tintColor: color }}
          />
        );
      },
    }),
    [theme]
  );

  const settingsOptions = useMemo<BottomTabNavigationOptions>(
    () => ({
      tabBarItemStyle: {
        justifyContent: 'center',
      },
      tabBarIcon: ({ color, size, focused }) => {
        return (
          <Image
            source={!focused ? theme.icon.settings : theme.icon.settingsfill}
            style={{ width: size, height: size, tintColor: color }}
          />
        );
      },
    }),
    [theme]
  );

  return (
    <Navigator screenOptions={bottomNavigationOption}>
      <Screen name="Users" component={Users} options={usersOptions} />
      <Screen name="ChatList" component={ChatList} options={chatListOptions} />
      <Screen name="View" component={View} options={viewOptions} />
      <Screen name="Shopping" component={Shopping} options={shoppingOptions} />
      <Screen name="Settings" component={Settings} options={settingsOptions} />
    </Navigator>
  );
};

export default memo(Tab);
