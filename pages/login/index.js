import React from "react";
import AsideIntro from "../../components/AsideIntro";
import MainIntro from "../../components/MainIntro";
import style from "../../styles/Login.module.css";

const Login = () => {
  return (
    <div className={style.content}>
      <MainIntro />
      <AsideIntro />
    </div>
  );
};

export default Login;
