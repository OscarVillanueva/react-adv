import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { NavigationBar } from '../components/NavigationBar'
import { LazyPage1, LazyPage2, LazyPage3 } from '../lazyload/pages'

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <NavigationBar />

        <Routes>
          <Route
            path='/lazy1'
            element = { <LazyPage1 /> }
          />
          <Route
            path='/lazy2'
            element = { <LazyPage2 /> }
          />
          <Route
            path='/lazy3'
            element = { <LazyPage3 /> }
          />

          <Route
            path='/*'
            element = { <Navigate to='/lazy1' replace /> }
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
