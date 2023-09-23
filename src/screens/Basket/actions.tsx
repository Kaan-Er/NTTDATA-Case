import {Dispatch} from 'react';
import {Product} from '../../services/types';
import {CartPressProps} from '../Products/types';
import {deleteCart, removeCart} from '../../redux/slices/user';

export const removeCartPress: CartPressProps = (
  product: Product,
  dispatch: Dispatch<any>,
) => {
  dispatch(removeCart(product));
};

export const deleteCartPress: CartPressProps = (
  product: Product,
  dispatch: Dispatch<any>,
) => {
  dispatch(deleteCart(product));
};
