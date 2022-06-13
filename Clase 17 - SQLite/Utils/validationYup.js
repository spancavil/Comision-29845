import * as yup from 'yup'

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Ingrese un email válido")
    .required('Campo obligatorio'),
  password: yup
    .string()
    .min(6, ({ min }) => `El password debe contener al menos ${min} caracteres`)
    .required('Campo obligatorio'),
})

export default loginValidationSchema;