import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import colors from '../../../themes/colors';

export interface StyleProps {
  container: StyleProp<ViewStyle> | undefined;
  checkBox: StyleProp<ViewStyle> | undefined;
  checkBoxActive: StyleProp<ViewStyle> | undefined;
  linear: StyleProp<ViewStyle> | undefined;
  header: StyleProp<TextStyle> | undefined;
}

export interface CheckBoxProps {
  value?: boolean;
  color?: string | Array<string>;
  iconColor?: colors;
  disabled?: boolean;
  onChange?(value: boolean): void;
  style?: StyleProp<ViewStyle> | undefined;
  label?: string;
  labelSize?: number;
}
