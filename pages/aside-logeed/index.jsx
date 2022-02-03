export default function Aside() {
  // const location = useLocation().pathname;
  function handleClick() {
    alert("Proyecto creado");
  }

  return (
    <aside className="aside-box">
      <h2>Este el el sitio logeado</h2>
      {/* <div className="box-1">
        <Link to="/home">
          <div className={location === "/home" ? "link-active" : "link"}>
            <FontAwesomeIcon icon={faHome} className="icon" />
            Inicio
          </div>
        </Link>
        <Link to="/profile">
          <div className={location === "/profile" ? "link-active" : "link"}>
            <FontAwesomeIcon icon={faUser} className="icon" />
            Perfil
          </div>
        </Link>
      </div>
      <div className="box-2">
        <Link to="/activeProjects">
          <div
            className={location === "/activeProjects" ? "link-active" : "link"}
          >
            <FontAwesomeIcon icon={faProjectDiagram} className="icon" />
            Proyectos Activos
          </div>
        </Link>
        <Link to="/teams">
          <div className={location === "/teams" ? "link-active" : "link"}>
            <FontAwesomeIcon icon={faUsers} className="icon" />
            Equipos
          </div>
        </Link>
      </div>
      <div className="box-3">
        <div className="box-children1">
          <Link to="/finishedprojects">
            <div
              className={
                location === "/finishedprojects" ? "link-active" : "link"
              }
            >
              <FontAwesomeIcon icon={faProjectDiagram} className="icon" />
              Proyectos Listos
            </div>
          </Link>
          <Link to="/tasks">
            <div className={location === "/tasks" ? "link-active" : "link"}>
              <FontAwesomeIcon icon={faTasks} className="icon" />
              Tareas
            </div>
          </Link>
        </div>
        <div className="box-children2">
          <Button
            value={"Crear Proyecto "}
            onClick={handleClick}
            className={"button-newproject"}
          />
          <div>
            <Link to="/" style={{ textDecoration: "underline" }}>
              Cerrar Sesion
            </Link>
          </div>
        </div>
      </div>
      <div className="box-4">
        <Link to="#">
          <div>
            <FontAwesomeIcon icon={faCogs} className="icon" />
            Soporte
          </div>
        </Link>
      </div> */}
    </aside>
  );
}
