import { object } from "yup";
import { userSchema } from "../Validation/loginValidation";

// Aca intentamos validar los formularios
const validate = async (data) =>{  
  
  try{    
    await userSchema.validate(data, {abortEarly: false}); 
    return true;    
  }catch(error){ 
    const mensaje = error.errors;        
    return mensaje;   
  }
}

export default validate;

