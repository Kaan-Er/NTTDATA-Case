import {Platform} from 'react-native';
import {StyleFnProps, StyleProps} from './types';

export default ({
  size,
  color,
  start,
  medium,
  bold,
  heavy,
  semiBold,
  family,
  overLine,
  underLine,
}: StyleFnProps): StyleProps => ({
  header: ({center, top, bottom}) => {
    let fontFamily = `${family}-Regular`;
    let fontWeight:
      | 'normal'
      | 'bold'
      | '100'
      | '200'
      | '300'
      | '400'
      | '500'
      | '600'
      | '700'
      | '800'
      | '900'
      | undefined;
    let textDecorationLine:
      | 'none'
      | 'underline'
      | 'line-through'
      | 'underline line-through'
      | undefined;
    let textAlignVertical: 'auto' | 'top' | 'bottom' | 'center' | undefined;
    let textAlign: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;

    if (semiBold) {
      fontFamily = `${family}-Semibold`;
    }
    if (heavy) {
      fontFamily = `${family}-Heavy`;
    }
    if (medium) {
      fontFamily = `${family}-Medium`;
    }
    if (bold) {
      fontFamily = `${family}-Bold`;
    }

    if (Platform.OS === 'ios' && medium) {
      fontWeight = '500';
    }
    if (Platform.OS === 'ios' && bold) {
      fontWeight = '700';
    }
    if (Platform.OS === 'ios') {
      fontWeight = '400';
    }

    if (underLine) {
      textDecorationLine = 'underline';
    }
    if (overLine) {
      textDecorationLine = 'line-through';
    }

    if (center) {
      textAlignVertical = 'center';
    }
    if (top) {
      textAlignVertical = 'top';
    }
    if (bottom) {
      textAlignVertical = 'bottom';
    }
    if (Platform.OS === 'android') {
      textAlign = 'left';
    }
    if (Platform.OS === 'ios') {
      textAlign = 'left';
    }
    if (center) {
      textAlign = 'center';
    }

    return {
      fontSize: size,
      color,
      fontFamily,
      fontWeight,
      alignSelf: start ? 'flex-start' : undefined,
      textDecorationLine,
      textAlign,
      textAlignVertical,
    };
  },
});
