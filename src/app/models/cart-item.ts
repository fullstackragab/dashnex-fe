import { Product } from './product';

export interface CartItem {
  amount: number;
  product: {
    id: number;
    image: string;
    price: number;
    title: string;
  };
}
