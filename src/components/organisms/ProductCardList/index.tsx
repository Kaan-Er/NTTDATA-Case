import React, {memo} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {ProdcutCardListParams} from './types';
import ProductCard from '../../molecules/ProductCard';

const ProductCardList = ({
  data,
  onPress,
  onFavoritePress,
  onCartPress,
}: ProdcutCardListParams) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <ProductCard
          title={item.title}
          description={item.description.slice(0, 45) + '...'}
          image={item.image}
          isFavorite={item.isFavorite}
          price={item.price}
          onFavoritePress={() => onFavoritePress(item.id)}
          onCartPress={() => onCartPress(item.id)}
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
