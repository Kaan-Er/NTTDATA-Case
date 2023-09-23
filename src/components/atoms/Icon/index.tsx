import React from 'react';
import {View} from 'react-native';
import style from './styles';
import Icon from '../../../themes/icon';
import {IconProps, StyleProps} from './types';

export default ({
  name,
  width,
  height,
  color,
  backgroundColor,
  containerStyle,
  ...props
}: IconProps) => {
  const styles: StyleProps = style({backgroundColor});

  return (
    <View style={[backgroundColor ? styles.container : null, containerStyle]}>
      <Icon
        name={name}
        width={width}
        height={height}
        color={color}
        {...props}
      />
    </View>
  );
};
