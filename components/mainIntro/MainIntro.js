import React, { useContext } from "react";
import ContextStore from "../../store/Context";
import styles from "../../styles/Main.module.css";
import Form from "../form/Form";
import Modal from "../modal/Modal";

const MainIntro = () => {
  const { hasError, isLoading } = useContext(ContextStore)
  return (
    <div className={styles.mainContent}>
      <Form />
      {isLoading &&  <Modal />}
      {
        hasError && <p> Error en el usuario o Contraseña</p>
      }

    </div>
  );
};

export default MainIntro;
