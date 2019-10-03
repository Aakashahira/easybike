import { Product } from './product.Model';

export interface ShoppingCartItem {
    product : Product;
    quantity : number;
}