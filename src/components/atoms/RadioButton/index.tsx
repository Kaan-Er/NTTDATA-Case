import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import style from './styles';
import {RadioButtonProps} from './types';
import {Color, DotColor} from '../../../configs/radioButton';

export default ({
  value,
  color = Color,
  dotColor = DotColor,
  onChange = () => {},
  ...props
}: RadioButtonProps) => {
  const styles = style({color, dotColor});
  const [active, setActive] = useState<boolean>();

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[
        value === true || active
          ? styles.radioButtonActive
          : styles.radioButton,
        props.style,
      ]}
      onPress={() => {
        if (value === undefined) {
          setActive(!active);
          onChange(!active);
        } else {
          onChange(!active);
        }
      }}>
      {(value === true || active) && <View style={styles.circle} />}
      {(value === true || active) && (
        <LinearGradient
          style={[styles.linear]}
          colors={typeof color === 'object' ? color : [color, color]}
        />
      )}
    </TouchableOpacity>
  );
};
