import {
    faCogs,
    faHome,
    faProjectDiagram,
    faTasks,
    faUser,
    faUsers,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styles from "../../styles/Aside.module.css";
import Button from "../../components/button/Button";
import Services from "../../services/Services";
import { useRouter } from "next/router";


export default function Aside() {
    const router = useRouter()
    async function handleClick(){
        await Services.logout()
        router.push('/login')
        
    }
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
                            <button onClick={handleClick} style={buttonClose}>Cerrar Sesion</button>
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
const buttonClose = {
    border : 0,
    cursor: "pointer",
    backgroundColor: "inherit",
    color: "white",
    fontSize : "1rem"
}
