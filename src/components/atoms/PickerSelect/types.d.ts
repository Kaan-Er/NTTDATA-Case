import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface StyleProps {
  container: object;
  picker: object;
  inputAndroid({
    medium,
    bold,
    heavy,
    semiBold,
    family,
    fontSize,
  }: {
    medium?: boolean;
    bold?: boolean;
    heavy?: boolean;
    semiBold?: boolean;
    family?: string;
    fontSize?: number;
  }): TextStyle | undefined;
}

export interface StyleFnProps {
  backgroundColor?: string;
}

export interface PickerSelectProps extends StyleFnProps {
  items: Array<{label: string; value: string | number}>;
  fontSize?: number;
  value?: string | number;
  onChange(value: string, index: number): void;
  placeholder?: string;
  medium?: boolean;
  bold?: boolean;
  heavy?: boolean;
  disabled?: boolean;
  semiBold?: boolean;
  family?: string;
  style?: StyleProp<ViewStyle>;
}
