import {StyleProp, ViewStyle} from 'react-native';

export interface IconProps extends StyleFnProps {
  name: string;
  width: number | string;
  height: number | string;
  color: string;
  containerStyle?: StyleProp<ViewStyle> | undefined;
  style?: StyleProp<ViewStyle> | undefined;
}

export interface StyleProps {
  container: object;
}

export interface StyleFnProps {
  backgroundColor?: string;
}
