import React from 'react';
import {View, StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import DefaultTemplate from '../../templates/DefaultTemplate';
import Image from '../../components/atoms/Image';
import Button from '../../components/atoms/Button';
import {RouteProp} from '@react-navigation/native';
import Header from '../../components/atoms/Header';
import Divider from '../../components/atoms/Divider';
import {Product} from '../../services/types';
import {selectUser} from '../../redux/slices/user';
import {useDispatch, useSelector} from 'react-redux';
import {addCartPress, onFavoritePress} from '../Products/actions';

export default ({route}: {route: RouteProp<{params: {product: Product}}>}) => {
  const {product} = route.params;
  const userStore = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <DefaultTemplate
      header="Product Details"
      back
      space
      whiteBackground
      topBackgroundColor={colors.white.default}>
      <View style={styles.container}>
        <View>
          <Image url={product.imageUrl} width="100%" height={300} />
          <Button
            iconName={
              userStore.favorites.some(favorite => favorite.id === product.id)
                ? 'Heart'
                : 'HeartOutline'
            }
            color={colors.white.default}
            iconWidth="24"
            iconHeight="24"
            style={styles.favoriteButton}
            iconColor={colors.primary}
            onPress={() => onFavoritePress(product, dispatch)}
          />
        </View>
        <View style={styles.details}>
          <View style={styles.header}>
            <Header text={product.name} size={18} bold />
            <Header text={`${product.price} ₺`} size={20} bold />
          </View>
          <Header text={product.description} size={16} />
          <Divider
            top={16}
            bottom={16}
            type="dashed"
            direction="horizontal"
            color={colors.shadowColor}
          />
          <View style={styles.shippingMethod}>
            <Header
              text="Teslimat Yöntemi"
              size={14}
              medium
              color={colors.dimGray}
            />
            <Divider
              weight={1.2}
              width={1}
              height={16}
              direction="vertical"
              type="solid"
              color={colors.dimGray}
            />
            <Header
              text={product.shippingMethod}
              size={14}
              medium
              color={colors.primary}
            />
          </View>
          <Button
            color={colors.primary}
            textSize={14}
            medium
            style={styles.button}
            bold
            onPress={() => addCartPress(product, dispatch)}>
            Add to Cart
          </Button>
        </View>
      </View>
    </DefaultTemplate>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white.default,
    paddingVertical: 12,
  },
  favoriteButton: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
  details: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  shippingMethod: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    width: '100%',
    bottom: -32,
    height: 52,
    alignSelf: 'center',
  },
});
