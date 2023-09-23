import React from 'react';
import {View, StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import DefaultTemplate from '../../templates/DefaultTemplate';
import {useDispatch, useSelector} from 'react-redux';
import {selectUser} from '../../redux/slices/user';
import BasketCardList from '../../components/organisms/BasketCardList';
import {deleteCartPress, removeCartPress} from './actions';
import {addCartPress} from '../Products/actions';
import Header from '../../components/atoms/Header';

export default () => {
  const dispatch = useDispatch();
  const userStore = useSelector(selectUser);

  return (
    <DefaultTemplate
      header="Basket"
      whiteBackground
      topBackgroundColor={colors.white.default}>
      <View style={styles.container}>
        <BasketCardList
          data={userStore.cart}
          onAdd={product => addCartPress(product, dispatch)}
          onRemove={product => removeCartPress(product, dispatch)}
          onRemoveAll={product => deleteCartPress(product, dispatch)}
        />
        {userStore.cart.length > 0 && (
          <View style={styles.total}>
            <Header text="Total: " size={16} bold color={colors.blackOlive} />
            <Header
              text={`${userStore.cart.reduce(
                (total, item) =>
                  total + parseFloat(item.product.price) * item.quantity,
                0,
              )} ₺`}
              size={16}
              bold
              color={colors.primary}
            />
          </View>
        )}
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
  total: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 12,
  },
});
