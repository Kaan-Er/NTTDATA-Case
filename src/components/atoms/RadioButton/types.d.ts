import {StyleProp, ViewStyle} from 'react-native';

export interface StyleFnProps {
  color: string | string[];
  dotColor?: string;
}

export interface RadioButtonProps extends StyleFnProps {
  value?: boolean;
  onChange?(value: boolean): void;
  style?: StyleProp<ViewStyle> | undefined;
}

export interface StyleProps {
  container: StyleProp<ViewStyle> | undefined;
  radioButton: StyleProp<ViewStyle> | undefined;
  radioButtonActive: StyleProp<ViewStyle> | undefined;
  circle: StyleProp<ViewStyle> | undefined;
  linear: StyleProp<ViewStyle> | undefined;
}
