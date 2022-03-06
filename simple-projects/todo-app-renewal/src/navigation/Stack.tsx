import { RouteProp } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import { memo, useMemo } from 'react';

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
  const screenOptions = useMemo(() => ({ headerShown: false }), []);

  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name="Main" component={Main} />
    </Navigator>
  );
};

export default memo(Stack);
