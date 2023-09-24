import {Dispatch} from 'react';
import Toast from '../../components/molecules/Toast';
import {getProducts} from '../../services/actions';
import {Product} from '../../services/types';
import {
  CartPressProps,
  FavoritePressProps,
  FilteringProps,
  GetInitialDataProps,
} from './types';
import {addCart, handleFavorite} from '../../redux/slices/user';

export const getInitialData: GetInitialDataProps = async (
  setProducts,
  setLoading,
) => {
  try {
    const result = await getProducts();
    setProducts(result);
  } catch (error) {
    Toast.open({
      type: 'error',
      title: 'There was an error while fetching products!',
    });
  } finally {
    setLoading(false);
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

export const applyFilterAndSort: FilteringProps = (isIncreasing, products) => {
  const filteredProducts = products.filter(product => product.name);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const priceA = parseFloat(a.price);
    const priceB = parseFloat(b.price);

    if (isIncreasing) {
      return priceA - priceB;
    } else {
      return priceB - priceA;
    }
  });

  return sortedProducts;
};
