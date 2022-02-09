import {
  faCogs,
  faHome,
  faProjectDiagram,
  faTasks,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styles from "../../styles/Aside.module.css";
import Button from "./../../components/Button";

export default function Aside() {
  // const location = useLocation().pathname;
  function handleClick() {
    alert("Proyecto creado");
  }

  return (
    <>
      <aside className={styles.contentLogeed}>
        <section className={styles.box}>
          <div className={styles.boxNav}>
            <FontAwesomeIcon icon={faHome} className={styles.icon} />
            <Link href="/">Inicio</Link>
          </div>
          <div className={styles.boxNav}>
            <FontAwesomeIcon icon={faUser} className={styles.icon} />
            <Link href="/perfil">Perfil</Link>
          </div>
        </section>

        <section className={styles.box}>
          <div className={styles.boxNav}>
            <FontAwesomeIcon icon={faProjectDiagram} className={styles.icon} />
            <Link href="/activeProjects">Proyectos Activos</Link>
          </div>
          <div className={styles.boxNav}>
            <FontAwesomeIcon icon={faUsers} className={styles.icon} />
            <Link href="/teams">Equipos</Link>
          </div>
        </section>

        <section className={styles.box}>
          <div className={styles.boxNav}>
            <FontAwesomeIcon icon={faProjectDiagram} className={styles.icon} />
            <Link href="/finishedprojects">Proyectos Listos</Link>
          </div>
          <div className={styles.boxNav}>
            <FontAwesomeIcon icon={faTasks} className={styles.icon} />
            <Link href={"/tasks"}>Tareas</Link>
          </div>
        </section>
        {/* fixme please!!! */}
        <section className={styles.boxNavFooter}>
          <div className={styles.thouma}>
            <div className={styles.thouma1}>
              <Button
                message="Iniciar Proyecto"
                background="yellow"
                width="12rem"
              />
            </div>
            <div className={styles.thouma2}>
              <Link href="/">Cerrar Sesion</Link>
            </div>
          </div>
          <div className={styles.boxNav}>
            <FontAwesomeIcon icon={faCogs} className={styles.icon} />
            <Link href="#">Soporte</Link>
          </div>
        </section>
      </aside>
    </>
  );
}
