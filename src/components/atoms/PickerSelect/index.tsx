import React, {useRef} from 'react';
import {I18nManager, Platform, TouchableOpacity} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import styleFn from './styles';
import colors from '../../../themes/colors';
import Icon from '../Icon';
import {PickerSelectProps} from './types';
import {FontFamily, FontFamilyRTL} from '../../../configs/font';
import {Color, FontSize} from '../../../configs/pickerSelect';

export default ({
  items,
  value,
  onChange,
  placeholder,
  backgroundColor = Color,
  fontSize = FontSize,
  family = I18nManager.isRTL ? FontFamilyRTL : FontFamily,
  medium,
  bold,
  disabled = false,
  heavy,
  semiBold,
  style,
}: PickerSelectProps) => {
  const styles = styleFn({backgroundColor});
  const pickerRef = useRef<any>();
  const pickerRefObj: any = {ref: pickerRef};
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      disabled={disabled}
      onPress={() => {
        if (Platform.OS === 'ios') {
          pickerRef.current.togglePicker(true);
        } else {
          pickerRef.current.focus();
        }
      }}
      style={[styles.container, style]}>
      <RNPickerSelect
        ref={Platform.OS === 'ios' ? pickerRef : undefined}
        onValueChange={(currentValue: string, index: number) => {
          if (onChange) onChange(currentValue, index);
        }}
        value={value}
        Icon={() => null}
        useNativeAndroidPickerStyle={false}
        items={items}
        pickerProps={Platform.OS === 'android' ? pickerRefObj : undefined}
        placeholder={{label: placeholder, value: null}}
        style={{
          placeholder: {color: colors.black.default},
          inputAndroid: styles.inputAndroid({
            heavy,
            medium,
            bold,
            semiBold,
            family,
            fontSize,
          }),
          inputAndroidContainer: {padding: 0, paddingVertical: 0},
        }}
      />
      <Icon name="Bottom" width="15" height="15" color={colors.blackOlive} />
    </TouchableOpacity>
  );
};
