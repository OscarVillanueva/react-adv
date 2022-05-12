// Types
import { ProductCardProps } from "../components/ProductCard"
import { ProductTitleProps } from "../components/ProductTitle"
import { ProductImageProps } from "../components/ProductImage"
import { ProductCardButtonsProps } from "../components/ProductButtons"

export type Product = {
  id: string,
  title: string,
  image ?: string
}

export interface ProductContextProps {
  counter: number,
  product: Product,
  increaseBy: (value: number) => void
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element,
  Title: ( props: ProductTitleProps ) => JSX.Element,
  Image: ( props: ProductImageProps ) => JSX.Element,
  Buttons: ( props: ProductCardButtonsProps ) => JSX.Element
}