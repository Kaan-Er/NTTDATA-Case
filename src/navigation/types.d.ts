import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {StackNavigationProp} from '@react-navigation/stack';
import {IProduct} from '../components/organisms/ProductCardList/types';

type ScreenProp = StackNavigationProp<StackNavigatorList> &
  BottomTabNavigationProp<BottomNavigatorList>;

export type StackNavigatorList = {
  BottomTab: {
    screen: keyof BottomNavigatorList;
  };
  Login: undefined;
  ProductDetails: {
    product: IProduct;
  };
};

export type BottomNavigatorList = {
  Home: undefined;
  Products: undefined;
};
