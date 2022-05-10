import { LazyExoticComponent, lazy } from "react";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../lazyload/pages";

type JSXComponent = () => JSX.Element

interface Route {
  to: string,
  path: string,
  Component: LazyExoticComponent<JSXComponent> | JSXComponent,
  name: string
}

const Lazy1 = lazy(() => import('../lazyload/pages/LazyPage1'))
const Lazy2 = lazy(() => import('../lazyload/pages/LazyPage2'))
const Lazy3 = lazy(() => import('../lazyload/pages/LazyPage3'))

export const routes : Route[]  = [
  {
    to: '/lazy1',
    name: 'Lazy 1',
    path: '/lazy1',
    Component: Lazy1,
  },
  {
    to: '/lazy2',
    name: 'Lazy 2',
    path: '/lazy2',
    Component: Lazy2,
  },
  {
    to: '/lazy3',
    name: 'Lazy 3',
    path: '/lazy3',
    Component: Lazy3,
  },
]