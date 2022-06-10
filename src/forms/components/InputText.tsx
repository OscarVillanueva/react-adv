import { InputHTMLAttributes } from "react"

import { ErrorMessage, useField } from "formik"

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement>{
  label: string,
  name: string,
  type ?: 'text' | 'email' | 'password'
  placeholder ?: string,
}

export const InputText = ({ label, ...rest }: InputTextProps) => {

  const [field] = useField(rest)

  return (
    <>
      <label htmlFor={ rest.id || rest.name }>{ label }</label>
      <input className="text-input" { ...field } {...rest}/>
      <ErrorMessage name = { rest.name } component = 'span' />
      {/* {meta.touched && meta.error && (
        <span>{meta.error}</span>
      )} */}
    </>
  )
}
