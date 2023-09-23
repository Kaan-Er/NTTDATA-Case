import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../Header';
import style from './styles';
import Icon from '../Icon';
import {ButtonProps} from './types';
import {
  BorderRadius,
  IconColor,
  IconHeight,
  IconPosition,
  IconWidth,
  TextColor,
  TextSize,
} from '../../../configs/button';

export default ({
  children,
  onPress,
  textSize = TextSize,
  textStyles,
  color,
  textColor = TextColor,
  iconName,
  iconWidth = IconWidth,
  iconHeight = IconHeight,
  iconColor = IconColor,
  disabled,
  shadow,
  border,
  borderColor,
  borderRadius = BorderRadius,
  medium,
  semiBold,
  iconPosition = IconPosition,
  bold,
  vertical,
  ...props
}: ButtonProps) => {
  const styles = style({border, borderColor, borderRadius});

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.9}
      style={[
        styles.button,
        border && styles.border,
        props.style,
        shadow && styles.shadow,
      ]}>
      {iconName && iconPosition === 'left' && (
        <Icon
          name={iconName}
          width={iconWidth}
          height={iconHeight}
          color={iconColor}
        />
      )}
      {children && (
        <Header
          medium={medium}
          semiBold={semiBold}
          bold={bold}
          text={children}
          size={textSize}
          color={textColor}
          style={[
            iconName ? styles.textMargin : undefined,
            styles.text,
            textStyles,
          ]}
        />
      )}
      <View
        style={[styles.linearContainer, styles.linear, styles.overflowControl]}>
        <LinearGradient
          start={vertical ? {x: 0, y: 1} : {x: 1, y: 0}}
          end={{x: 0, y: 0}}
          style={[styles.linear, styles.overflowControl]}
          colors={typeof color === 'object' ? color : [color, color]}
        />
      </View>
      {iconName && iconPosition === 'right' && (
        <Icon
          name={iconName}
          width={iconWidth}
          height={iconHeight}
          color={iconColor}
        />
      )}
    </TouchableOpacity>
  );
};
