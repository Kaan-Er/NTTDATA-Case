import {Product} from '../../../services/types';

export interface IUser {
  [x: string]: any;
  favorites: Product[];
  cart: ICart[];
  location: {};
  name: string;
  loading: boolean;
  error: string;
  token: string;
  language: 'en' | 'tr';
}

export interface ICart {
  product: Product;
  quantity: number;
}

export interface LoginProps {
  username: string;
  password: string;
}

export interface LoginResult {
  token: string;
  name: string;
}
