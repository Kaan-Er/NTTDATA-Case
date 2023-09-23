import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {StackNavigatorList} from './types';
import BottomTabNavigator from './bottomTabNavigator';
import colors from '../themes/colors';

const stackNavigator = () => {
  const Stack = createStackNavigator<StackNavigatorList>();

  const horizontalAnimation: StackNavigationOptions = {
    cardStyle: {backgroundColor: colors.white.default},
    cardStyleInterpolator: ({current, layouts}) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.width, 0],
              }),
            },
          ],
        },
      };
    },
    gestureEnabled: false,
    header: () => null,
  };

  return (
    <Stack.Navigator screenOptions={horizontalAnimation}>
      <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

export default stackNavigator;
