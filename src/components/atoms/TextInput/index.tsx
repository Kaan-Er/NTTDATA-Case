import React, {useState} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import TextInputMask from 'react-native-mask-input';
import colors from '../../../themes/colors';
import Header from '../Header';
import Icon from '../Icon';
import style from './styles';
import {StyleProps, TextInputProps} from './types';
import {
  ActiveBackgroundColor,
  BackgroundColor,
  ButtonIconHeight,
  ButtonIconWidth,
  FontSize,
  IconColor,
  IconHeight,
  IconPosition,
  IconWidth,
  TextAlignVertical,
} from '../../../configs/textInput';

export default ({
  onChange,
  onFocus,
  onPressIn,
  autoFocus,
  placeholder,
  autoCapitalize,
  iconName,
  numberOfLine,
  multiline,
  iconWidth = IconWidth,
  iconHeight = IconHeight,
  fontSize = FontSize,
  onButtonPress,
  buttonIcon = '',
  buttonIconWidth = ButtonIconWidth,
  buttonIconHeight = ButtonIconHeight,
  iconColor = IconColor,
  iconPosition = IconPosition,
  mask,
  initialValue,
  backgroundColor = BackgroundColor,
  activeBackgroundColor = ActiveBackgroundColor,
  containerStyle,
  value,
  maxLength,
  editable,
  autoCorrect,
  keyboardType,
  secureTextEntry,
  shadow,
}: TextInputProps) => {
  const styles: StyleProps = style({
    backgroundColor,
    fontSize,
    activeBackgroundColor,
    shadow,
  });
  const MTextInput = mask ? TextInputMask : TextInput;
  const [focused, setFocused] = useState(false);

  return (
    <View
      style={
        focused
          ? [styles.fContainer, containerStyle]
          : [styles.container, containerStyle]
      }>
      {iconName && iconPosition === 'left' && (
        <Icon
          name={iconName}
          width={iconWidth}
          height={iconHeight}
          color={iconColor}
        />
      )}
      <View style={styles.leftContainer}>
        {initialValue && <Header text={initialValue} size={fontSize} />}
        {initialValue && (
          <View style={focused ? styles.fSeperator : styles.seperator} />
        )}
        <MTextInput
          autoFocus={autoFocus}
          onPressIn={onPressIn}
          textAlignVertical={TextAlignVertical}
          secureTextEntry={secureTextEntry}
          autoCorrect={autoCorrect}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          multiline={multiline}
          maxLength={maxLength}
          editable={editable}
          style={styles.input}
          numberOfLines={numberOfLine}
          placeholder={placeholder}
          placeholderTextColor={colors.silverSand}
          mask={mask}
          value={value}
          onChangeText={(text: string) => {
            if (onChange) onChange(text);
          }}
          onFocus={() => {
            setFocused(true);
            if (onFocus) onFocus();
          }}
          onBlur={() => setFocused(false)}
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
      {typeof onButtonPress !== 'undefined' && (
        <TouchableOpacity onPress={onButtonPress}>
          <Icon
            name={buttonIcon}
            width={buttonIconWidth}
            height={buttonIconHeight}
            color={iconColor}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};
