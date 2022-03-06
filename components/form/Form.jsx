import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "../../styles/Form.module.css";
import Button from "../button/Button";
import validate from "../middlewares/validationMiddleware";
const initialState = {
  email: "",
  password: "",
};

export default function Form() {
  const [data, setData] = useState(initialState);
  const [error, guardarError] = useState("");  
  const router = useRouter();

  
  const sendData = async (e) => {    
    e.preventDefault();   
     
    const recibiendo = await validate(data);

    if(typeof recibiendo === 'boolean'){
      setData({ user: "", password: "" })
      router.push("/userLogged");      
    }else{
      guardarError(recibiendo);
    }      
  }

  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <>
      <form onSubmit={sendData} className={styles.form}>
        <label className={styles.labelForm}>Login</label>        
        <input
          type="text"
          name="email"
          id="email"
          className={styles.inputForm}
          placeholder="Usuario"
          onChange={handleChange}
          value={data.user}
        />
        {error ?<p className={styles.errorForm}>{error[0]}</p>:null}
        <input
          type="password"
          name="password"
          id="password"
          className={styles.inputForm}
          placeholder="Contraseña"
          onChange={handleChange}
          value={data.password}
        />
        {error ?<p className={styles.errorForm}>{error[1]}</p>:null}
        <Button
          message="Iniciar Session"
          background="black"
          width="10rem"
          color="white"
        />
        <span>
          <Link href="/">Olvide Mi Contraseña</Link>
        </span>
      </form>
      <style jsx>{`
        span {
          color: rgb(0, 0, 0, 0.5);
        }
      `}</style>
    </>
  );
}
