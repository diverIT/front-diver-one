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
import Button from "../../components/button/Button";


export default function Aside() {
    return (

        <>
            <aside className={styles.contentLogeed}>
                <section className={styles.box}>
                    <Link href="/userLogged">
                        <div className={styles.boxNav}>
                            <FontAwesomeIcon icon={faHome} className={styles.icon} />
                            Inicio
                        </div>
                    </Link>
                    <Link href="/perfil">
                        <div className={styles.boxNav}>
                            <FontAwesomeIcon icon={faUser} className={styles.icon} />
                            Perfil
                        </div>
                    </Link>
                </section>

                <section className={styles.box}>
                    <Link href="/activeProjects">
                        <div className={styles.boxNav}>
                            <FontAwesomeIcon icon={faProjectDiagram} className={styles.icon} />
                            Proyectos Activos
                        </div>
                    </Link>
                    <Link href="/teams">
                        <div className={styles.boxNav}>
                            <FontAwesomeIcon icon={faUsers} className={styles.icon} />
                            Equipos
                        </div>
                    </Link>
                </section>

                <section className={styles.box}>
                    <Link href="/finishedprojects">
                        <div className={styles.boxNav}>
                            <FontAwesomeIcon icon={faProjectDiagram} className={styles.icon} />
                            Proyectos Listos
                        </div>
                    </Link>
                    <Link href="/tasks">
                        <div className={styles.boxNav}>
                            <FontAwesomeIcon icon={faTasks} className={styles.icon} />
                            Tareas
                        </div>
                    </Link>
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
                            <Link href="/login">Cerrar Sesion</Link>
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
