import React from 'react';
import {View, StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import DefaultTemplate from '../../templates/DefaultTemplate';
import ProductCardList from '../../components/organisms/ProductCardList';
import {useNavigation} from '@react-navigation/native';
import {ScreenProp} from '../../navigation/types';
import {useDispatch, useSelector} from 'react-redux';
import {selectUser} from '../../redux/slices/user';
import {addCartPress, onFavoritePress} from '../Products/actions';

export default () => {
  const navigation = useNavigation<ScreenProp>();
  const dispatch = useDispatch();
  const userStore = useSelector(selectUser);

  return (
    <DefaultTemplate
      header="Favorite Products"
      whiteBackground
      topBackgroundColor={colors.white.default}>
      <View style={styles.container}>
        <ProductCardList
          data={userStore.favorites}
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
    paddingVertical: 12,
  },
});
