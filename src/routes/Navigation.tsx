import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { NavigationBar } from '../components/NavigationBar'

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <NavigationBar />

        <Routes>
          <Route
            path='/about'
            element = { <h1>About page</h1> }
          />
          <Route
            path='/users'
            element = { <h1>Users page</h1> }
          />
          <Route
            path='/home'
            element = { <h1>Home page</h1> }
          />

          <Route
            path='/*'
            element = { <Navigate to='/home' replace /> }
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
