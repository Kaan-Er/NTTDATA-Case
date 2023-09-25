import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StyleProp, StyleSheet, TextStyle} from 'react-native';
import Home from '../screens/Home';
import colors from '../themes/colors';
import Icon from '../components/atoms/Icon';
import {FontFamily} from '../configs/font';
import Products from '../screens/Products';
import Favorites from '../screens/Favorites';
import Basket from '../screens/Basket';
import {selectUser} from '../redux/slices/user';
import {useSelector} from 'react-redux';

const BottomTabNavigator = () => {
  const BottomTab = createBottomTabNavigator();
  const insets = useSafeAreaInsets();
  const userStore = useSelector(selectUser);

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
        tabBarInactiveTintColor: colors.dimGray,
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
        component={Basket}
        options={{
          tabBarLabel: 'Basket',
          tabBarLabelStyle: fontFamilyStyle,
          tabBarIcon: ({focused}) => renderIcon({focused, icon: 'Basket'}),
          tabBarBadge:
            userStore.cart.length > 0
              ? userStore.cart.reduce(
                  (totalQuantity, item) => totalQuantity + item.quantity,
                  0,
                )
              : undefined,
          tabBarBadgeStyle: styles.badge,
        }}
      />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  badge: {
    backgroundColor: colors.primary,
    color: colors.white.default,
    fontSize: 10,
    fontWeight: '500',
    fontFamily: FontFamily,
    top: -4,
  },
});

export default BottomTabNavigator;
