// Types
import { ProductCardProps, ProductCard } from '../components/ProductCard';
import { ProductTitleProps } from "../components/ProductTitle"
import { ProductImageProps } from "../components/ProductImage"
import { ProductCardButtonsProps } from "../components/ProductButtons"

export interface Product {
  id: string,
  title: string,
  image ?: string
}

export interface ProductContextProps {
  counter: number,
  product: Product,
  maxCount ?: number,
  increaseBy: (value: number) => void
}

export interface ProductInCart extends Product {
  count: number
}

export interface onChangeArgs {
  product: Product,
  count: number
}

export interface InitialValues {
  count ?: number,
  maxCount ?: number
}

export interface ProductCardHandlers {
  count: number,
  isMaxCountReached: boolean,
  maxCount ?: number,
  product: Product,
  increaseBy: (value: number) => void,
  reset: () => void
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element,
  Title: ( props: ProductTitleProps ) => JSX.Element,
  Image: ( props: ProductImageProps ) => JSX.Element,
  Buttons: ( props: ProductCardButtonsProps ) => JSX.Element
}