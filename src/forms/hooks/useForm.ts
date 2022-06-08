import { useState, ChangeEvent } from 'react'

interface useFormProps<T> {
  initialValues: T
}

interface ToolBox<T>{
  formData: T,
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void,
  resetForm: () => void,
  isValidEmail: (email: string) => boolean
}

const useForm = <T>( props: useFormProps<T> ): ToolBox<T> => {

  const [formData, setFormData] = useState(props.initialValues)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) : void => {

    const { value, name } = e.target

    setFormData( prev => ({
      ...prev,
      [name]: value
    }))

  }

  const resetForm = () : void=> setFormData({ ...props.initialValues })

  const isValidEmail = ( email: string ) : boolean => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  return {
    formData,
    handleChange,
    resetForm,
    isValidEmail
  };
}
 
export default useForm;