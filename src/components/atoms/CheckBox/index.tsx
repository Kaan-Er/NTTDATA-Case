import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import style from './styles';
import Icon from '../Icon';
import {CheckBoxProps, StyleProps} from './types';
import Header from '../Header';
import {Color} from '../../../configs/checkbox';
import {IconColor} from '../../../configs/button';

export default ({
  value,
  label,
  labelSize = 15,
  color = Color,
  iconColor = IconColor,
  onChange = () => {},
  disabled,
  ...props
}: CheckBoxProps) => {
  const styles: StyleProps = style();
  const [active, setActive] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.9}
        disabled={disabled}
        style={[
          (value === true && value !== undefined) || active
            ? styles.checkBoxActive
            : styles.checkBox,
          props.style,
        ]}
        onPress={() => {
          if (value === undefined) {
            setActive(!active);
            onChange(!active);
          } else {
            onChange(!value);
          }
        }}>
        {((value === true && value !== undefined) || active) && (
          <Icon name="Checkmark" width="14" height="10" color={iconColor} />
        )}
        {((value === true && value !== undefined) || active) && (
          <LinearGradient
            style={[styles.linear]}
            colors={typeof color === 'object' ? color : [color, color]}
          />
        )}
      </TouchableOpacity>
      {label && <Header text={label} size={labelSize} style={styles.header} />}
    </View>
  );
};
