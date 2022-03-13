import * as yup from 'yup';

export const userSchema = yup.object().shape({
    email: yup.string().required("Se requiere el email").email("El email no es valido"),
    password: yup.string().required("La contraseña es requerida").min(6,"La contraseña  debe ser minimo de 6 caracteres"),
    
});