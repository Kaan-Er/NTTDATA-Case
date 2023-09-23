import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {ProdcutCardParams} from './types';
import Image from '../../atoms/Image';
import Header from '../../atoms/Header';
import Button from '../../atoms/Button';
import colors from '../../../themes/colors';

export default ({
  title,
  description,
  image,
  isFavorite,
  price,
  onFavoritePress,
  onCartPress,
  onPress,
}: ProdcutCardParams) => {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={onPress}>
      <Image url={image} width={130} resizeMode="cover" style={styles.image} />
      <View style={styles.details}>
        <View style={styles.header}>
          <Header text={title} size={16} bold color={colors.blackOlive} />
          <Button
            iconName={isFavorite ? 'Heart' : 'HeartOutline'}
            color={colors.transparent}
            iconWidth="18"
            iconHeight="18"
            borderColor={colors.lightSilver}
            border
            iconColor={colors.primary}
            onPress={onFavoritePress}
          />
        </View>
        <Header text={description} size={14} color={colors.dimGray} />
        <View style={styles.footer}>
          <Header text={`${price} ₺`} size={16} bold color={colors.primary} />
          <Button
            color={colors.primary}
            textSize={14}
            medium
            style={styles.button}
            onPress={onCartPress}>
            Add
          </Button>
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
    gap: 8,
  },
  footer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 16,
  },
});
