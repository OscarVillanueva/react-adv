import { InputHTMLAttributes } from "react"

import { ErrorMessage, useField } from "formik"

interface InputTextProps extends InputHTMLAttributes<HTMLSelectElement>{
  label: string,
  name: string,
}

export const InputSelect = ({ label, ...rest }: InputTextProps) => {

  const [field] = useField(rest)

  return (
    <>
      <label htmlFor={ rest.id || rest.name }>{ label }</label>
      <select
        { ...field }
        { ...rest }
      />
      <ErrorMessage name = { rest.name } component = 'span' />
      {/* {meta.touched && meta.error && (
        <span>{meta.error}</span>
      )} */}
    </>
  )
}
