import { useMemo } from 'react';

// Dependencies
import * as Yup from 'yup'
import { Formik, Form } from 'formik'

// Components
import { InputSelect, InputText } from '../components';

// Data
import formJSON from '../data/custom-form.json'

type Initial = { [key: string]: any }

export const DynamicFormPage = () => {

  const initialValues = useMemo(() => {

    const values: Initial = {}
    const rules : Initial = {}
    let schema = Yup.string()

    for (const input of formJSON) {
      values[input.name] = input.value

      if ( !input.validations ) continue

      for (const rule of input.validations) {

          if (rule.type === 'required')
            schema = schema.required('Este campo es requerido')
            
          if (rule.type === 'min')
            schema = schema.min(
              (rule as any).value || 2, 
              `Este campo debe tener al menos ${(rule as any).value || 2} caracteres`
            )

          if (rule.type === 'email')
            schema = schema.email('Ingresa un email válido')
      }

      rules[input.name] = schema
      schema = Yup.string()

    }

    return { values, rules}

  }, [formJSON])

  return (
    <div>
      <h1>Dynamic Forms</h1>

      <Formik 
        initialValues={ initialValues.values } 
        validationSchema = { Yup.object({ ...initialValues.rules }) }
        onSubmit={ console.log }          
      >
        {() => (
          <Form noValidate>

            {formJSON.map(input => {
              
              if (input.type === 'select' && input.options) {
                return (
                  <InputSelect
                    key = { input.name }
                    name = { input.name } 
                    label = { input.label }
                  >
                    {input.options.map(option => (
                      <option key={option.id} value = { option.id }>
                        { option.label }
                      </option>
                    ))}
                  </InputSelect>
                )
              }

              if (['input', 'password', 'email'].includes(input.type))
                return (
                  <InputText 
                    key={ input.name }
                    type = { (input.type as any) }
                    name = { input.name }
                    label = { input.label }
                    placeholder = { input.placeholder }
                  />
                )

              return <span>Not included yet: { input.type }</span>

            })}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>

    </div>
  )
}
