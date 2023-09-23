import {StackNavigationProp} from '@react-navigation/stack';
import {ImageStyle, StyleProp, TextStyle, ViewStyle} from 'react-native';
import {StackNavigatorList} from '../../navigation/types';

export interface DefaultTemplateProps extends StyleFnProps {
  back?: boolean;
  header?: string;
  bell?: boolean;
  space?: boolean;
  scroll?: boolean;
  children?: React.ReactNode;
  color?: Array<string>;
  loading?: boolean;
  indicatorLoading?: boolean;
  backIconColor?: string;
  customBackPress?(): void | undefined;
}

export interface StyleProps {
  container: StyleProp<ViewStyle> | undefined;
  subContainer: StyleProp<ImageStyle> | undefined;
  headerContainer: StyleProp<ViewStyle> | undefined;
  addressContainer: StyleProp<ViewStyle> | undefined;
  addressHeader: StyleProp<ViewStyle> | undefined;
  header: StyleProp<TextStyle> | undefined;
  icon: StyleProp<ViewStyle> | undefined;
  top: StyleProp<ViewStyle> | undefined;
  loading: StyleProp<ViewStyle> | undefined;
  footerContainer: StyleProp<ViewStyle> | undefined;
  footerButton: StyleProp<ViewStyle> | undefined;
  notificationContainer: StyleProp<ViewStyle> | undefined;
  userContainer: StyleProp<ViewStyle> | undefined;
  circle: StyleProp<ViewStyle> | undefined;
}

export interface StyleFnProps {
  whiteBackground?: boolean;
  transBackground?: boolean;
  topBackgroundColor?: string;
  topHeight?: number;
}

type ScreenProp = StackNavigationProp<StackNavigatorList>;

interface OpenFirstLaunchType {
  navigation: ScreenProp;
}

export interface ActionProps {
  openFirstLaunch(params: OpenFirstLaunchType): void;
}
