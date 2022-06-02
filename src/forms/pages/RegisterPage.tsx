import { ChangeEvent, FormEvent, useState } from 'react'

// Styles
import '../styles/styles.css'

export const RegisterPage = () => {

  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    confirmation: ''
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) : void => {

    const { value, name } = e.target

    setRegisterData( prev => ({
      ...prev,
      [name]: value
    }))

  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) : void => {
    e.preventDefault()
  }

  return (
    <div>
      <h1>Register Page</h1>

      <form onSubmit={ handleSubmit }>

        <input 
          type="text" 
          name="name" 
          id="name" 
          placeholder="name"
          value={ registerData.name }
          onChange = { handleChange }
        />

        <input 
          type="email" 
          name="email" 
          id="email" 
          placeholder="email"
          value={ registerData.email }
          onChange = { handleChange }
          inputMode = 'email'
        />

        <input 
          type="password" 
          name="password" 
          id="password" 
          placeholder="password"
          value={ registerData.password }
          onChange = { handleChange }
        />

        <input 
          type="password" 
          name="confirmation" 
          id="confirmation" 
          placeholder="confirmation"
          value={ registerData.confirmation }
          onChange = { handleChange }
        />

        <button type="submit">
          Create
        </button>

      </form>
    </div>
  )
}
