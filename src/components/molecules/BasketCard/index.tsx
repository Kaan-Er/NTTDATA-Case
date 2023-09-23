import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {BasketCardParams} from './types';
import Image from '../../atoms/Image';
import Header from '../../atoms/Header';
import Button from '../../atoms/Button';
import colors from '../../../themes/colors';

export default ({
  title,
  image,
  price,
  quantity,
  onAdd,
  onRemove,
  onRemoveAll,
  onPress,
}: BasketCardParams) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.9}>
      <Image url={image} width={80} resizeMode="cover" style={styles.image} />
      <View style={styles.details}>
        <View style={styles.header}>
          <Header text={title} size={16} medium color={colors.blackOlive} />
          <Button
            iconName="Delete"
            color={colors.transparent}
            iconWidth="20"
            iconHeight="20"
            borderColor={colors.lightSilver}
            border
            iconColor={colors.blackOlive}
            onPress={onRemoveAll}
          />
        </View>
        <View style={styles.footer}>
          <View style={styles.quantityContainer}>
            <Button
              iconName="Minus"
              color={colors.primary}
              iconWidth="20"
              iconHeight="20"
              iconColor={colors.white.default}
              onPress={onRemove}
            />
            <Header text={quantity.toString()} size={18} medium />
            <Button
              iconName="Plus"
              color={colors.primary}
              iconWidth="20"
              iconHeight="20"
              iconColor={colors.white.default}
              onPress={onAdd}
            />
          </View>
          <Header text={`${price} ₺`} size={16} bold color={colors.primary} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: colors.white.default,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    elevation: 5,
    gap: 4,
    margin: 8,
  },
  image: {
    borderRadius: 10,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  details: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 8,
    paddingVertical: 12,
    gap: 16,
  },
  footer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
  button: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
