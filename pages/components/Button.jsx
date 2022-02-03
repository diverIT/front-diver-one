import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/Main.module.css";
function Button() {
  return (
    <>
      <button className={styles.button}>
        <FontAwesomeIcon icon={faUser} className={styles.buttonLogin} />
        Iniciar Sesion
      </button>
    </>
  );
}

export default Button;
