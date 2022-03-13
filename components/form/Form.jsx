import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "../../styles/Form.module.css";
import Button from "../button/Button";
import { useForm } from "react-hook-form";

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues:{
      email: "",
      password: ""
    },

  });
  const onSubmit = () => {

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
        <p>{errors.email?.message}</p>
        <input
          type="password"
          name="password"
          className={styles.inputForm}
          placeholder="Contraseña"
          {...register("password")}
        />
        
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
