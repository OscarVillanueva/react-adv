
// Dependencies
import * as Yup from 'yup'
import { FormikErrors, useFormik } from 'formik'

// Styles
import '../styles/styles.css'

export const FormikYupBasicPage = () => {

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      lastName: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('The name is required')
        .max(15, 'The name must be less than 15 characters'),
      lastName: Yup.string()
        .required('The last name is required')
        .max(15, 'The last name must be less than 15 characters'),
      email: Yup.string()
        .required('The email is required')
        .email('Enter a valid email')
    }), 
    onSubmit: values => {
      console.log(values)
    }
  })

  return (
    <div>
      <h1>Formik Yup tutorial</h1>

      <form onSubmit={ formik.handleSubmit } noValidate>

          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            className = { formik.touched.name && formik.errors.name ? 'has-error' : '' }
            { ...formik.getFieldProps('name') }
          />

          { formik.touched.name && formik.errors.name && (
            <span>{ formik.errors.name }</span>
          )}

          <label htmlFor="lasName">last Name</label>
          <input 
            type="text" 
            className = { formik.touched.lastName && formik.errors.lastName ? 'has-error' : '' }
            { ...formik.getFieldProps('lastName') }
          />

          { formik.touched.lastName && formik.errors.lastName && (
            <span>{ formik.errors.lastName }</span>
          )}

          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            className = { formik.touched.email && formik.errors.email ? 'has-error' : '' }
            { ...formik.getFieldProps('email') }
          />
          
          { formik.touched.email && formik.errors.email && (
            <span>{ formik.errors.email }</span>
          )}

          <button type="submit">Submit</button>

      </form>
    </div>
  )
}

