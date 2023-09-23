import {StyleProp, TextStyle} from 'react-native';

export interface HeaderProps extends StyleFnProps {
  text: string;
  center?: boolean;
  style?: StyleProp<TextStyle> | undefined;
  overLine?: boolean;
  top?: boolean;
  bottom?: boolean;
}

export interface StyleProps {
  header({
    center,
    top,
    bottom,
  }: {
    center?: boolean;
    top?: boolean;
    bottom?: boolean;
  }): StyleProp<TextStyle> | undefined;
}

export interface StyleFnProps {
  size: number;
  color?: string;
  start?: boolean;
  medium?: boolean;
  bold?: boolean;
  heavy?: boolean;
  semiBold?: boolean;
  family?: string;
  overLine?: boolean;
  underLine?: boolean;
}
