
// Dependencies
import { FormikErrors, useFormik } from 'formik'

// Styles
import '../styles/styles.css'

interface FormValues  {
  name: string,
  email: string,
  lastName: string,
}

export const FormikBasicPage = () => {

  const validate = (values: FormValues) : FormikErrors<FormValues> => {
    
    const { name, email, lastName } = values
    const errors: FormikErrors<FormValues> = {}

    if (!name) errors.name = 'The name is required'
    else if (name.trim().length > 15) errors.name = 'The name must be 15 characters or less'

    if (!lastName) errors.lastName = 'The lastName is required'
    else if (lastName.trim().length > 10)
      errors.lastName = 'The lastName must be 10 characters or less'

    if (!email) errors.email = 'The email is required'
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) 
      errors.email = 'Invalid email address';
    
    return errors

  }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      lastName: '',
    },
    validate, 
    onSubmit: values => {
      console.log(values)
    }
  })

  return (
    <div>
      <h1>Formik Basic tutorial</h1>

      <form onSubmit={ formik.handleSubmit } noValidate>

          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            value={ formik.values.name }
            onChange={ formik.handleChange }
            onBlur = { formik.handleBlur }
            className = { formik.touched.name && formik.errors.name ? 'has-error' : '' }
          />

          { formik.touched.name && formik.errors.name && (
            <span>{ formik.errors.name }</span>
          )}

          <label htmlFor="lasName">last Name</label>
          <input 
            type="text" 
            name="lastName" 
            id="lastName" 
            value={ formik.values.lastName }
            onChange={ formik.handleChange }
            onBlur = { formik.handleBlur }
            className = { formik.touched.lastName && formik.errors.lastName ? 'has-error' : '' }
          />

          { formik.touched.lastName && formik.errors.lastName && (
            <span>{ formik.errors.lastName }</span>
          )}

          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            value={ formik.values.email }
            onChange={ formik.handleChange }
            onBlur = { formik.handleBlur }
            className = { formik.touched.email && formik.errors.email ? 'has-error' : '' }
          />
          
          { formik.touched.email && formik.errors.email && (
            <span>{ formik.errors.email }</span>
          )}

          <button type="submit">Submit</button>

      </form>
    </div>
  )
}

