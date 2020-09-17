import React from "react";
import style from "./Preloader.module.css";
import preloader from "../../../assets/images/preloader.gif";

const Preloader = (props) => {
  return (
    <div className={style.container}>
        <img className={style.preloader} src={ preloader } />
    </div>
  );
};

export default Preloader;
