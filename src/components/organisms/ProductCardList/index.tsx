/* eslint-disable react/no-unstable-nested-components */
import React, {memo} from 'react';
import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import {ProdcutCardListParams} from './types';
import ProductCard from '../../molecules/ProductCard';
import {selectUser} from '../../../redux/slices/user';
import {useSelector} from 'react-redux';
import Icon from '../../atoms/Icon';
import colors from '../../../themes/colors';
import Header from '../../atoms/Header';

const ProductCardList = ({
  data,
  onPress,
  onFavoritePress,
  onCartPress,
}: ProdcutCardListParams) => {
  const userStore = useSelector(selectUser);
  return (
    <FlatList
      data={data}
      ListEmptyComponent={() => (
        <View style={styles.emptyContainer}>
          <Icon
            name="EmptyFavorite"
            width={120}
            height={120}
            color={colors.transparent}
          />
          <Header
            text="
          You have no favorites yet!
          "
            size={16}
            color={colors.dimGray}
          />
        </View>
      )}
      renderItem={({item}) => (
        <ProductCard
          title={item.name}
          description={
            item.description?.length > 45
              ? item.description.slice(0, 45) + '...'
              : item.description
          }
          image={item.imageUrl}
          isFavorite={userStore.favorites.some(
            favorite => favorite.id === item.id,
          )}
          price={item.price}
          onFavoritePress={() => onFavoritePress(item)}
          onCartPress={() => onCartPress(item)}
          onPress={() => onPress(item)}
        />
      )}
      ItemSeparatorComponent={memo(() => (
        <View style={styles.seperatorComponent} />
      ))}
    />
  );
};

const styles = StyleSheet.create({
  seperatorComponent: {height: 16},
  emptyContainer: {
    flex: 1,
    marginTop: Dimensions.get('window').height / 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
  },
});

export default ProductCardList;
