import { Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { NavigationBar } from '../components/NavigationBar'
import { routes } from './routes'

export const Navigation = () => {
  return (
    <Suspense
      fallback = { <p>Cargando . . . </p> }
    >

      <BrowserRouter>
      
        <div className='main-layout'>

          <NavigationBar />

          <Routes>
            {routes.map(({ path, Component }) => (
              <Route
                key = { path }
                path= { path }
                element = { <Component />}
              />
            ))}
            <Route
              path='/*'
              element = { <Navigate to={ routes[0].to } replace /> }
            />
          </Routes>

        </div>

      </BrowserRouter>
    </Suspense>
  )
}
