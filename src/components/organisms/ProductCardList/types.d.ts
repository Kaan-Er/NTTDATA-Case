export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  shippingMethod: string;
  isFavorite: boolean;
}

export interface ProdcutCardListParams {
  data: IProduct[];
  onPress: (item: IProduct) => void;
  onFavoritePress: (itemId: number) => void;
  onCartPress: (itemId: number) => void;
}
