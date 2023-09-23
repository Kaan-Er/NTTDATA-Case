import React from 'react';
import {Text, I18nManager} from 'react-native';
import style from './styles';
import {HeaderProps} from './types';
import {FontFamily, FontFamilyRTL} from '../../../configs/font';
import {Color} from '../../../configs/header';

const arabic = /[\u0600-\u06FF]/;

export default ({
  text,
  center,
  top,
  bottom,
  size,
  color = Color,
  start,
  medium,
  bold,
  heavy,
  semiBold,
  overLine,
  underLine,
  family = I18nManager.isRTL || arabic.test(text) ? FontFamily : FontFamilyRTL,
  ...props
}: HeaderProps) => {
  const styles = style({
    size,
    color,
    start,
    medium,
    bold,
    semiBold,
    heavy,
    family,
    overLine,
    underLine,
  });

  return (
    <Text
      allowFontScaling={false}
      style={[styles.header({center, top, bottom}), props.style]}>
      {text}
    </Text>
  );
};
