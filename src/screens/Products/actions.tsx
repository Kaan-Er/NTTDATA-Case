import {Dispatch} from 'react';
import Toast from '../../components/molecules/Toast';
import {getProducts} from '../../services/actions';
import {Product} from '../../services/types';
import {CartPressProps, FavoritePressProps, GetInitialDataProps} from './types';
import {addCart, handleFavorite} from '../../redux/slices/user';

export const getInitialData: GetInitialDataProps = async setProducts => {
  try {
    const result = await getProducts();
    setProducts(result);
  } catch (error) {
    Toast.open({
      type: 'error',
      title: 'There was an error while fetching products!',
    });
  }
};

export const onFavoritePress: FavoritePressProps = (
  product: Product,
  dispatch: Dispatch<any>,
) => {
  dispatch(handleFavorite(product));
};

export const addCartPress: CartPressProps = (
  product: Product,
  dispatch: Dispatch<any>,
) => {
  dispatch(addCart(product));
};
