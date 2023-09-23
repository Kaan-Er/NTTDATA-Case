import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StyleProp, TextStyle} from 'react-native';
import Home from '../screens/Home';
import colors from '../themes/colors';
import Icon from '../components/atoms/Icon';
import {ScreenProp} from './types';
import {useSelector} from 'react-redux';
import LanType from '../assets/languages/lan';
import * as lan from '../assets/languages/lan.json';
import {selectUser} from '../redux/slices/user';
import {FontFamily} from '../configs/font';

const BottomTabNavigator = ({
  navigation,
  route,
}: {
  navigation: ScreenProp;
  route: any;
}) => {
  const BottomTab = createBottomTabNavigator();
  const userStore = useSelector(selectUser);
  const lang: LanType = lan[userStore.language];
  const insets = useSafeAreaInsets();

  const fontFamilyStyle: StyleProp<TextStyle> = {
    fontFamily: FontFamily,
    fontWeight: '500',
  };

  const renderIcon = ({focused, icon}: {focused: boolean; icon: string}) => {
    return (
      <Icon
        name={focused ? icon : `${icon}Outline`}
        width="24"
        height="24"
        color={focused ? colors.primary : colors.silverSand}
      />
    );
  };

  return (
    <BottomTab.Navigator
      screenOptions={{
        header: () => null,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.blackOlive,
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '500',
          fontFamily: FontFamily,
        },
        tabBarStyle: {
          position: 'absolute',
          height: 63 + insets.bottom,
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,
          elevation: 24,
          // borderTopLeftRadius: 30,
          // borderTopRightRadius: 30,
          backgroundColor: '#fff',
          bottom: 0,
          width: '100%',
          zIndex: 0,
        },
        tabBarItemStyle: {paddingVertical: 12},
      }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: lang.Home,
          tabBarLabelStyle: fontFamilyStyle,
          tabBarIcon: ({focused}) => renderIcon({focused, icon: 'Home'}),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
