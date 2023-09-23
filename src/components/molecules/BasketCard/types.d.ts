export interface BasketCardParams {
  title: string;
  price: string;
  image: string;
  quantity: number;
  onAdd: () => void;
  onRemove: () => void;
  onRemoveAll: () => void;
  onPress: () => void;
}
