import React from 'react';
import {I18nManager} from 'react-native';
import {SvgProps, SvgXml} from 'react-native-svg';
import colors from './colors';
import Bottom from '../assets/icons/bottom.svg';
import Checkmark from '../assets/icons/checkmark.svg';
import Info from '../assets/icons/info.svg';
import ToastError from '../assets/icons/toastError.svg';
import ToastSuccess from '../assets/icons/toastSuccess.svg';
import Home from '../assets/icons/home.svg';
import HomeOutline from '../assets/icons/homeOutline.svg';
import Left from '../assets/icons/left.svg';
import Notification from '../assets/icons/notification.svg';
import Filter from '../assets/icons/filter.svg';
import Add from '../assets/icons/add.svg';
import Edit from '../assets/icons/edit.svg';
import Logo from '../assets/icons/logo.svg';
import Email from '../assets/icons/email.svg';
import Lock from '../assets/icons/lock.svg';
import UserLocation from '../assets/icons/userLocation.svg';
import Basket from '../assets/icons/basket.svg';
import BasketOutline from '../assets/icons/basketOutline.svg';
import Favorite from '../assets/icons/favorite.svg';
import FavoriteOutline from '../assets/icons/favoriteOutline.svg';
import Products from '../assets/icons/products.svg';
import ProductsOutline from '../assets/icons/productsOutline.svg';
import Heart from '../assets/icons/heart.svg';
import HeartOutline from '../assets/icons/heartOutline.svg';
import Shop from '../assets/icons/shop.svg';
import ShopOutline from '../assets/icons/shopOutline.svg';
import EmptyCard from '../assets/icons/emptyCard.svg';
import EmptyFavorite from '../assets/icons/emptyFavorite.svg';

const icons: {[key: string]: React.FC<SvgProps>} = {
  Bottom,
  Checkmark,
  Info,
  ToastError,
  ToastSuccess,
  Home,
  HomeOutline,
  Left,
  Notification,
  Filter,
  Add,
  Edit,
  Logo,
  Email,
  Lock,
  UserLocation,
  Basket,
  BasketOutline,
  Favorite,
  FavoriteOutline,
  Products,
  ProductsOutline,
  Heart,
  HeartOutline,
  Shop,
  ShopOutline,
  EmptyCard,
  EmptyFavorite,
};

const nonFlip: {[key: string]: string} = {};

interface IconProps {
  name: string;
  color: string;
  width?: string | number;
  height?: string | number;
}

const icon = ({
  name,
  color,
  width = '24',
  height = '24',
  ...props
}: IconProps) => {
  let colorValue = color;

  if (colorValue === undefined) {
    colorValue = colors.quickSilver;
  }

  const allIcons = icons;

  const Icon = allIcons[name];
  return (
    <SvgXml
      width={width}
      height={height}
      xml={Icon.toString()}
      color={color}
      style={{
        transform: [
          {scaleX: nonFlip[name] === undefined && I18nManager.isRTL ? -1 : 1},
        ],
      }}
      {...props}
    />
  );
};

export default icon;
