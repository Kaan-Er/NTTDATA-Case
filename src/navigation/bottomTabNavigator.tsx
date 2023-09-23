import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StyleProp, TextStyle} from 'react-native';
import Home from '../screens/Home';
import colors from '../themes/colors';
import Icon from '../components/atoms/Icon';
import {FontFamily} from '../configs/font';
import Products from '../screens/Products';
import Favorites from '../screens/Favorites';

const BottomTabNavigator = () => {
  const BottomTab = createBottomTabNavigator();
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
          backgroundColor: colors.white.default,
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
          tabBarLabel: 'Home',
          tabBarLabelStyle: fontFamilyStyle,
          tabBarIcon: ({focused}) => renderIcon({focused, icon: 'Home'}),
        }}
      />
      <BottomTab.Screen
        name="Products"
        component={Products}
        options={{
          tabBarLabel: 'Products',
          tabBarLabelStyle: fontFamilyStyle,
          tabBarIcon: ({focused}) => renderIcon({focused, icon: 'Products'}),
        }}
      />
      <BottomTab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favorites',
          tabBarLabelStyle: fontFamilyStyle,
          tabBarIcon: ({focused}) => renderIcon({focused, icon: 'Heart'}),
        }}
      />
      <BottomTab.Screen
        name="Basket"
        component={Products}
        options={{
          tabBarLabel: 'Basket',
          tabBarLabelStyle: fontFamilyStyle,
          tabBarIcon: ({focused}) => renderIcon({focused, icon: 'Basket'}),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
