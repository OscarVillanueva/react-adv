import { InputHTMLAttributes } from "react"

import { ErrorMessage, useField } from "formik"

interface InputCheckBoxProps {
  label: string,
  name: string,
  placeholder ?: string,
}

export const InputCheckBox = ({ label, ...rest }: InputCheckBoxProps) => {

  const [field] = useField({ ...rest, type: 'checkbox' })

  return (
    <>
      <label>
        <input type = 'checkbox' { ...field } {...rest}/>
        { label }
      </label>
      <ErrorMessage name = { rest.name } component = 'span' />
      {/* {meta.touched && meta.error && (
        <span>{meta.error}</span>
      )} */}
    </>
  )
}
