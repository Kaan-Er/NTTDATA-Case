import React, {memo} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {ProdcutCardListParams} from './types';
import ProductCard from '../../molecules/ProductCard';
import {selectUser} from '../../../redux/slices/user';
import {useSelector} from 'react-redux';

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
});

export default ProductCardList;
