import {Dispatch} from 'react';
import Toast from '../../components/molecules/Toast';
import {getProducts} from '../../services/actions';
import {Product} from '../../services/types';
import {FavoritePressProps, GetInitialDataProps} from './types';
import {favoriteHandler} from '../../redux/slices/user';

export const getInitialData: GetInitialDataProps = async setProducts => {
  try {
    const result = await getProducts();
    setProducts(result);
  } catch (error) {
    Toast.open({
      type: 'error',
      title: 'Bir hata oluştu!',
    });
  }
};

export const onFavoritePress: FavoritePressProps = (
  product: Product,
  dispatch: Dispatch<any>,
) => {
  dispatch(favoriteHandler(product));
};
