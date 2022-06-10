
// Dependencies
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'

// Styles
import '../styles/styles.css'

export const FormikComponentsPage = () => {

  return (
    <div>
      <h1>Formik Components tutorial</h1>

      <Formik
        initialValues={{
          name: '',
          email: '',
          jobType: '',
          terms: false,
          lastName: '',
        }}
        onSubmit = { console.log }
        validationSchema = { Yup.object({
          name: Yup.string()
            .required('The name is required')
            .max(15, 'The name must be less than 15 characters'),
          lastName: Yup.string()
            .required('The last name is required')
            .max(15, 'The last name must be less than 15 characters'),
          email: Yup.string()
            .required('The email is required')
            .email('Enter a valid email'),
          terms: Yup.boolean()
            .oneOf([true], 'The terms and conditions must be accepted'),
          jobType: Yup.string()
            .required('The Job type is required')
            .notOneOf(['it-jr'], 'This option is not valid')
        })}
      >

       { () => (
          <Form>

            <label htmlFor="name">Name</label>
            <Field name = 'name' type = 'text' />
            <ErrorMessage name='name' component = 'span' />

            <label htmlFor="lastName">lastName</label>
            <Field name = 'lastName' type = 'text' />
            <ErrorMessage name='lastName' component = 'span'/>

            <label htmlFor="email">Email</label>
            <Field name = 'email' type = 'email' />
            <ErrorMessage name='email' component = 'span'/>

            <label htmlFor="jobType">Job Type</label>
            <Field name = 'jobType' as = 'select'>
              <option value = ''>Choose one</option>
              <option value = 'dev'>Developer</option>
              <option value = 'ux'>UX/UI</option>
              <option value = 'it-jr'>Junior IT</option>
            </Field>
            <ErrorMessage name='jobType' component = 'span'/>

            <label>
              <Field name = 'terms' type = 'checkbox' />
              Terms and conditions
            </label>
            <ErrorMessage name='terms' component = 'span'/>


            <button type="submit">Submit</button>

          </Form>
        )}

      </Formik>

    </div>
  )
}

