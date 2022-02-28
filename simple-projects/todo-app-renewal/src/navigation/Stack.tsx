import { RouteProp } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import { memo } from 'react';

import { Main } from '../screen';

type RootStackParamList = {
  Main: undefined;
};

export type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Main'>;
export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Main'
>;

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

const Stack = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Main" component={Main} options={{ title: 'main' }} />
    </Navigator>
  );
};

export default memo(Stack);
