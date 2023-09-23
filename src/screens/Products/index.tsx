import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import DefaultTemplate from '../../templates/DefaultTemplate';
import ProductCardList from '../../components/organisms/ProductCardList';
import {useNavigation} from '@react-navigation/native';
import {ScreenProp} from '../../navigation/types';
import {addCartPress, getInitialData, onFavoritePress} from './actions';
import {Product} from '../../services/types';
import {useDispatch} from 'react-redux';

export default () => {
  const navigation = useNavigation<ScreenProp>();
  const dispatch = useDispatch();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getInitialData(setProducts);
  }, []);

  return (
    <DefaultTemplate
      header="Store"
      whiteBackground
      topBackgroundColor={colors.white.default}>
      <View style={styles.container}>
        <ProductCardList
          data={products.filter(product => product.name)}
          onCartPress={product => addCartPress(product, dispatch)}
          onFavoritePress={product => onFavoritePress(product, dispatch)}
          onPress={product => navigation.navigate('ProductDetails', {product})}
        />
      </View>
    </DefaultTemplate>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white.default,
    padding: 12,
  },
});
