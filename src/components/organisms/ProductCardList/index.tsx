/* eslint-disable react/no-unstable-nested-components */
import React, {memo, useCallback} from 'react';
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

  const renderItem = useCallback(
    ({item}: any) => {
      return (
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
      );
    },
    [onCartPress, onFavoritePress, onPress, userStore.favorites],
  );

  return (
    <FlatList
      data={data}
      initialNumToRender={10}
      ListEmptyComponent={() => (
        <View style={styles.emptyContainer}>
          <Icon
            name="EmptyFavorite"
            width={120}
            height={120}
            color={colors.transparent}
          />
          <Header
            text="You have no favorites yet!"
            size={16}
            color={colors.dimGray}
          />
        </View>
      )}
      contentContainerStyle={styles.contentContainerStyle}
      renderItem={renderItem}
      ItemSeparatorComponent={memo(() => (
        <View style={styles.seperatorComponent} />
      ))}
      keyExtractor={item => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  seperatorComponent: {height: 16},
  contentContainerStyle: {paddingHorizontal: 12},
  emptyContainer: {
    flex: 1,
    marginTop: Dimensions.get('window').height / 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
  },
});

export default ProductCardList;
