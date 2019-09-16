/**
 * Record <string, otherTypes>
 * key 必须是string | Enum类型
 */
export interface ProductInCart {
  id: string;
  amount: number;
  name: string;
  label?: string;
}

export enum ErrorsEnum {
  NetworkError = 'NetworkError',
  ServerError = 'ServerError',
  FormValidationError = 'FormValidationError',
  UnknownError = 'UnknownError',
}

export type CartErrors = Partial<Record<ErrorsEnum, string>>;

export class CartModel {
  products: Record<string, ProductInCart> = {};
  error?: CartErrors;
}

/**
 * Partial
 * 对象中所有属性是可选的 optional
 */
export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
}

export type ModelProps = Partial<{
  product: Product;
  cartContent: Record<string, ProductInCart>;
}>;

// const modelProps1: ModelProps = {};
// const modelProps2: ModelProps = null;

/**
 * Required
 * 和Partial相反
 */
export type OwnProps = Required<{
  name: string;
  description: string;
  ingredients: Array<string>;
}>;

// const ownProps: OwnProps = { name: 'aaa', description: 'aaa', ingredients: [] };

/**
 * Pick 和 Omit
 * Pick 是包含哪些
 * Omit 是排除哪些
 */
export type ProductPhotoPickProps = Pick<Product, 'id' | 'price'>;
// const photoPick: ProductPhotoPickProps = { id: '', price: '24' };
export type ProductPhotoOmitProps = Omit<Product, 'id' | 'price'>;
// const photoOmit: ProductPhotoOmitProps = { name: '', description: '' };
