import { LazyExoticComponent, lazy } from "react";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../lazyload/pages";
import { NoLazy } from '../lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element

interface Route {
  to: string,
  path: string,
  Component: LazyExoticComponent<JSXComponent> | JSXComponent,
  name: string
}

// Rename chunks in webpack 
// agregar un comment antes de la ruta 
// /* webpackChunkName: Lazy1 */
const LazyLayout = lazy(() => import('../lazyload/layout/LazyLayout'))
// const Lazy2 = lazy(() => import('../lazyload/pages/LazyPage2'))
// const Lazy3 = lazy(() => import('../lazyload/pages/LazyPage3'))

export const routes : Route[]  = [
  {
    to: '/lazyload',
    path: '/lazyload/*',
    name: 'Lazy layout - Dash',
    Component: LazyLayout,
  },
  {
    to: '/no-lazy',
    name: 'No lazy',
    path: '/no-lazy',
    Component: NoLazy,
  },
]