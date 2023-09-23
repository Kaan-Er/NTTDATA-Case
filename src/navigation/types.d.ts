import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {StackNavigationProp} from '@react-navigation/stack';

type ScreenProp = StackNavigationProp<StackNavigatorList> &
  BottomTabNavigationProp<BottomNavigatorList>;

export type StackNavigatorList = {
  BottomTab: {
    screen: keyof BottomNavigatorList;
  };
  Login: undefined;
};

export type BottomNavigatorList = {
  Home: undefined;
};
