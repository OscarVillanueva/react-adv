
// Dependencies
import * as Yup from 'yup'
import { Formik, Form } from 'formik'

// Components
import { InputText, InputSelect, InputCheckBox } from '../components';

// Styles
import '../styles/styles.css'

export const FormikAbstractionPage = () => {

  return (
    <div>
      <h1>Formik Abstraction tutorial</h1>

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

            <InputText
              label = 'Name'
              name='name'
            />

            <InputText
              label = 'Last Name'
              name='lastName'
            />

            <InputText
              label = 'Email'
              name='email'
              type='email'
            />

            <InputSelect name = 'jobType' label = 'Job Type'>
              <option value = ''>Choose one</option>
              <option value = 'dev'>Developer</option>
              <option value = 'ux'>UX/UI</option>
              <option value = 'it-jr'>Junior IT</option>
            </InputSelect>

            <InputCheckBox
              name='terms'
              label = 'Agree terms & conditions'
            />


            <button type="submit">Submit</button>

          </Form>
        )}

      </Formik>

    </div>
  )
}

