import { FormEvent } from 'react'

// Dependencies
import * as Yup from 'yup'
import { Formik, Form } from 'formik';

// Components
import { InputText } from '../components/InputText';

// Styles
import '../styles/styles.css'

export const RegisterFormikPage = () => {

  return (
    <div>
      <h1>Register Page</h1>

      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmation: '',
        }}
        validationSchema = {Yup.object().shape({
          name: Yup.string()
            .required('The name is required')
            .min(2, 'The name must have at least 2 characters')
            .max(15, 'The name must be less than 15 characters'),
          email: Yup.string()
            .required('The email is required')
            .email('Enter a valid email'),
          password: Yup.string()
            .required("The password is required")
            .min(6, 'The password must have at least 6 characters'),
          confirmation: Yup.string()
            .required('The confirmation is required')
            .oneOf(
              [Yup.ref('password'), null], 
              'The passwords don\'t match'
            ),
        })} 
        onSubmit =  { console.log }
      >
        {({ handleReset }) => (
          <Form>

            <InputText
              name='name'
              label='Name'
            />

            <InputText
              name='email'
              label='Email'
              type='email'
            />

            <InputText 
              name='password'
              label='Password'
              type='password'
            />

            <InputText 
              name='confirmation'
              label='confirmation'
              type='password'
            />

            <button type="submit">
              Create
            </button>

            <button type="button" onClick={ handleReset }>
              Reset
            </button>

          </Form>
        )}
      </Formik>


    </div>
  )
}
