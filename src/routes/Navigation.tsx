import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// Components
import { NavigationBar } from '../components/NavigationBar'
import { 
  FormikBasicPage, RegisterPage, 
  FormikYupBasicPage, FormikComponentsPage, FormikAbstractionPage 
} from '../forms/pages';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <NavigationBar />

        <Routes>
          <Route
            path='/yup'
            element = { <FormikYupBasicPage /> }
          />
          <Route
            path='/formik'
            element = { <FormikBasicPage /> }
          />
          <Route
            path='/home'
            element = { <RegisterPage /> }
          />
          <Route
            path='/component'
            element = { <FormikComponentsPage /> }
          />
          <Route
            path='/abstract'
            element = { <FormikAbstractionPage /> }
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
