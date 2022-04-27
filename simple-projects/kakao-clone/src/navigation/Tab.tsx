import { FC, memo, useMemo } from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import { Users, ChatList, Settings } from '../screen/TabScreens';
import Header from '../components/common/Header';

interface ITabIcon {
  name: any;
  size: number;
  color: string;
}

const TabIcon: FC<ITabIcon> = ({ name, size, color }) => (
  <MaterialIcons name={name} size={size} color={color} />
);

const { Navigator, Screen } = createBottomTabNavigator();

const Tab = () => {
  const bottomNavigationOption = useMemo<BottomTabNavigationOptions>(
    () => ({
      tabBarShowLabel: false,
      tabBarLabelPosition: 'below-icon',
      tabBarStyle: {
        height: 56,
        backgroundColor: '#303030',
      },
      tabBarActiveTintColor: '#000000',
      tabBarInactiveTintColor: '#5096f1',
      headerShown: false,
    }),
    []
  );

  const usersOptions = useMemo<BottomTabNavigationOptions>(
    () => ({
      tabBarIcon: ({ size, color, focused }) =>
        TabIcon({
          name: focused ? 'mail' : 'mail-outline',
          size,
          color,
        }),
      tabBarLabel: 'Inbox',
    }),
    []
  );

  const chatListOptions = useMemo<BottomTabNavigationOptions>(
    () => ({
      tabBarIcon: ({ size, color }) => TabIcon({ name: 'person', size, color }),
    }),
    []
  );

  const settingsOptions = useMemo<BottomTabNavigationOptions>(
    () => ({
      tabBarIcon: ({ size, color }) =>
        TabIcon({ name: 'settings', size, color }),
    }),
    []
  );

  return (
    <>
      <Header />

      <Navigator screenOptions={bottomNavigationOption}>
        <Screen name="Users" component={Users} options={usersOptions} />
        <Screen
          name="ChatList"
          component={ChatList}
          options={chatListOptions}
        />
        <Screen
          name="Settings"
          component={Settings}
          options={settingsOptions}
        />
      </Navigator>
    </>
  );
};

export default memo(Tab);
