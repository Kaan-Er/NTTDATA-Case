import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {StackNavigationProp} from '@react-navigation/stack';
import {ImageStyle, StyleProp, TextStyle, ViewStyle} from 'react-native';
import {BottomNavigatorList, StackNavigatorList} from '../../navigation/types';

export interface DefaultTemplateProps extends StyleFnProps {
  back?: boolean;
  header?: string;
  blur?: boolean;
  extraHeader?: string;
  bell?: boolean;
  space?: boolean;
  scrollRef?: any;
  search?: boolean;
  filter?: boolean;
  nestedScroll?: boolean;
  customHeader?: React.ReactNode;
  userHeader?: boolean;
  plus?: boolean;
  edit?: boolean;
  scroll?: boolean;
  switchButton?: boolean;
  children?: React.ReactNode;
  color?: Array<string>;
  loading?: boolean;
  indicatorLoading?: boolean;
  backgroundIcon?: string;
  backIconColor?: string;
  customBackPress?(): void | undefined;
  filterPress?(): void;
  switchPress?(): void;
  addPress?(): void;
  editPress?(): void;
}

export interface StyleProps {
  container: StyleProp<ViewStyle> | undefined;
  subContainer: StyleProp<ImageStyle> | undefined;
  top: StyleProp<ViewStyle> | undefined;
  space: StyleProp<TextStyle> | undefined;
  linear: StyleProp<ViewStyle> | undefined;
  button: StyleProp<ViewStyle> | undefined;
  headerBackground: StyleProp<ViewStyle> | undefined;
  bellButton: StyleProp<ViewStyle> | undefined;
  headerContainer: StyleProp<ViewStyle> | undefined;
  loading: StyleProp<ViewStyle> | undefined;
  blur: StyleProp<ViewStyle> | undefined;
  bottomCircle: StyleProp<ViewStyle> | undefined;
  topCircle: StyleProp<ViewStyle> | undefined;
  percentButton: StyleProp<ViewStyle> | undefined;
  plusButton: StyleProp<ViewStyle> | undefined;
  editButton: StyleProp<ViewStyle> | undefined;
  notificationContainer: StyleProp<ViewStyle> | undefined;
  circle: StyleProp<ViewStyle> | undefined;
  header: StyleProp<ViewStyle> | undefined;
  imageContainer: StyleProp<ViewStyle> | undefined;
  image: StyleProp<ViewStyle> | undefined;
}

export interface StyleFnProps {
  whiteBackground?: boolean;
  transBackground?: boolean;
  topBackgroundColor?: string;
  headerPosition?: 'left' | 'center' | 'right';
}

type ScreenProp = StackNavigationProp<StackNavigatorList> &
  BottomTabNavigationProp<BottomNavigatorList>;

interface OpenFirstLaunchType {
  navigation: ScreenProp;
}

export interface ActionProps {
  openFirstLaunch(params: OpenFirstLaunchType): void;
}
