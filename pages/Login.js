import React from "react";
import style from "../styles/Login.module.css";
import Aside from "./aside-content/Aside";
import Main from "./main-content/MainContent";

const Login = () => {
  return (
    <div className={style.content}>
      <Main />
      <Aside />
    </div>
  );
};

export default Login;
