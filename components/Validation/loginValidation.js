import * as yup from 'yup';

export const userSchema = yup.object().shape({
    email: yup.string().email("El email no es valido").required("Se requiere el email"),
    password: yup.string().required("El password es requerido").min(6,"El password debe ser minimo de 6 caracteres"),
    
});