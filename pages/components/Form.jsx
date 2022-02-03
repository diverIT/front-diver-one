import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "../../styles/Form.module.css";
import Button from "./Button";

const initialState = {
  user: "",
  password: "",
};
export default function Form() {
  const [data, setData] = useState(initialState);
  const router = useRouter();
  function sendData(e) {
    e.preventDefault();
    setData({ user: "", password: "" });
    if (data.user) {
      router.push("/aside-logeed");
    }
  }
  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: [e.target.value],
    });
  }
  return (
    <>
      <form onSubmit={sendData} className={styles.form}>
        <label className={styles.labelForm}>Login</label>
        <input
          type="text"
          name="user"
          className={styles.inputForm}
          placeholder="Usuario"
          onChange={handleChange}
          value={data.user}
        />
        <input
          type="password"
          name="password"
          className={styles.inputForm}
          placeholder="Contraseña"
          onChange={handleChange}
          value={data.password}
        />
        <Button />
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
