import {Product} from '../../../services/types';

export interface ProdcutCardListParams {
  data: Product[];
  onPress: (item: Product) => void;
  onFavoritePress: (item: Product) => void;
  onCartPress: (item: Product) => void;
}
