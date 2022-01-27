import React from "react";
import styles from "../../styles/Main.module.css";

const Main = () => {
  return (
    <div className={styles.mainContent}>
      <h2 className={styles.title}>Login</h2>
      <input className={styles.input} type="text" placeholder="Usuario" />
      <input className={styles.input} type="text" placeholder="Contraseña" />
      <button className={styles.button}>Iniciar Session</button>
      <small className={styles.small}>Olvide mi contraseña</small>
      <small className={styles.small2}>Crear cuenta</small>
    </div>
  );
};

export default Main;
