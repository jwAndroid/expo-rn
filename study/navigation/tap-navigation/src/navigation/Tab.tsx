import { FC, memo, useMemo } from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import { Mail, Profile, Settings } from '../screen/TabScreens';

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
      tabBarShowLabel: true,
      tabBarLabelPosition: 'below-icon',
      tabBarStyle: {
        backgroundColor: '#303030',
        borderTopWidth: 5,
      },
      tabBarActiveTintColor: '#fff',
      tabBarInactiveTintColor: '#5096f1',
    }),
    []
  );

  const mailOptions = useMemo<BottomTabNavigationOptions>(
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

  const prifleOptions = useMemo<BottomTabNavigationOptions>(
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
    <Navigator screenOptions={bottomNavigationOption}>
      <Screen name="Mail" component={Mail} options={mailOptions} />
      <Screen name="Profile" component={Profile} options={prifleOptions} />
      <Screen name="Settings" component={Settings} options={settingsOptions} />
    </Navigator>
  );
};

export default memo(Tab);
