import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import styles from "./Section.module.css";

const contentbox = [
  {
    icon: "faHome",
    href: "/",
    hrefValue: "Inicio",
  },
  {
    icon: "faUser",
    href: "/perfil",
    hrefValue: "Perfil",
  },
  {
    icon: "faProjectDiagram",
    href: "/activeProjects",
    hrefValue: "Proyectos Activos",
  },
  {
    icon: "faUsers",
    href: "/teams",
    hrefValue: "Equipos",
  },
  {
    icon: "faProjectDiagram",
    href: "/endProjects",
    hrefValue: "Proyectos Terminados",
  },
  {
    icon: "faTask",
    href: "/tasks",
    hrefValue: "Tareas",
  },
];

const SectionAside = () => {
  const [obj, setObj] = useState(contentbox);
  return (
    <section className={styles.box}>
      <div className={styles.boxNav}>
        <FontAwesomeIcon icon={faHome} className={styles.icon} />
        <Link href="/">Inicio</Link>
      </div>
      <div className={styles.boxNav}>
        <FontAwesomeIcon icon={obj[1].hrefValue} className={styles.icon} />
        <Link href="/perfil">Perfil</Link>
      </div>
    </section>
  );
};

export default SectionAside;
