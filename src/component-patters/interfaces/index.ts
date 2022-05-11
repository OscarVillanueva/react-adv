import { ReactElement } from "react"

export type Product = {
  id: string,
  title: string,
  image ?: string
}

export interface ProductCardProps {
  product: Product,
  children ?: ReactElement | ReactElement[]
}

export interface ProductContextProps {
  counter: number,
  product: Product,
  increaseBy: (value: number) => void
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element,
  Title: ({ title }: { title ?: string}) => JSX.Element,
  Image: ({ image }: { image?: string}) => JSX.Element,
  Buttons: () => JSX.Element
}