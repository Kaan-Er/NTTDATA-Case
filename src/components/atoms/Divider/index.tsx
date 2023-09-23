import React from 'react';
import {View} from 'react-native';
import dividerStyle from './styles';
import {DividerProps} from './types';
import {Color} from '../../../configs/divider';

export default ({
  top,
  bottom,
  vertical,
  horizontal,
  color = Color,
  type = 'solid',
  width = '100%',
  weight = 1,
  height,
  direction,
  style,
}: DividerProps) => {
  const styles = dividerStyle({
    top,
    bottom,
    vertical,
    horizontal,
    color,
    type,
    width,
    height,
    weight,
    direction,
  });

  return (
    <View style={[styles.container, style]}>
      <View style={styles.divider} />
    </View>
  );
};
