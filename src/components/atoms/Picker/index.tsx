import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import Button from '../Button';
import style from './styles';
import colors from '../../../themes/colors';
import {StyleProps, PickerProps} from './types';

export default ({
  value = '1',
  onChange,
  onIncrease = () => {},
  onDecrease = () => {},
  max,
  decreaseButtonColor = colors.gray,
}: PickerProps) => {
  const styles: StyleProps = style();
  const [input, setInput] = useState<string>(value);

  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          if (parseInt(input, 10) > 1) {
            setInput((parseInt(input, 10) - 1).toString());
            onDecrease();
            onChange((parseInt(input, 10) - 1).toString());
          }
        }}
        color={decreaseButtonColor}
        textColor={colors.white.default}
        textSize={21}
        borderRadius={5}
        style={styles.button}>
        -
      </Button>
      <TextInput
        value={max < 1 ? '0' : input}
        onChangeText={e => {
          setInput(e);
          onChange(e);
        }}
        style={styles.input}
        onBlur={() => {
          if (max > 1 && parseInt(input, 10) > max) setInput(max.toString());
          if (max > 1 && parseInt(input, 10) <= max) setInput(input);
          if (max <= 1) setInput('0');
        }}
        maxLength={3}
        keyboardType="number-pad"
      />
      <Button
        onPress={() => {
          if (parseInt(input, 10) < max) {
            setInput((parseInt(input, 10) + 1).toString());
            onIncrease();
            onChange((parseInt(input, 10) + 1).toString());
          }
        }}
        color={colors.americanOrange.default}
        textColor={colors.white.default}
        textSize={21}
        borderRadius={5}
        style={styles.button}>
        +
      </Button>
    </View>
  );
};
