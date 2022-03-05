import { object } from "yup";
import { userSchema } from "../Validation/loginValidation";

const validate = async (data) =>{
  try{
    await userSchema.validate({
      email: data.email,
      password: data.password
    });
    
    return true;
    
  }catch(error){ 
    const mensaje = error.message;     
    return mensaje;   
  }
}

export default validate;

