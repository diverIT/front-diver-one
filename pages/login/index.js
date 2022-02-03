import React from "react";
import style from "../../styles/Login.module.css";
import AsideIntro from "../components/AsideIntro";
import MainIntro from "./../components/MainIntro";

const Login = () => {
  return (
    <div className={style.content}>
      <MainIntro />
      <AsideIntro />
    </div>
  );
};

export default Login;
