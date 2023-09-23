import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface AlertBoxParams {
  title: string;
  description: string;
  confirmTitle: string;
  cancelTitle: string;
  onConfirmPress?: () => void;
  onCancelPress?: () => void;
}

export interface StyleFnProps {
  language?: string;
}

export interface ToastRefProps {
  open(params: ToastParams): any;
  close(params: ToastParams): any;
}

export interface StyleProps {
  footerContainer: StyleProp<ViewStyle> | undefined;
  footerText: StyleProp<TextStyle> | undefined;
  button: StyleProp<ViewStyle> | undefined;
  header: StyleProp<TextStyle> | undefined;
  container: StyleProp<ViewStyle> | undefined;
  buttonsContainer: StyleProp<ViewStyle> | undefined;
  animatedTime: (animatedTime: any) => StyleProp<ViewStyle> | undefined;
}

export declare namespace ToastLogin {
  let show: () => void;
  let hide: () => void;
}
