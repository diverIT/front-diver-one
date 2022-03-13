import Link from "next/link";
import React, { useContext } from "react";
import styles from "../../styles/Form.module.css";
import Button from "../button/Button";
import { useForm } from "react-hook-form";
import { userSchema } from "../../helpers/validation";
import { yupResolver } from '@hookform/resolvers/yup'
import ContextStore from "../../store/Context";

export default function Form() {
  const { login, setHasError } = useContext(ContextStore)
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: "",
      password: ""
    },
    resolver: yupResolver(userSchema)
  });
  async function onSubmit(data) {
    setHasError(false)
    if (!data) return
    await login(data)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <label className={styles.labelForm}>Login</label>
        <input
          type="text"
          name="user"
          className={styles.inputForm}
          placeholder="Usuario"
          {...register("email")}
        />
        {errors.email?.message}
        <input
          type="password"
          name="password"
          className={styles.inputForm}
          placeholder="Contraseña"
          {...register("password")}
        />
        {errors.password?.message}
        <Button
          message="Iniciar Session"
          background="black"
          width="10rem"
          color="white"
        />
        <span>
          <Link href="#/" style={{color:"black"}}>Olvide Mi Contraseña</Link>
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
