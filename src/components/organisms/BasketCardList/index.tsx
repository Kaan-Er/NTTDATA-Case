/* eslint-disable react/no-unstable-nested-components */
import React, {memo, useCallback} from 'react';
import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import {BasketCardListParams} from './types';
import Icon from '../../atoms/Icon';
import colors from '../../../themes/colors';
import Header from '../../atoms/Header';
import BasketCard from '../../molecules/BasketCard';
import {ScreenProp} from '../../../navigation/types';
import {useNavigation} from '@react-navigation/native';

const BasketCardList = ({
  data,
  onAdd,
  onRemove,
  onRemoveAll,
}: BasketCardListParams) => {
  const navigation = useNavigation<ScreenProp>();

  const renderItem = useCallback(
    ({item}: any) => {
      return (
        <BasketCard
          title={
            item.product.name.length > 20
              ? item.product.name.slice(0, 20) + '...'
              : item.product.name
          }
          image={item.product.imageUrl}
          price={(parseFloat(item.product.price) * item.quantity)
            .toFixed(2)
            .toString()}
          quantity={item.quantity}
          onAdd={() => onAdd(item.product)}
          onRemove={() => onRemove(item.product)}
          onRemoveAll={() => onRemoveAll(item.product)}
          onPress={() =>
            navigation.navigate('ProductDetails', {product: item.product})
          }
        />
      );
    },
    [onAdd, onRemove, onRemoveAll, navigation],
  );

  return (
    <FlatList
      data={data}
      ListEmptyComponent={() => (
        <View style={styles.emptyContainer}>
          <Icon
            name="EmptyCard"
            width={120}
            height={120}
            color={colors.transparent}
          />
          <Header
            text="You have no product yet!"
            size={16}
            color={colors.dimGray}
          />
        </View>
      )}
      renderItem={renderItem}
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

export default BasketCardList;
