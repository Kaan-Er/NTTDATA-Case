import {Product} from '../../../services/types';

export interface BasketCardListParams {
  data: {
    product: Product;
    quantity: number;
  }[];
  onRemove: (item: Product) => void;
  onAdd: (item: Product) => void;
  onRemoveAll: (item: Product) => void;
}
