import {Product} from '../../services/types';

export type GetInitialDataProps = (
  setProducts: Dispatch<SetStateAction<Product[] | any | undefined>>,
) => Promise<any>;

export type FavoritePressProps = (
  product: Product,
  dispatch: Dispatch<SetStateAction<Product[] | any | undefined>>,
) => void;

export type CartPressProps = (
  product: Product,
  dispatch: Dispatch<SetStateAction<Product[] | any | undefined>>,
) => void;
