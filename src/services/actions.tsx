import {get} from '.';
import {GetProductsProps} from './types';

/**
 * The function `getProducts` makes a POST request to the 'products' endpoint and returns the result.
 * @returns The result of the `post` function is being returned.
 */
export const getProducts: GetProductsProps = async () => {
  const result = await get('products', '');
  return result;
};
