export interface ProdcutCardParams {
  title: string;
  description: string;
  price: string;
  image: string;
  isFavorite: boolean;
  onPress: () => void;
  onFavoritePress: () => void;
  onCartPress: () => void;
}
