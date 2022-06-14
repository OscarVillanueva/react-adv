import { FormEvent } from 'react'

// Hooks
import useForm from '../hooks/useForm'

// Styles
import '../styles/styles.css'

export const RegisterPage = () => {

  const { formData, handleChange, resetForm, isValidEmail } = useForm({
    initialValues: { 
      name: '',
      email: '',
      password: '',
      confirmation: '',
    }
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) : void => {
    e.preventDefault()
  }

  return (
    <div>
      <h1>Register Formik Page</h1>

      <form onSubmit={ handleSubmit }>

        <input 
          type="text" 
          name="name" 
          id="name" 
          placeholder="name"
          value={ formData.name }
          onChange = { handleChange }
          className = { `${formData.name.trim().length <= 0 && 'has-error'}` }
        />

        { formData.name.trim().length <= 0 && (
          <span>Este campo es necesario</span>
        )}

        <input 
          type="email" 
          name="email" 
          id="email" 
          placeholder="email"
          value={ formData.email }
          onChange = { handleChange }
          inputMode = 'email'
          className = { `${!isValidEmail(formData.email) && 'has-error'}` }
        />

        { !isValidEmail(formData.email) && (
          <span>Email no es válido</span>
        )}

        <input 
          type="password" 
          name="password" 
          id="password" 
          placeholder="password"
          value={ formData.password }
          onChange = { handleChange }
          className = { `${formData.name.trim().length <= 0 && 'has-error'}` }
        />

        { formData.password.trim().length <= 0 && (
          <span>Este campo es necesario</span>
        )}
        { (formData.password.trim().length <= 6 ) && (formData.password.trim().length > 0) && (
          <span>La contraseña debe tener 6 caracteres</span>
        )}

        <input 
          type="password" 
          name="confirmation" 
          id="confirmation" 
          placeholder="confirmation"
          value={ formData.confirmation }
          onChange = { handleChange }
        />

        { formData.password.trim().length <= 0 && (
          <span>Este campo es necesario</span>
        )}

        { (formData.password.trim().length !== formData.confirmation.trim().length ) 
          && (formData.password.trim().length > 0) && (
          <span>Las contraseñas deben ser iguales</span>
        )}

        <button type="submit">
          Create
        </button>

        <button type="button" onClick={ resetForm }>
          Reset
        </button>

      </form>
    </div>
  )
}
